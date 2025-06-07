import React, { useEffect, useState } from 'react';
import { AddVendorButton } from "./helper/AddVendorButton";
import { Greet } from './helper/WelcomeMessage';
import { VendorsList } from './helper/VendorsList';
import { ShowEntriesDrawer } from './helper/ShowEntriesDrawer';

export default function Gas() {
    const [formData, setFormData] = useState({
        id: null,
        date: '',
        vendorId: '',
        quantity: '',
        rate: ''
    });
    const [loading, setLoading] = useState(true);
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetchEntries();
    }, []);

    const fetchEntries = async () => {
        try
        {

            const res = await fetch(`/api/gas?page=1&limit=30`);
            const data = await res.json();
            setEntries(data.entries);
        } catch (error)
        {
            console.error('Error fetching entries:', error);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (
            Number(formData.quantity) < 0 ||
            Number(formData.rate) < 0
        )
        {
            alert('Quantity or Rate cannot be negative.');
            return;
        }

        const method = formData.id ? 'PUT' : 'POST';
        const endpoint = '/api/gas';

        const res = await fetch(endpoint, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (res.ok)
        {
            setFormData({ id: null, date: '', vendorId: '', quantity: '', rate: '' });
            fetchEntries();
        } else
        {
            const error = await res.json();
            alert(error.error || 'An error occurred');
        }
    };

    const handleEdit = (entry: any) => {
        setFormData({
            id: entry.id,
            date: entry.date.split('T')[0],
            vendorId: entry.vendorId.toString(),
            quantity: entry.quantity.toString(),
            rate: entry.rate.toString()
        });
    };

    const handleDelete = async (id: number) => {
        const res = await fetch(`/api/gas?id=${id}`, { method: 'DELETE' });
        if (res.ok) fetchEntries();
        else alert('Failed to delete entry');
    };

    const handleCancel = () => {
        setFormData({ id: null, date: '', vendorId: '', quantity: '', rate: '' });
    };

    return (
        <div className='flex flex-col lg:flex-row min-h-screen'>
            <div className='w-full flex flex-col lg:w-3/4 p-4'>
                <Greet name="Gas" />
                <AddVendorButton />

                <form onSubmit={handleSubmit} className='flex flex-col mt-5'>
                    <div className="p-5 sm:px-5">
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">Select Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full max-w-xs p-2.5"
                            required
                        />
                    </div>

                    <div className='flex flex-col md:flex-row'>
                        <div className="w-full sm:w-1/3 p-2 sm:m-5">
                            <VendorsList
                                type="gas"
                                value={formData.vendorId}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='w-full sm:w-1/3 p-2 sm:m-5'>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Quantity</label>
                            <input
                                type="float"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required
                            />
                        </div>

                        <div className='w-full sm:w-1/3 p-2 sm:m-5'>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Rate</label>
                            <input
                                type="float"
                                name="rate"
                                value={formData.rate}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required
                            />
                        </div>
                    </div>

                    <div className="p-2 sm:m-5 flex gap-4 sm:place-self-end">
                        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 w-full sm:w-auto">
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

            <div className='w-full lg:w-1/4 bg-gray-400 p-4 overflow-y-auto min-h-screen'>
                <div className='flex justify-between'>
                    <h2 className="text-lg font-semibold mb-4">Last 30 Entries</h2>
                    <ShowEntriesDrawer type="gas" />
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
                                        <th className="px-2 py-2 border">Qty</th>
                                        <th className="px-2 py-2 border">Rate</th>
                                        <th className="px-2 py-2 border">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entries.map((entry: any) => (
                                        <tr key={entry.id} className="bg-white border-b">
                                            <td className="px-2 py-2 border">{new Date(entry.date).toLocaleDateString()}</td>
                                            <td className="px-2 py-2 border">{entry.vendor.name}</td>
                                            <td className="px-2 py-2 border">{entry.quantity}</td>
                                            <td className="px-2 py-2 border">{entry.rate}</td>
                                            <td className="px-2 py-2 border flex gap-2">
                                                <button onClick={() => handleEdit(entry)} className="text-blue-600 hover:underline">
                                                    Edit
                                                </button>
                                                <button onClick={() => handleDelete(entry.id)} className="text-red-600 hover:underline">
                                                    Delete
                                                </button>
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
}
