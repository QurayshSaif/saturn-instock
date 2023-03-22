import './App.scss'
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import WarehouseList from './components/WarehouseList/WarehouseList';
import MixinReference from './components/MixinReference/MixinReference';
// import WarehouseList from './components/WarehouseList/WarehouseList';


function App () {
  return (
    <div className="App">
      <h1>InStock</h1>
      {/* <MixinReference /> */}
      {/* <WarehouseList /> */}
      <AddWarehouse/>
    </div>
  );
}

export default App;
