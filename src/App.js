import './App.scss'
import WarehouseList from './components/WarehouseList/WarehouseList';

import React from "react";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App () {
  return (      
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Warehouse />} />
<Route path="/Warehouse" element={<Warehouse />} />
<Route path="Warehouse/add" element={<Warehouse />} />
<Route path="Warehouse/:id" element={<Warehouse />} />
<Route path="Warehouse/:id/edit" element={<Warehouse />} />
<Route path="Warehouse/:id/delete" element={<Warehouse />} />
<Route path="/Inventory" element={<Inventory />} />
<Route path="Inventory/add" element={<Inventory />} />
<Route path="Inventory/:id" element={<Inventory />} />
<Route path="Inventory/:id/edit" element={<Inventory />} />
<Route path="Inventory/:id/delete" element={<Inventory />} />
</Routes>
<Footer/>
</BrowserRouter>
  );
}

export default App;



