import React from "react";
import needs from "../../procurementOfficer/needIdentification/needs.json";

function Notifications() {
  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-semibold mb-4">Notifications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {needs.map((need, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-4 shadow-2xl hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg mb-2">{need.itemName}</h2>
            <p>
              <span className="font-medium">Quantity:</span> {need.quantity}{" "}
              {need.unit}
            </p>
            <p>
              <span className="font-medium">Requested by:</span>{" "}
              {need.requestedBy} ({need.department})
            </p>
            <p>
              <span className="font-medium">Date Requested:</span>{" "}
              {need.dateRequested}
            </p>
            <p>
              <span className="font-medium">Needed by:</span> {need.neededBy}
            </p>
            {need.priority && (
              <p>
                <span className="font-medium">Priority:</span> {need.priority}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
