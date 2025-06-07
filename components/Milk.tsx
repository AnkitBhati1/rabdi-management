import React, { useEffect, useState } from 'react';
import { AddVendorButton } from './helper/AddVendorButton';
import { Greet } from './helper/WelcomeMessage';
import { VendorsList } from './helper/VendorsList';
import { ShowEntriesDrawer } from './helper/ShowEntriesDrawer';

type MilkEntry = {
    id: number;
    date: string;
    vendorId: number;
    milkType: string;
    quantity: number;
    amountDeposited: number;
    vendor: {
        name: string;
    };
};

export default function Milk() {
    const [formData, setFormData] = useState({
        id: '',
        date: '',
        vendorId: '',
        milkType: '',
        customMilkType: '',
        quantity: '',
        amountDeposited: '0',
    });

    const [entries, setEntries] = useState<MilkEntry[]>([]);

    const fetchMilkEntries = async (page: number = 1) => {
        try
        {
            const res = await fetch(`/api/milk?page=1&limit=30`);
            const data = await res.json();
            setEntries(data.entries);
        } catch (error)
        {
            console.error('Error fetching entries:', error);
        }
    };

    useEffect(() => {
        fetchMilkEntries();
    }, []);


    // const fetchMilkEntries = async () => {
    //     try
    //     {
    //         const res = await fetch('/api/milk');
    //         const data = await res.json();
    //         setEntries(data);
    //     } catch (err)
    //     {
    //         alert('Failed to load milk entries.');
    //     }
    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // const { name, value } = e.target;
        // setFormData((prev) => ({ ...prev, [name]: value }));
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getMilkTypeLabel = (type: string) => {
        if (type === 'fat') return 'Fat Milk';
        if (type === 'withoutFat') return 'Without Fat Milk';
        return type;
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (
            Number(formData.quantity) < 0
        )
        {
            alert('Quantity cannot be negative.');
            return;
        }

        try
        {
            const res = await fetch('/api/milk', {
                method: formData.id ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    milkType: formData.milkType === 'other' ? formData.customMilkType : formData.milkType,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to submit form');

            setFormData({ id: '', date: '', vendorId: formData.vendorId, milkType: formData.milkType, quantity: '', amountDeposited: '0', customMilkType: '' });
            fetchMilkEntries();
        } catch (err: any)
        {
            alert(err.message);
        }
    };
    const handleCancel = () => {
        setFormData({ id: '', date: '', vendorId: formData.vendorId, milkType: formData.milkType, quantity: '', amountDeposited: '0', customMilkType: '' });
    };
    const handleEdit = (entry: MilkEntry) => {
        setFormData({
            id: entry.id.toString(),
            date: entry.date.split('T')[0],
            vendorId: entry.vendorId.toString(),
            // milkType: entry.milkType,
            quantity: entry.quantity.toString(),
            amountDeposited: entry.amountDeposited.toString(),
            milkType: entry.milkType === 'fat' || entry.milkType === 'withoutFat' ? entry.milkType : 'other',
            customMilkType: entry.milkType === 'fat' || entry.milkType === 'withoutFat' ? '' : entry.milkType,

        });
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this entry?')) return;

        const res = await fetch(`/api/milk?id=${id}`, { method: 'DELETE' });
        if (res.ok)
        {
            fetchMilkEntries();
        } else
        {
            const err = await res.json();
            alert(err.error || 'Failed to delete.');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <div className='w-full flex flex-col lg:w-3/4 p-4'>
                <Greet name="Milk" />
                <AddVendorButton />

                <form onSubmit={handleSubmit} className="flex flex-col mt-5">
                    <div className="px-2 sm:px-5">
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">Select Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full sm:w-64 p-2.5"
                            required
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/4 p-2 sm:m-5">
                            <VendorsList
                                type="milk"
                                value={formData.vendorId}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="sm:w-1/4 p-2 sm:m-5">
                            <label htmlFor="milkType" className="block mb-2 text-sm font-medium text-gray-900">Select type of Product</label>
                            <select
                                name="milkType"
                                value={formData.milkType}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required
                            >
                                <option value="">Choose</option>
                                <option value="withoutFat">Without Fat Milk</option>
                                <option value="fat">Fat Milk</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        {formData.milkType === 'other' && (
                            <div className="sm:w-1/4 p-2 sm:m-5">
                                <label htmlFor="customMilkType" className="block mb-2 text-sm font-medium text-gray-900">Specify Product Type</label>
                                <input
                                    type="text"
                                    name="customMilkType"
                                    id="customMilkType"
                                    value={formData.customMilkType}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Enter product type"
                                    required
                                />
                            </div>
                        )}

                        <div className="p-2 sm:w-1/4 sm:m-5">
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">Quantity (Liters)</label>
                            <input
                                type="float"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required
                            />

                        </div>
                        <div className='sm:w-1/4 p-2 sm:m-5'>
                            <label htmlFor="amountDeposited" className="block mb-2 text-sm font-medium text-gray-900">Amount Deposited</label>
                            <input
                                type="float"
                                name="amountDeposited"
                                value={formData.amountDeposited}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required
                            />
                        </div>
                    </div>
                    <div className="p-2 sm:m-5 flex gap-4 sm:place-self-end">
                        <button
                            type="submit"
                            className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 w-full sm:w-auto"
                        >
                            {formData.id ? 'Update' : 'Save'}
                        </button>
                        {formData.id && (
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="text-gray-700 bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full sm:w-auto"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
            <div className="w-full lg:w-1/4 bg-gray-400 p-4 overflow-y-auto">
                <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
                    <h2 className="text-lg font-semibold mb-2 sm:mb-0">Last 30 Entries</h2>
                    <ShowEntriesDrawer type="milk" />
                </div>
                {entries.length === 0 ? (
                    <p>No entries</p>
                ) : (
                    <div className="overflow-auto max-h-[80vh] w-[350px] lg:w-full ">
                        <div className="inline-block min-w-full">
                            <table className="w-full text-sm text-left text-gray-700 border-collapse">
                                <thead className="text-xs uppercase bg-gray-200 text-gray-600">
                                    <tr>
                                        <th className="px-2 py-2 border">Date</th>
                                        <th className="px-2 py-2 border">Vendor</th>
                                        <th className="px-2 py-2 border">Product type</th>
                                        <th className="px-2 py-2 border">Qty (L)</th>
                                        <th className="px-2 py-2 border">Amount De.</th>
                                        <th className="px-2 py-2 border">Actions</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {entries.map((entry) => (
                                        <tr key={entry.id} className="bg-white border-b">
                                            <td className="px-2 py-2 border whitespace-nowrap">{new Date(entry.date).toLocaleDateString()}</td>
                                            <td className="px-2 py-2 border">{entry.vendor.name}</td>
                                            <td className="px-2 py-2 border">{getMilkTypeLabel(entry.milkType)}</td>
                                            <td className="px-2 py-2 border">{entry.quantity}</td>
                                            <td className="px-2 py-2 border">{entry.amountDeposited}</td>
                                            <td className="px-2 py-2 border">
                                                <div className="flex flex-col sm:flex-row gap-2">
                                                    <button
                                                        className="text-blue-600 hover:underline mr-2"
                                                        onClick={() => handleEdit(entry)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="text-red-600 hover:underline"
                                                        onClick={() => handleDelete(entry.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>

                )}
            </div>
        </div >
    );
}
