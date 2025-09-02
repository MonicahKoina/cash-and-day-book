import {
  Bell,
  BookOpenText,
  LayoutPanelLeft,
  MoveLeft,
  NotebookPen,
  NotebookText,
  PanelsTopLeft,
  ReceiptText,
  SquarePen,
} from "lucide-react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router";

function CashierDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen font-semibold text-gray-800 bg-gradient-to-b from-gray-100 to-gray-50 ">
      <aside
        className={`${
          collapsed ? "w-20" : "w-72"
        }  flex flex-col rounded-r-2xl shadow-lg transition-all duration-300`}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          {!collapsed && (
            <h1 className="text-lg font-semibold">
              <Landmark />
            </h1>
          )}
          <button onClick={() => setCollapsed(!collapsed)}>
            <PanelsTopLeft />
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="flex flex-col gap-2">
            <Link to="">
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
                <LayoutPanelLeft />
                {!collapsed && "Dashboard"}
              </li>
            </Link>
            <Link to="record-transaction">
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
                <SquarePen />
                {!collapsed && "Record Transaction"}
              </li>
            </Link>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
              <BookOpenText />
              {!collapsed && "View Transactions"}
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
              <ReceiptText />
              {!collapsed && "Issue Receipts"}
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
              <NotebookPen />
              {!collapsed && "Record Goods Returned"}
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-400 hover:text-white cursor-pointer transition">
              <NotebookText />
              {!collapsed && "View Goods Returned"}
            </li>
          </ul>
        </nav>
        <div className="p-6 border-t border-gray-200">
          <button className="w-full flex items-center justify-center gap-2 transition p-3 rounded-lg font-semibold">
            <MoveLeft />
            {!collapsed && "Log Out"}
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
        <Outlet />
      </main>
    </div>
  );
}

export default CashierDashboard;
