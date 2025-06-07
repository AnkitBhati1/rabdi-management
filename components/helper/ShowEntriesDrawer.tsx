// components/helper/ShowEntriesDrawer.tsx
import { useEffect, useState } from 'react';

type Vendor = { id: number; name: string };

type Entry = {
  id: number;
  date: string;
  quantity: number;
  amountDeposited: number;
  vendor: { name: string };
  milkType?: string; // optional for milk
  rate?: number;     // optional for gas
};

type Props = {
  type: 'milk' | 'rabdi' | 'gas';
};

export const ShowEntriesDrawer: React.FC<Props> = ({ type }) => {
  const [show, setShow] = useState(false);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [selectedVendorId, setSelectedVendorId] = useState('');
  const [entries, setEntries] = useState<Entry[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState('');
  const itemsPerPage = 10;

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).id === 'wrapper') setShow(false);
    setShow(false);
    setSelectedVendorId('');
    setEntries([]);
  }

  useEffect(() => {
    if (show) fetchVendors();
  }, [show]);

  const fetchVendors = async () => {
    const res = await fetch(`/api/vendors?type=${type}`);
    const data = await res.json();
    setVendors(data);
  };

  // const fetchEntries = async () => {
  //   const res = await fetch(`/api/${type}?vendorId=${selectedVendorId}`);
  //   const data = await res.json();
  //   setEntries(data);
  // };
  // In ShowEntriesDrawer.tsx
  const fetchEntries = async (page : number = 1) => {
    try
    {
      const res = await fetch(`/api/${type}?vendorId=${selectedVendorId}&page=${page}&limit=30`);
      const data = await res.json();
      setEntries(data.entries);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
      setHasMore(data.hasMore);
    } catch (error)
    {
      console.error('Error fetching entries:', error);
    }
  };

  const Pagination = () => (
    <div className="flex justify-between items-center my-4">
      <button
        onClick={() => fetchEntries(currentPage - 1)}
        disabled={currentPage === 1 || loading}
        className="px-4 py-2 text-sm bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => fetchEntries(currentPage + 1)}
        disabled={currentPage === totalPages || loading}
        className="px-4 py-2 text-sm bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );

  const [editingEntryId, setEditingEntryId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState<any>({});

  const startEdit = (entry: Entry) => {
    setEditingEntryId(entry.id);
    setEditValues({
      date: entry.date.split('T')[0],
      quantity: entry.quantity,
      milkType: entry.milkType || '',
      rate: entry.rate || '',
      amountDeposited: entry.amountDeposited,
    });
  };

  const cancelEdit = () => {
    setEditingEntryId(null);
    setEditValues({});
  };

  const handleEditChange = (field: string, value: any) => {
    setEditValues((prev: any) => ({ ...prev, [field]: value }));
  };

  const saveEdit = async (id: number) => {
    await fetch(`/api/${type}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...editValues }),
    });

    await fetchEntries();
    cancelEdit();
  };

  const deleteEntry = async (id: number) => {
    const confirmDelete = confirm('Are you sure you want to delete this entry?');
    if (!confirmDelete) return;

    const res = await fetch(`/api/${type}?id=${id}`, { method: 'DELETE' });
    if (res.ok)
    {
      fetchEntries();
    } else
    {
      const err = await res.json();
      alert(err.error || 'Failed to delete.');
    }

    await fetchEntries();
  };


  return (
    <div className="mb-4">
      <button
        onClick={() => setShow(!show)}
        className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3 place-self-end  dark:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none"
      >
        {show ? 'Hide Entries' : 'Show Entries'}
      </button>

      {show && (
        <div id="wrapper"
          // onClick={handleClose}
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="flex flex-col md:w-[600px] w-[70%] overflow-y-auto max-h-[80vh]">
            <div
              onClick={handleClose}
              className="text-black text-xl font-bold place-self-end"
            >
              X
            </div>

            <div className="text-black bg-white rounded-2xl p-6">


              <label className="block mb-2">Select Vendor</label>
              <select
                value={selectedVendorId}
                onChange={(e) => setSelectedVendorId(e.target.value)}
                className="border rounded p-2 mb-3 w-full"
              >
                <option value="">-- Choose Vendor --</option>
                {vendors.map((vendor) => (
                  <option key={vendor.id} value={vendor.id}>
                    {vendor.name}
                  </option>
                ))}
              </select>

              <button
                onClick={() => fetchEntries()}
                className="bg-blue-600 text-white px-3 py-1 rounded mb-3"
                disabled={!selectedVendorId}
              >
                Load Entries
              </button>

              {entries.length > 0 && (<>
                <table className="w-full text-sm border mt-2">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-2 py-1">Date</th>
                      <th className="border px-2 py-1">Vendor</th>
                      {type === 'milk' && <th className="border px-2 py-1">Milk Type</th>}
                      {type === 'gas' && <th className="border px-2 py-1">Rate</th>}
                      <th className="border px-2 py-1">Quantity</th>
                      {(type === 'milk' || type === 'rabdi') && (
                        <th className="border px-2 py-1">Amount Deposited</th>)}
                      <th className="px-2 py-2 border">Actions</th>

                    </tr>
                  </thead>
                  <tbody>
                    {entries.map((entry) =>
                      editingEntryId === entry.id ? (
                        <tr key={entry.id} className="bg-yellow-50">
                          <td className="border p-1">
                            <input
                              type="date"
                              value={editValues.date}
                              onChange={(e) => handleEditChange('date', e.target.value)}
                              className="w-full border rounded"
                            />
                          </td>
                          <td className="border p-1">{entry.vendor.name}</td>
                          {type === 'milk' && (
                            <td className="border p-1">
                              <select
                                value={editValues.milkType}
                                onChange={(e) => handleEditChange('milkType', e.target.value)}
                                className="w-full border rounded"
                              >
                                <option value="withoutFat">Without fat</option>
                                <option value="fat">Fat</option>
                              </select>
                            </td>
                          )}
                          {type === 'gas' && (
                            <td className="border p-1">
                              <input
                                type="number"
                                value={editValues.rate}
                                onChange={(e) => handleEditChange('rate', e.target.value)}
                                className="w-full border rounded"
                              />
                            </td>
                          )}
                          <td className="border p-1">
                            <input
                              type="float"
                              value={editValues.quantity}
                              onChange={(e) => handleEditChange('quantity', e.target.value)}
                              className="w-full border rounded"
                            />
                          </td>
                          {(type === 'milk' || type === 'rabdi') && (
                            <td className="p-1 border">
                              <input
                                type="number"
                                value={editValues.amountDeposited}
                                onChange={(e) => handleEditChange('amountDeposited', e.target.value)}
                                className="w-full border rounded"
                              />
                            </td>
                          )}
                          <td className="border p-1 flex gap-2">
                            <button
                              onClick={() => saveEdit(entry.id)}
                              className="text-green-600 hover:underline"
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="text-gray-500 hover:underline"
                            >
                              Cancel
                            </button>
                          </td>
                        </tr>
                      ) : (
                        <tr key={entry.id}>
                          <td className="border px-2 py-1">{new Date(entry.date).toLocaleDateString()}</td>
                          <td className="border px-2 py-1">{entry.vendor.name}</td>
                          {type === 'milk' && <td className="border px-2 py-1">{entry.milkType}</td>}
                          {type === 'gas' && <td className="border px-2 py-1">{entry.rate}</td>}
                          <td className="border px-2 py-1">{entry.quantity}</td>
                          {(type === 'milk' || type === 'rabdi') && (
                            <td className="p-1 border">{entry.amountDeposited}</td>
                          )}
                          <td className="border px-2 py-1 flex gap-2">
                            <button
                              onClick={() => startEdit(entry)}
                              className="text-blue-600 hover:underline"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="text-red-600 hover:underline"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>

                </table>
                <Pagination/>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
