import {
  Bell,
  BookOpenText,
  LayoutPanelLeft,
  MoveLeft,
  NotebookPen,
  NotebookText,
  ReceiptText,
  SquarePen,
} from "lucide-react";
import React from "react";

function CashierDashboard() {
  return (
    <div className="flex h-screen font-semibold text-gray-800">
      <aside className="w-72 bg-gray-100 flex flex-col rounded-r-2xl shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-center">Hello, User</h1>
        </div>
        <nav className="flex-1 p-6">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
              <LayoutPanelLeft />
              Dashboard
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
              <SquarePen />
              Record Transaction
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
              <BookOpenText />
              View Transactions
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
              <ReceiptText />
              Issue Receipts
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
              <NotebookPen />
              Record Goods Returned
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
              <NotebookText />
              View Goods Returned
            </li>
          </ul>
        </nav>
        <div className="p-6 border-t border-gray-200">
          <button className="w-full flex items-center justify-between   transition p-3 rounded-lg font-semibold">
            <MoveLeft />
            Log Out
          </button>
        </div>
      </aside>
      <main className="flex-1 bg-gray-50 p-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Cashier Dashboard</h2>
          <button className="relative">
            <Bell className="text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </header>
      </main>
    </div>
  );
}

export default CashierDashboard;
