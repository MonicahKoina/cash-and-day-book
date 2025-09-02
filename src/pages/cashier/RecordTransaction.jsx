import React from "react";

function RecordTransaction() {
  return (
    <div className="rounded-4xl shadow-2xl p-20">
      <h1>Record Trasaction</h1>
      <form className="flex flex-col w-1/4 ">
        <div className="flex">
          <div>
            <label htmlFor="folio">Folio</label>
            <input
              type="text"
              readOnly
              name="folio"
              className="border rounded-sm border-blue-300 outline-none"
            />
          </div>
          <div>
            <label htmlFor="saleDate">Date</label>
            <input
              type="date"
              name="saleDate"
              className="border rounded-sm border-blue-300 outline-none"
            />
          </div>
        </div>

        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          placeholder="e.g. pen"
          name="itemName"
          className="border rounded-sm border-blue-300 outline-none focus:border-2 focus:border-blue-400 focus:rounded-sm"
        />
        <label htmlFor="itemQuantity">Quantity</label>
        <input type="number" placeholder="e.g. 40" name="itemQuantity" />
        <label htmlFor="unit">Unit</label>
        <select name="unit">
          <option value="pieces">Pieces</option>
          <option value="kg">Kg</option>
        </select>
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" placeholder="e.g. 1,000" />
        <label htmlFor="customerName">Customer Name</label>
        <input
          type="text"
          name="customerName"
          placeholder="e.g Monicah Koina"
        />
        <label htmlFor="customerNumber">Customer Phone Number</label>
        <input
          type="number"
          name="customerNumber"
          placeholder="E.G. 0712345678"
        />
        <label htmlFor="paymentMethod">Payment Method</label>
        <select name="paymentMethod"></select>
        <option value="mobileMoney">Mobile Money</option>
        <option value="bank">Bank</option>
        <option value="paylater">Pay Later</option>
        <button>Confirm Sale</button>
      </form>
    </div>
  );
}

export default RecordTransaction;
