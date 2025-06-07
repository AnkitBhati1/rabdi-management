// components/helper/VendorsList.tsx
import React, { useEffect, useState } from 'react';
export function VendorsList({ type, value, onChange }: { type?: string, value: string, onChange: (e: any) => void }) {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try
        {

            let url = '/api/vendors';
            if (type)
            {
                url += `?type=${type}`;
            }
            fetch(url)
                .then(res => res.json())
                .then(data => setVendors(data));
        } catch (error)
        {
            console.error('Error fetching vendors:', error);
        } finally
        {
            setLoading(false);
        }
    }, []);
    // useEffect(() => {
    //     fetch(`/api/vendors?type=${type}`) // Make sure this API exists
    //         .then(res => res.json())
    //         .then(data => setVendors(data));
    // }, []);

    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Select Vendor</label>
            <select name="vendorId" value={value} onChange={onChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="">-- Select --</option>
                {loading ? (
                    <p>Loading vendors...</p>
                ) : vendors.length === 0 ? (
                    <p>No vendors found.</p>
                ) : vendors.map((vendor: any) => (
                    <option key={vendor.id} value={vendor.id}>
                        {vendor.name} </option>
                ))
                }            </select>
        </div>
    );
}
