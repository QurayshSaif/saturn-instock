import './App.scss'
import WarehouseList from './components/WarehouseList/WarehouseList';

function App () {
  return (
    <div className="App">
      <h1>InStock</h1>
      <div className="sass__class">
        <div className="sass_class--headers">
          <h1>@include h1-type-page-header</h1>
          <h2>@include h2-type-sub-header</h2>
          <h3>@include h3-type-label-link-button</h3>
          <h4>@include h4-type-table-header</h4>
        </div>
        <div className="sass__class--paragraphs">
          <p className="p1">@include p1-type-body-large</p>
          <p className="p2">@include p2-type-body-medium</p>
          <p className="p3">@include p3-type-body-small</p>
        </div>
        <div className="sass__class--buttons">
          <p className="primary-button">@include primary-button-style</p>
          <p className="secondary-button">@include secondary-button-style</p>
          <p className="delete-button">@include delete-button-style</p>
        </div>
        <div className="sass__class--tags">
          <p className="tag-in">@include tag-in-style</p>
          <p className="tag-out">@include tag-out-style</p>
        </div>
        <div className="sass__class--links">
          <p className="text-link">@include text-link-style</p>
          <p className="inactive-nav">@include inactive-nav-link-style</p>
          <p className="active-nav">@include active-nav-link-style</p>
        </div>
      </div>

      <WarehouseList />
    </div>
  );
}

export default App;
