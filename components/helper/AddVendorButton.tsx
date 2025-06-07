import React, { useState } from 'react';

export const AddVendorButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('')
  const [vendorType, setVendorType] = useState('')

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).id === 'wrapper') setIsVisible(false);
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !vendorType) return alert("Please fill out all fields")

    try
    {
      const res = await fetch('/api/vendors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, vendorType }),
      })

      if (!res.ok) throw new Error('Failed to add vendor')

      alert('Vendor added successfully!')
      setIsVisible(false)
      setName('')
      setVendorType('')
    } catch (error)
    {
      console.error(error)
      alert('Error creating vendor.')
    }
  }
  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsVisible(true)}
        className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 md:me-2 place-self-end w-full sm:w-1/2 md:w-[10%] mb-2 my-6 md:my-20 dark:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none"
      >
        Add Vendor
      </button>

      {/* Modal */}
      {isVisible && (
        <div
          id="wrapper"
          onClick={handleClose}
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="md:w-[600px] w-[70%] mx-auto flex flex-col">
            <button
              onClick={() => setIsVisible(false)}
              className="text-black text-xl font-bold place-self-end"
            >
              X
            </button>
            <div className="text-black bg-white rounded-2xl p-6">
              <h3 className="text-3xl p-5">Add Vendor</h3>
              {/* <form
                action={async (formData: FormData) => {
                  await submitVendorForm(formData);
                  setIsVisible(false);
                }}
              > */}
              <form onSubmit={handleSubmit}>
                <div className="m-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Enter Vendor Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    pattern="^[A-Za-z\s]+$"
                    title="Only letters and spaces are allowed"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter alphabets only"
                    required
                  />
                </div>

                <div className="m-5">
                  <label htmlFor="vendors" className="mb-2 text-sm font-medium text-gray-900">
                    Select a vendor
                  </label>
                  <select
                    id="vendors"
                    value={vendorType}
                    onChange={(e) => setVendorType(e.target.value)}
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  >
                    <option value="">Choose</option>
                    <option value="milk">Milk</option>
                    <option value="rabdi">Rabdi</option>
                    <option value="gas">Gas</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
