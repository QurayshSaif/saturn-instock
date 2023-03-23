import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import WarehouseList from './components/WarehouseList/WarehouseList';
import MixinReference from './components/MixinReference/MixinReference';
// import WarehouseList from './components/WarehouseList/WarehouseList';


function App () {
  return (
    // <div className="App">
    //   <h1>InStock</h1>
      // <MixinReference />
    //   {/* <WarehouseList /> */}
    //   <AddWarehouse/>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehouseList/>}></Route>
        <Route path="/add" element={<AddWarehouse/>}></Route>
      </Routes>
    </BrowserRouter>



);
}

export default App;
