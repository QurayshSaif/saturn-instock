import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import InventoryList from "./components/InventoryList/InventoryList";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import AddInventory from "./components/AddInventory/AddInventory";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <WarehouseList /> } />
        <Route path="warehouse/:id" element={ <WarehouseDetailsPage /> } />
        <Route path="/warehouse" element={ <WarehouseList /> } />
        <Route path="/warehouse/add" element={ <AddWarehouse /> } />
       <Route path="/warehouse/:id/edit" element={ <WarehouseList /> } /> 
       <Route path="/warehouse/:id/delete" element={ <WarehouseList /> } /> 
       <Route path="/inventory" element={ <InventoryList /> } /> 
       <Route path="/inventory/add" element={ <AddInventory /> } /> 
       <Route path="/inventory/:id" element={ <InventoryList /> } /> 
       <Route path="/inventory/:id/edit" element={ <InventoryList /> } />
        <Route path="/inventory/:id/delete" element={ <InventoryList /> } /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
