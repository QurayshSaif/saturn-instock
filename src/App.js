import './App.scss'
import MixinReference from './components/MixinReference/MixinReference';
// import WarehouseList from './components/WarehouseList/WarehouseList';

function App () {
  return (
    <div className="App">
      <h1>InStock</h1>
      <MixinReference />

      {/* <WarehouseList /> */ }
    </div>
  );
}

export default App;
