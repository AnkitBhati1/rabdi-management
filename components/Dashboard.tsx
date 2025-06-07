import React, { useEffect, useState } from 'react';
import VendorCard from './helper/VendorCard';
import { Greet } from './helper/WelcomeMessage';
import { AddVendorButton } from "./helper/AddVendorButton";

type Vendor = {
    id: number;
    name: string;
    vendorType: string;
};

export default function Dashboard() {
    const [vendors, setVendors] = useState<Vendor[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingVendor, setEditingVendor] = useState<Vendor | null>(null);
    const [form, setForm] = useState({ name: '', vendorType: '' });

    // Fetch vendors
    const fetchVendors = async () => {
        try
        {
            const res = await fetch('/api/vendors');
            const data = await res.json();
            setVendors(data);
        } catch (error)
        {
            console.error('Error fetching vendors:', error);
        } finally
        {
            setLoading(false);
        }
    };

    // Delete vendor
    const deleteVendor = async (id: number) => {
        if (!confirm('Are you sure you want to delete this vendor?')) return;

        try
        {
            await fetch('/api/vendors', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });
            setVendors((prev) => prev.filter((v) => v.id !== id));
        } catch (error)
        {
            console.error('Error deleting vendor:', error);
        }
    };

    // Start editing
    const startEdit = (vendor: Vendor) => {
        setEditingVendor(vendor);
        setForm({ name: vendor.name, vendorType: vendor.vendorType });
    };

    // Submit edit
    const submitEdit = async () => {
        if (!editingVendor) return;

        try
        {
            const res = await fetch('/api/vendors', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: editingVendor.id, ...form }),
            });

            const updated = await res.json();
            setVendors((prev) =>
                prev.map((v) => (v.id === updated.id ? updated : v))
            );
            setEditingVendor(null);
            setForm({ name: '', vendorType: '' });
        } catch (error)
        {
            console.error('Error updating vendor:', error);
        }
    };

    useEffect(() => {
        fetchVendors();
    }, []);

    return (
        <div className="flex flex-col min-h-screen lg:max-w-8xl lg:mx-auto">
            <div className="flex flex-col bg-blue-50 shadow-md rounded-xl space-y-4 dark:text-black items-center justify-center">
                <Greet name="Dashboard" />
                <AddVendorButton />
                {/* Edit Form */}
                {editingVendor && (
                    <div className="border border-blue-400 p-4 rounded-md w-full max-w-md mb-4 bg-blue-50">
                        <h2 className="text-lg font-semibold mb-2">Edit Vendor</h2>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Vendor Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <div className="m-5">
                            <label htmlFor="vendors" className="mb-2 text-sm font-medium text-gray-900">
                                Select a vendor
                            </label>
                            <select
                                id="vendors"
                                onChange={(e) => setForm({ ...form, vendorType: e.target.value })}
                                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            >
                                <option value="">Choose</option>
                                <option value="milk">Milk</option>
                                <option value="rabdi">Rabdi</option>
                                <option value="gas">Gas</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
                                onClick={submitEdit}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
                                onClick={() => setEditingVendor(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
                <div className="w-full lg:flex lg:flex-col mb-10 lg:max-w-6xl sm:max-w-2xl border border-black rounded items-center justify-center  p-4">
                    <div className="w-auto max-h-[500px] overflow-y-auto">
                        {loading ? (
                            <p>Loading vendors...</p>
                        ) : vendors.length === 0 ? (
                            <p>No vendors found.</p>
                        ) : (
                            vendors.map((vendor) => (
                                <VendorCard
                                    key={vendor.id}
                                    vendor={vendor}
                                    onEdit={startEdit}
                                    onDelete={deleteVendor}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
