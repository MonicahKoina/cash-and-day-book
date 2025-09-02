import {
  ArrowLeft,
  ClipboardCheck,
  Coins,
  Landmark,
  Megaphone,
  PanelsTopLeft,
  ShoppingCart,
  Store,
  UserCircleIcon,
  UserPlus2,
  Users2Icon,
} from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router";

function ProcurementDashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gradient-to-b from-gray-100 to-gray-50 shadow-2xl flex flex-col">
        <div className="flex gap-4 border-b border-gray-400 justify-between px-4 py-2">
          <Landmark />
          <PanelsTopLeft />
        </div>

        <nav className="flex-1">
          <ul className="flex flex-col gap-2">
            <Link to="notifications">
              <li className="flex items-center gap-6 p-3 rounded-lg hover:bg-gray-50 hover:shadow-2xl">
                <Megaphone />
                Needs
              </li>
            </Link>
            <Link to="view-vendors">
              <li className="flex items-center gap-6 p-3 rounded-lg hover:bg-gray-50 hover:shadow-2xl">
                <Users2Icon />
                View Vendors
              </li>
            </Link>
            <Link to="add-vendor">
              <li className="flex items-center gap-6 p-3 rounded-lg hover:bg-gray-50 hover:shadow-2xl">
                <UserPlus2 />
                Add Vendor
              </li>
            </Link>
            <Link to="purchase-order">
              <li className="flex items-center gap-6 p-3 rounded-lg hover:bg-gray-50 hover:shadow-2xl">
                <ShoppingCart />
                Purchase Order
              </li>
            </Link>
            <Link to="approve-order">
              <li className="flex items-center gap-6 p-3 rounded-lg hover:bg-gray-50 hover:shadow-2xl">
                <ClipboardCheck />
                Approve Orders
              </li>
            </Link>
            <Link to="process-payment">
              <li className="flex items-center gap-6 p-3 rounded-lg hover:bg-gray-50 hover:shadow-2xl">
                <Coins />
                Process Payment
              </li>
            </Link>
            <Link to="view-purchases">
              <li className="flex items-center gap-6 p-3 rounded-lg hover:bg-gray-50 hover:shadow-2xl">
                <Store />
                View Purchases
              </li>
            </Link>
          </ul>
        </nav>

        <div className="flex items-center justify-between p-4 border-t border-gray-300">
          <UserCircleIcon />
          <p className="flex-1 text-center">Procurement Officer</p>
          <ArrowLeft />
          <span>LogOut</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default ProcurementDashboard;
