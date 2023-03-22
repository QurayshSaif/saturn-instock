import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";

function App() {
  return (
    <div className="App">
      <h1>InStock</h1>
      <AddWarehouse/>
    </div>
  );
}

export default App;
