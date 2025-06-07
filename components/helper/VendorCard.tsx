// // components/VendorCard.tsx
// import React from 'react';

// type Vendor = {
//   id: number;
//   name: string;
//   vendorType: string;
// };

// type VendorCardProps = {
//   vendor: Vendor;
//   onEdit: (vendor: Vendor) => void;
//   onDelete: (id: number) => void;
// };

// export default function VendorCard({ vendor, onEdit, onDelete }: VendorCardProps) {
//   return (
//     <div className="w-full rounded my-2 p-4 flex justify-between items-center hover:bg-gray-300">
//       <div>
//         <h2 className="text-xl font-semibold">{vendor.name}</h2>
//         <p className="text-sm text-gray-600">Type: {vendor.vendorType}</p>
//       </div>
//       <div className="flex gap-4">
//         <button
//           className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105"
//           onClick={() => onEdit(vendor)}
//         >
//           Edit
//         </button>
//         <button
//           className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-all duration-300 hover:scale-105"
//           onClick={() => onDelete(vendor.id)}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// components/VendorCard.tsx;

import React, { useState } from 'react';

type Vendor = {
  id: number;
  name: string;
  vendorType: string;
};

type VendorFull = Vendor & {
  rabdis: { id: number; date: string; quantity: number }[];
  milks: { id: number; date: string; milkType: string; quantity: number }[];
  gases: { id: number; date: string; quantity: number; rate: number }[];
};

type VendorCardProps = {
  vendor: Vendor;
  onEdit: (vendor: Vendor) => void;
  onDelete: (id: number) => void;
};

export default function VendorCard({ vendor, onEdit, onDelete }: VendorCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState<VendorFull | null>(null);

  const fetchDetails = async () => {
    try {
      const res = await fetch(`/api/vendor/${vendor.id}`);
      const data = await res.json();
      setDetails(data);
      setShowModal(true);
    } catch (error) {
      console.error('Failed to fetch vendor details:', error);
    }
  };

  return (
    <>
      <div className="border border-black rounded my-2 p-4 flex justify-between items-center">
        <div className="cursor-pointer text-blue-600 font-semibold hover:underline" onClick={fetchDetails}>
          {vendor.name}
        </div>
        <div className="flex gap-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105"
            onClick={() => onEdit(vendor)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-all duration-300 hover:scale-105"
            onClick={() => onDelete(vendor.id)}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && details && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex justify-center overflow-y-auto items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-4">Vendor Details - {details.name}</h2>

            {/* Rabdi Table */}
            {details.rabdis.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Rabdi</h3>
                <table className="w-full border border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2">Date</th>
                      <th className="border px-4 py-2">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.rabdis.map((r) => (
                      <tr key={r.id}>
                        <td className="border px-4 py-2">{new Date(r.date).toLocaleDateString()}</td>
                        <td className="border px-4 py-2">{r.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Milk Table */}
            {details.milks.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Milk</h3>
                <table className="w-full border border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2">Date</th>
                      <th className="border px-4 py-2">Milk Type</th>
                      <th className="border px-4 py-2">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.milks.map((m) => (
                      <tr key={m.id}>
                        <td className="border px-4 py-2">{new Date(m.date).toLocaleDateString()}</td>
                        <td className="border px-4 py-2">{m.milkType}</td>
                        <td className="border px-4 py-2">{m.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Gas Table */}
            {details.gases.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Gas</h3>
                <table className="w-full border border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2">Date</th>
                      <th className="border px-4 py-2">Rate</th>
                      <th className="border px-4 py-2">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.gases.map((g) => (
                      <tr key={g.id}>
                        <td className="border px-4 py-2">{new Date(g.date).toLocaleDateString()}</td>
                        <td className="border px-4 py-2">{g.rate}</td>
                        <td className="border px-4 py-2">{g.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="text-right">
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
