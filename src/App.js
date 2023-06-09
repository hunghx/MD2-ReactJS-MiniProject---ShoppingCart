import "./App.css";
import ListCart from "./components/ListCart";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <div className="page-header">
        <h1>
          MiniProject - Shopping Cart <small>ReactJS</small>
        </h1>
      </div>
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <ListProduct />
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <ListCart />
        {/* CART : END */}
      </div>
    </div>
  );
}

export default App;
