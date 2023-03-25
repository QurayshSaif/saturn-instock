import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditInventory from "./components/EditInventory/EditInventory";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="warehouse/:id" element={<WarehouseDetailsPage />} />
        <Route path="/warehouse" element={<WarehouseList />} />
        <Route path="/warehouse/add" element={<AddWarehouse />} />
        <Route path="/inventory/edit" element={<EditInventory />} />
        {/* <Route path="/warehouse/:id/edit" element={ <WarehouseList /> } /> */}
        {/* <Route path="/warehouse/:id/delete" element={ <WarehouseList /> } /> */}
        {/* <Route path="/inventory" element={ <WarehouseList /> } /> */}
        {/* <Route path="/inventory/add" element={ <WarehouseList /> } /> */}
        {/* <Route path="/inventory/:id" element={ <WarehouseList /> } /> */}
        {/* <Route path="/inventory/:id/edit" element={ <WarehouseList /> } /> */}
        {/* <Route path="/inventory/:id/delete" element={ <WarehouseList /> } /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
