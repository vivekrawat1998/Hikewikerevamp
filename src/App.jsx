import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Hompage from "./pages/Hompage";
import Layout from "./ui/Layout";
import ScrollToTop from "./ui/Scrollontop";

import Loader from "./ui/Loader";
import LocationDetails from "./components/LocationDetails";
import UpcommingTripsPage from "./pages/UpcommingTripPage";
import WeekendTripsPage from "./pages/WeekendTripsPage";
import CorporateTripsPage from "./pages/Corporatetrips";
import FloatingContactIcons from "./ui/FloatingIcon";

function App() {
  return (
    <>
      <ScrollToTop />
      <FloatingContactIcons />
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hompage />} />
            <Route path="/location/:id" element={<LocationDetails />} />
            <Route path="/upcomingtrips" element={<UpcommingTripsPage />} />
            <Route path="/weekendtrips" element={<WeekendTripsPage />} />
            <Route path="/corporatetrips" element={<CorporateTripsPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
