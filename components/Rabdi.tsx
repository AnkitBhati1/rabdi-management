import React, { useEffect, useState } from 'react';
import { AddVendorButton } from "./helper/AddVendorButton";
import { Greet } from "./helper/WelcomeMessage";
import { VendorsList } from './helper/VendorsList';
import { ShowEntriesDrawer } from './helper/ShowEntriesDrawer';

export default function Rabdi() {
    const [entries, setEntries] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        vendorId: '',
        quantity: '',
        amountDeposited: '0',
    });
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // const fetchEntries = async () => {
    //     const res = await fetch('/api/rabdi');
    //     const data = await res.json();
    //     setEntries(data);
    // };

    const fetchEntries = async () => {
        try
        {

            // const res = await fetch(`/api/rabdi?vendorId=5&page=1&limit=30`);
            const res = await fetch(`/api/rabdi?page=1&limit=30`);
            const data = await res.json();
            setEntries(data.entries);
        } catch (error)
        {
            console.error('Error fetching entries:', error);
        }
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        const method = selectedId ? 'PUT' : 'POST';
        const url = '/api/rabdi';

        const body = selectedId
            ? JSON.stringify({ id: selectedId, ...formData })
            : JSON.stringify(formData);

        // console.log(body)
        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body,
        });

        if (res.ok)
        {
            setFormData({ date: '', vendorId: formData.vendorId, quantity: '', amountDeposited: '0' });
            setSelectedId(null);
            fetchEntries();
        } else
        {
            const err = await res.json();
            alert(err.error || 'Failed to submit.');
        }
    };

    const handleEdit = (entry: any) => {
        setSelectedId(entry.id);
        setFormData({
            date: entry.date.split('T')[0], // yyyy-mm-dd
            vendorId: entry.vendorId.toString(),
            quantity: entry.quantity.toString(),
            amountDeposited: entry.amountDeposited.toString(),
        });
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this entry?')) return;

        const res = await fetch(`/api/rabdi?id=${id}`, { method: 'DELETE' });
        if (res.ok)
        {
            fetchEntries();
        } else
        {
            const err = await res.json();
            alert(err.error || 'Failed to delete.');
        }
    };

    const handleCancel = () => {
        setFormData({ date: '', vendorId: '', quantity: '', amountDeposited: '0' });
        setSelectedId(null);
    };

    return (
        <div className='flex flex-col lg:flex-row min-h-screen'>
            {/* Left Panel - Form Section */}
            <div className='w-full flex flex-col lg:w-3/4  p-4'>
                <Greet name="Rabdi" />
                <AddVendorButton />

                <form onSubmit={handleSubmit} className='flex flex-col mt-5'>
                    <div className="px-2 sm:px-5">
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">
                            Select Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full sm:w-64 p-2.5"
                            required
                        />
                    </div>

                    <div className='flex flex-col sm:flex-row'>
                        <div className='w-full sm:w-1/3 p-2 sm:m-5'>
                            <VendorsList type="rabdi" value={formData.vendorId} onChange={handleChange} />
                        </div>

                        <div className='w-full sm:w-1/3 p-2 sm:m-5'>
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">
                                Quantity
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required
                            />
                        </div>

                        <div className='w-full sm:w-1/3 p-2 sm:m-5'>
                            <label htmlFor="amountDeposited" className="block mb-2 text-sm font-medium text-gray-900">
                                Amount Deposited
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                name="amountDeposited"
                                value={formData.amountDeposited}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required
                            />
                        </div>
                    </div>

                    <div className="p-2 sm:m-5 flex gap-4 sm:place-self-end">
                        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 w-full sm:w-auto">
                            {selectedId ? 'Update' : 'Save'}
                        </button>
                        {selectedId && (
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

            {/* Right Panel - Entries Table */}
            <div className="w-full lg:w-1/4 bg-gray-400 p-4 overflow-y-auto">
                <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
                    <h2 className="text-lg font-semibold mb-2 sm:mb-0">Last 30 Entries</h2>
                    <ShowEntriesDrawer type="rabdi" />
                </div>

                {entries.length === 0 ? (
                    <p>No entries</p>
                ) : (
                    <div className="overflow-x-auto max-h-[80vh] sm:max-w-auto relative">
                        <div className="inline-block min-w-full">
                            <table className="w-full text-sm text-left text-gray-700 border-collapse">
                                <thead className="text-xs uppercase bg-gray-200 text-gray-600">
                                    <tr>
                                        <th className="px-2 py-2 border">Date</th>
                                        <th className="px-2 py-2 border">Vendor</th>
                                        <th className="px-2 py-2 border">Qty (kg)</th>
                                        <th className="px-2 py-2 border">Amount</th>
                                        <th className="px-2 py-2 border">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entries.map((entry: any) => (
                                        <tr key={entry.id} className="bg-white border-b">
                                            <td className="px-2 py-2 border whitespace-nowrap">
                                                {new Date(entry.date).toLocaleDateString()}
                                            </td>
                                            <td className="px-2 py-2 border">{entry.vendor.name}</td>
                                            <td className="px-2 py-2 border">{entry.quantity}</td>
                                            <td className="px-2 py-2 border">{entry.amountDeposited}</td>
                                            <td className="px-2 py-2 border">
                                                <div className="flex flex-col sm:flex-row gap-2">
                                                    <button
                                                        onClick={() => handleEdit(entry)}
                                                        className="text-blue-600 hover:underline text-center"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(entry.id)}
                                                        className="text-red-600 hover:underline text-center"
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
        </div>
    );

    // return (
    //     <div className='flex'>
    //         <div className='flex flex-col w-3/4 bg-blue-50 h-screen'>
    //             <Greet name="Rabdi" />
    //             <AddVendorButton />

    //             <form onSubmit={handleSubmit} className='flex flex-col mt-10'>
    //                 <div className="p-5">
    //                     <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">Select Date</label>
    //                     <input
    //                         type="date"
    //                         name="date"
    //                         value={formData.date}
    //                         onChange={handleChange}
    //                         className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-64 p-2.5"
    //                         required
    //                     />
    //                 </div>

    //                 <div className='flex'>
    //                     <div className='w-1/3 m-5'>
    //                         <VendorsList type="rabdi" value={formData.vendorId} onChange={handleChange} />
    //                     </div>

    //                     <div className='w-1/3 m-5'>
    //                         <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">Quantity</label>
    //                         <input
    //                             type="float"
    //                             name="quantity"
    //                             value={formData.quantity}
    //                             onChange={handleChange}
    //                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    //                             required
    //                         />
    //                     </div>
    //                     <div className='w-1/3 m-5'>
    //                         <label htmlFor="amountDeposited" className="block mb-2 text-sm font-medium text-gray-900">Amount Deposited</label>
    //                         <input
    //                             type="float"
    //                             name="amountDeposited"
    //                             value={formData.amountDeposited}
    //                             onChange={handleChange}
    //                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    //                             required
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className="m-5 flex gap-4 place-self-end">
    //                     <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
    //                         {selectedId ? 'Update' : 'Save'}
    //                     </button>
    //                     {selectedId && (
    //                         <button
    //                             type="button"
    //                             onClick={handleCancel}
    //                             className="text-gray-700 bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
    //                         >
    //                             Cancel
    //                         </button>
    //                     )}
    //                 </div>
    //             </form>
    //         </div>

    //         <div className="w-1/4 bg-gray-400 p-4 overflow-y-auto h-screen">
    //             <div className='flex justify-between'>
    //                 <h2 className="text-lg font-semibold mb-4">Last 30 Entries</h2>
    //                 <ShowEntriesDrawer type="rabdi" />

    //             </div>

    //             {entries.length === 0 ? (
    //                 <p>No entries</p>
    //             ) :
    //                 (

    //                     <div className="overflow-y-auto max-h-[80vh]">
    //                         <table className="w-full text-sm text-left text-gray-700 border-collapse">
    //                             <thead className="text-xs uppercase bg-gray-200 text-gray-600">
    //                                 <tr>
    //                                     <th className="px-2 py-2 border">Date</th>
    //                                     <th className="px-2 py-2 border">Vendor</th>
    //                                     <th className="px-2 py-2 border">Qty (kg)</th>
    //                                     <th className="px-2 py-2 border">Amount Deposited</th>
    //                                     <th className="px-2 py-2 border">Actions</th>
    //                                 </tr>
    //                             </thead>
    //                             <tbody>
    //                                 {entries.map((entry: any) => (
    //                                     <tr key={entry.id} className="bg-white border-b">
    //                                         <td className="px-2 py-2 border">{new Date(entry.date).toLocaleDateString()}</td>
    //                                         <td className="px-2 py-2 border">{entry.vendor.name}</td>
    //                                         <td className="px-2 py-2 border">{entry.quantity}</td>
    //                                         <td className="px-2 py-2 border">{entry.amountDeposited}</td>
    //                                         <td className="px-2 py-2 flex gap-2">
    //                                             <button onClick={() => handleEdit(entry)} className="text-blue-600 hover:underline">
    //                                                 Edit
    //                                             </button>
    //                                             <button onClick={() => handleDelete(entry.id)} className="text-red-600 hover:underline">
    //                                                 Delete
    //                                             </button>
    //                                         </td>
    //                                     </tr>
    //                                 ))}
    //                             </tbody>
    //                         </table>
    //                     </div>

    //                 )}
    //         </div>
    //     </div>
    // );
}
