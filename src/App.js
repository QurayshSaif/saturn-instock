import './App.scss'
import AddWarehouse from './components/AddWarehouse/AddWarehouse';

function App () {
  return (
    <>
      {/* <div className="App">
        <h1>InStock</h1>
        <h1>@include h1-type-page-header</h1>
        <h2>@include h2-type-sub-header</h2>
        <h3>@include h3-type-label-link-button</h3>
        <h4>@include h4-type-table-header</h4>
        <p className="p1">@include p1-type-body-large</p>
        <p className="p2">@include p2-type-body-medium</p>
        <p className="p3">@include p3-type-body-small</p>
        <p className="primary-button">@include primary-button-style</p>
        <p className="secondary-button">@include secondary-button-style</p>
        <p className="delete-button">@include delete-button-style</p>
        <p className="tag-in">@include tag-in-style</p>
        <p className="tag-out">@include tag-out-style</p>
        <p className="text-link">@include text-link-style</p>
        <p className="inactive-nav">@include inactive-nav-link-style</p>
        <p className="active-nav">@include active-nav-link-style</p>
      </div> */}
      <AddWarehouse/>
    </>
  );
}

export default App;
