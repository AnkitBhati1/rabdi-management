
import { useEffect, useState } from 'react';
import { VendorsList } from './helper/VendorsList';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

interface BillData {
    id: number;
    startDate: string;
    endDate: string;
    totalRabdi: number;
    rabdiBill: number;
    rabdiAmountDeposited: number;
    rabdiRemainingAmount: number;
    totalMilk: number;
    totalMilkFat: number;
    totalMilkWithoutFat: number;
    milkFatBill: number;
    milkWithoutFatBill: number;
    totalMilkBill: number;
    totalGas: number;
    milkAmountDeposited: number;
    milkAmountRemaining: number;
    gasBill: number;
    vendorType: string;
    createdAt: string;
}

interface Entries {
    rabdi: [];
    milk: [];
    gas: [];
}

export default function GenerateBill() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [vendorId, setVendorId] = useState('');
    const [rabdiRate, setRabdiRate] = useState('');
    const [milkFatRate, setMilkFatRate] = useState('');
    const [milkWithoutFatRate, setMilkWithoutFatRate] = useState('');
    const [billData, setBillData] = useState<BillData | null>(null);
    const [entries, setEntries] = useState<Entries | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'startDate') setStartDate(value);
        if (name === 'endDate') setEndDate(value);
        if (name === 'vendorId') setVendorId(value);
        if (name === 'rabdiRate') setRabdiRate(value);
        if (name === 'milkFatRate') setMilkFatRate(value);
        if (name === 'milkWithoutFatRate') setMilkWithoutFatRate(value);
    };

    const handleGenerate = async () => {
        if (
            Number(rabdiRate) < 0 ||
            Number(milkFatRate) < 0 ||
            Number(milkWithoutFatRate) < 0
        )
        {
            alert('Rates cannot be negative.');
            return;
        }

        setLoading(true);
        setBillData(null);

        const rabdiRateToSend = rabdiRate || '300';
        const milkFatRateToSend = milkFatRate || '44';
        const milkWithoutFatRateToSend = milkWithoutFatRate || '34';

        try
        {
            const res = await fetch('/api/bill', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ startDate, endDate, vendorId, rabdiRate: rabdiRateToSend, milkFatRate: milkFatRateToSend, milkWithoutFatRate: milkWithoutFatRateToSend }),
            });

            const data = await res.json();
            // console.log(data.entries)

            if (!res.ok)
            {
                alert(data.error || 'Something went wrong.');
            } else
            {
                setBillData(data.updated_bill);
                setEntries(data.entries);
            }
        } catch (err)
        {
            alert('Failed to generate bill.');
        } finally
        {
            setLoading(false);
        }
    };

    const [vendorName, setVendorName] = useState('');

    useEffect(() => {
        const fetchVendorName = async () => {
            if (!vendorId) return;
            try {
                const response = await fetch(`/api/vendors?type=milk`);
                const vendors = await response.json();
                const vendor = vendors.find((v: { id: number }) => v.id === Number(vendorId));
                setVendorName(vendor?.name || '');
            } catch (error) {
                console.error('Failed to fetch vendor name:', error);
            }
        };

        fetchVendorName();
    }, [vendorId]);

    const generatePDF = () => {
        if (!billData) return;

        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text(
            `${vendorName} Bill Summary (${new Date(billData.startDate).toLocaleDateString()} - ${new Date(billData.endDate).toLocaleDateString()})`,
            14,
            20
        );

        const summary_data = [
            ['Start Date', new Date(billData.startDate).toLocaleDateString()],
            ['End Date', new Date(billData.endDate).toLocaleDateString()],

        ];

        if (billData.vendorType == 'milk')
        {
            summary_data.push(['Total Milk', `${billData.totalMilk.toFixed(2)}`]);
            summary_data.push(['Total Milk Bill', `${billData.totalMilkBill.toFixed(2)}`]);
            summary_data.push(['Total Milk Amount Due', `${billData.milkAmountRemaining.toFixed(2)}`]);
            summary_data.push(['Total Milk Amount Deposited', `${billData.milkAmountDeposited.toFixed(2)}`]);
        }
        if (billData.vendorType == 'milk' && billData.totalMilkFat > 0)
        {
            summary_data.push(['Milk Fat', `${billData.totalMilkFat.toFixed(2)}`]);
            summary_data.push(['Amount Milk Fat', `${billData.milkFatBill.toFixed(2)}`]);
        }

        if (billData.vendorType == 'milk' && billData.totalMilkWithoutFat > 0)
        {
            summary_data.push(['Milk Without Fat', `${billData.totalMilkWithoutFat.toFixed(2)}`]);
            summary_data.push(['Amount Milk Without Fat', `${billData.milkWithoutFatBill.toFixed(2)}`]);
        }

        if (billData.vendorType == 'rabdi')
        {
            summary_data.push(['Total Rabdi', `${billData.totalRabdi.toFixed(2)}`]);
            summary_data.push(['Rabdi Bill', `${billData.rabdiBill.toFixed(2)}`]);
            summary_data.push(['Rabdi Amount Deposited', `${billData.rabdiAmountDeposited.toFixed(2)}`]);
            summary_data.push(['Rabdi Amount Remaining', `${billData.rabdiRemainingAmount.toFixed(2)}`]);
        }

        if (billData.vendorType == 'gas')
        {
            summary_data.push(['Total Gas', `${billData.totalGas.toFixed(2)}`]);
            summary_data.push(['Gas Bill', `${billData.gasBill.toFixed(2)}`]);
        }


        autoTable(doc, {
            startY: 30,
            head: [['Field', 'Value']],
            body: summary_data,
        });

        const startX = (doc as any).lastAutoTable?.finalY
            ? (doc as any).lastAutoTable.finalY + 10
            : 40;

        if (!entries) return;
        // Rabdi Entries
        autoTable(doc, {
            startY: startX,
            head: [['Rabdi Date', 'Quantity', 'Amount Deposited']],
            body: entries.rabdi.map((entry: any) => [
                new Date(entry.date).toLocaleDateString(),
                entry.quantity,
                entry.amountDeposited,
            ]),
        });

        const startY = (doc as any).lastAutoTable?.finalY
            ? (doc as any).lastAutoTable.finalY + 10
            : 40;

        autoTable(doc, {
            startY,
            head: [['Milk Date', 'Milk Type', 'Quantity', 'Amount Deposited']],
            body: entries.milk.map((entry: any) => [
                new Date(entry.date).toLocaleDateString(),
                entry.milkType,
                entry.quantity,
                entry.amountDeposited,
            ]),
        });

        const startZ = (doc as any).lastAutoTable?.finalY
            ? (doc as any).lastAutoTable.finalY + 10
            : 40;

        // Gas Entries
        autoTable(doc, {
            startY: startZ,
            head: [['Gas Date', 'Quantity']],
            body: entries.gas.map((entry: any) => [
                new Date(entry.date).toLocaleDateString(),
                entry.quantity,
            ]),
        });


        doc.save(`Bill_${billData.id}.pdf`);
    };

    const generateExcel = () => {
        if (!billData) return;

        const data = [
            ['Start Date', new Date(billData.startDate).toLocaleDateString()],
            ['End Date', new Date(billData.endDate).toLocaleDateString()],
            ['Total Rabdi', billData.totalRabdi],
            ['Rabdi Bill', billData.rabdiBill],
            ['Milk Fat', billData.totalMilkFat],
            ['Milk Fat Bill', billData.milkFatBill],
            ['Milk Without Fat', billData.totalMilkWithoutFat],
            ['Milk Without Fat Bill', billData.milkWithoutFatBill],
            ['Total Milk', billData.totalMilk],
            ['Total Gas', billData.totalGas],
            ['Gas Bill', billData.gasBill],
        ];

        const worksheet = XLSX.utils.aoa_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Bill');


        XLSX.writeFile(workbook, `Bill_${billData.id}.xlsx`);
    };


    return (
        <div className="max-w-4xl mx-auto p-4 ">
            <div className="bg-blue-50 shadow-md rounded-xl p-6 space-y-4 dark:text-black">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Start Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            value={startDate}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required
                        />
                    </div>

                    {/* End Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input
                            type="date"
                            name="endDate"
                            value={endDate}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required
                        />
                    </div>

                    {/* Vendor Dropdown */}
                    <VendorsList value={vendorId} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Rabdi Rate */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Rabdi Rate</label>
                        <input
                            type="number"
                            name="rabdiRate"
                            value={rabdiRate}
                            onChange={handleChange}
                            placeholder='300'
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Milk Fat Rate */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Milk Fat Rate</label>
                        <input
                            type="number"
                            name="milkFatRate"
                            value={milkFatRate}
                            onChange={handleChange}
                            placeholder='44'
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Milk Without Fat Rate */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Milk Without Fat Rate</label>
                        <input
                            type="number"
                            name="milkWithoutFatRate"
                            value={milkWithoutFatRate}
                            onChange={handleChange}
                            placeholder='34'
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                {/* Generate Button */}
                <div>
                    <button
                        onClick={handleGenerate}
                        disabled={loading || !startDate || !endDate || !vendorId}
                        className="w-full bg-black rounded-2xl text-white p-3 hover:bg-white hover:text-black border border-bg-black "
                    >
                        {loading ? 'Generating...' : 'Generate Bill'}
                    </button>
                </div>

                {/* Bill Details */}
                {billData && (
                    <div className="border-t pt-4 space-y-2">
                        <h2 className="text-lg font-semibold">Bill Summary</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
                            <div><strong>Total Rabdi:</strong> {billData.totalRabdi.toFixed(2)}</div>
                            <div><strong>Rabdi Bill:</strong> ₹ {billData.rabdiBill.toFixed(2)}</div>
                            <div><strong>Rabdi Amount Deposited:</strong> ₹ {billData.rabdiAmountDeposited.toFixed(2)}</div>
                            <div><strong>Rabdi Amount Remaining:</strong> ₹ {billData.rabdiRemainingAmount.toFixed(2)}</div>
                            <div><strong>Total Milk:</strong> {billData.totalMilk.toFixed(2)}</div>
                            <div><strong>Total Milk Bill:</strong> ₹ {billData.totalMilkBill.toFixed(2)}</div>
                            <div><strong>Milk Fat:</strong> {billData.totalMilkFat} (₹ {billData.milkFatBill.toFixed(2)})</div>
                            <div><strong>Milk Without Fat:</strong> {billData.totalMilkWithoutFat.toFixed(2)} (₹ {billData.milkWithoutFatBill.toFixed(2)})</div>
                            <div><strong>Milk Amount Deposited:</strong> ₹ {billData.milkAmountDeposited.toFixed(2)}</div>
                            <div><strong>Milk Amount Remaining:</strong> ₹ {billData.milkAmountRemaining.toFixed(2)}</div>
                            <div><strong>Total Gas:</strong> {billData.totalGas.toFixed(2)}</div>
                            <div><strong>Gas Bill:</strong> ₹ {billData.gasBill.toFixed(2)}</div>
                        </div>
                        {/* Milk Entries Table */}
                        <div className="w-full flex flex-col mb-10 max-w-6xl border border-black rounded items-center p-4">
                            <div className="w-full max-h-[300px] overflow-y-auto pr-2">
                                <h3 className="font-semibold mb-2">Bill Entries</h3>
                                {Array.isArray(entries?.milk) && entries.milk.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border text-xs">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="px-2 py-1 border">Date</th>
                                                    <th className="px-2 py-1 border">Milk Type</th>
                                                    <th className="px-2 py-1 border">Qunatity (in Liter)</th>
                                                    <th className="px-2 py-1 border">Amount Deposited</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {entries.milk.map((entry: any, idx: number) => (
                                                    <tr key={idx} className="even:bg-gray-50">
                                                        <td className="px-2 py-1 border">{new Date(entry.date).toLocaleDateString()}</td>
                                                        <td className="px-2 py-1 border">{entry.milkType}</td>
                                                        <td className="px-2 py-1 border">{entry.quantity}</td>
                                                        <td className="px-2 py-1 border">{entry.amountDeposited}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-gray-500">No milk data found.</div>
                                )}

                                {/* Rabdi Entries Table */}
                                <h4 className="font-semibold mt-4 mb-2">Rabdi Entries</h4>
                                {Array.isArray(entries?.rabdi) && entries.rabdi.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border text-xs">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="px-2 py-1 border">Date</th>
                                                    <th className="px-2 py-1 border">Quantity</th>
                                                    <th className="px-2 py-1 border">Amount Deposited</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {entries.rabdi.map((entry: any, idx: number) => (
                                                    <tr key={idx} className="even:bg-gray-50">
                                                        <td className="px-2 py-1 border">{new Date(entry.date).toLocaleDateString()}</td>
                                                        <td className="px-2 py-1 border">{entry.quantity}</td>
                                                        <td className="px-2 py-1 border">{entry.amountDeposited}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-gray-500">No rabdi data found.</div>
                                )}

                                {/* Gas Entries Table */}
                                <h4 className="font-semibold mt-4 mb-2">Gas Entries</h4>
                                {Array.isArray(entries?.gas) && entries.gas.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border text-xs">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="px-2 py-1 border">Date</th>
                                                    <th className="px-2 py-1 border">Quantity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {entries.gas.map((entry: any, idx: number) => (
                                                    <tr key={idx} className="even:bg-gray-50">
                                                        <td className="px-2 py-1 border">{new Date(entry.date).toLocaleDateString()}</td>
                                                        <td className="px-2 py-1 border">{entry.quantity}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-gray-500">No gas data found.</div>
                                )}
                                {/* <div className="text-gray-500">No bill entries found.</div> */}
                            </div>
                            {/* Download buttons */}
                            <div className="flex gap-5 pt-4">
                                <div className='bg-red-500 p-3 rounded-4xl hover:bg-red-700 transition-all duration-300 hover:scale-110'>
                                    <button onClick={generatePDF}>Download PDF</button>
                                </div>
                                {/* <div className='bg-green-500 p-3 rounded-4xl hover:bg-green-700 transition-all duration-300 hover:scale-110'>
                                <button onClick={generateExcel}>Download Excel</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
