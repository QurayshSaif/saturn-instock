import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="warehouse/:id" element={<WarehouseDetailsPage />} />
        <Route path="/" element={<AddWarehouse />} />
        <Route path="/Warehouse" element={<WarehouseList />} />
        <Route path="Warehouse/add" element={<AddWarehouse />} />
        <Route path="Warehouse/:id" element={<WarehouseList />} />
        <Route path="Warehouse/:id/edit" element={<WarehouseList />} />
        <Route path="Warehouse/:id/delete" element={<WarehouseList />} />
        <Route path="/Inventory" element={<WarehouseList />} />
        <Route path="Inventory/add" element={<WarehouseList />} />
        <Route path="Inventory/:id" element={<WarehouseList />} />
        <Route path="Inventory/:id/edit" element={<WarehouseList />} />
        <Route path="Inventory/:id/delete" element={<WarehouseList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
