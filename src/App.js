import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import InventoryItemDetails from './components/InventoryItemDetails/InventoryItemDetails'
import MixinReference from './components/MixinReference/MixinReference'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <MixinReference />
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="warehouse/:id" element={<WarehouseDetailsPage />} />
        <Route path="/warehouse" element={<WarehouseList />} />
        <Route path="/warehouse/add" element={<AddWarehouse />} />
        {/* <Route path="/warehouse/:id/edit" element={ <WarehouseList /> } /> */}
        <Route path="/warehouse/:id/delete" element={<WarehouseList />} />
        {/* <Route path="/inventory" element={ <InventoryItemDetails /> } /> */}
        {/* <Route path="/inventory/add" element={ <WarehouseList /> } /> */}
        <Route path="/inventory/:id" element={<InventoryItemDetails />} />
        {/* <Route path="/inventory/:id/edit" element={ <WarehouseList /> } /> */}
        <Route path="/inventory/:id/delete" element={<WarehouseList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
