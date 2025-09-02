import React from "react";
import vendors from "../../procurementOfficer/manageSuppliers/vendors.json";

function Vendors() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vendors</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="border rounded-2xl shadow-md p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{vendor.name}</h2>
            <p className="text-gray-600">{vendor.contactPerson}</p>
            <p className="text-sm text-gray-500">{vendor.email}</p>
            <p className="text-sm text-gray-500">{vendor.phone}</p>
            <p className="text-sm text-gray-500">{vendor.address}</p>

            <h3 className="mt-3 font-semibold">Supplies:</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {vendor.supplies.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className="mt-2 text-sm">
              <span className="font-semibold">Rating:</span> {vendor.rating} ⭐
            </p>

            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Request Quotation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vendors;
