import './App.scss'
import MixinReference from './components/MixinReference/MixinReference';
// import WarehouseList from './components/WarehouseList/WarehouseList';
import InventoryItemDetails from './components/InventoryItemDetails/InventoryItemDetails';

function App () {
  return (
    <div className="App">
      <h1>InStock</h1>
      <InventoryItemDetails />
      <MixinReference />

      {/* <WarehouseList /> */ }
    </div>
  );
}

export default App;
