import React from "react";
import { Route, Routes } from "react-router";
import Hero from "../pages/Hero";
import CashierDashboard from "../pages/cashier/CashierDashboard";
import RecordTransaction from "../pages/cashier/RecordTransaction";
import ProcurementDashboard from "../pages/procurementOfficer/ProcurementDashboard";
import Notifications from "../pages/procurementOfficer/needIdentification/Notifications";
import Vendors from "../pages/procurementOfficer/manageSuppliers/Vendors";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="cashier-dashboard" element={<CashierDashboard />}>
          <Route path="record-transaction" element={<RecordTransaction />} />
        </Route>
        <Route path="procurement-dashboard" element={<ProcurementDashboard />}>
          <Route path="notifications" element={<Notifications />}></Route>
          <Route path="vendors" element={<Vendors />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
