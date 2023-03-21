import "./assets/styles/custom.scss";
import "./App.css";
import Home from "pages/Home";
import ProductCard from "components/ProductCard";
import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";

function App() {
  return (
    <>
      <Navbar />
      <Catalog />
    </>
  );
}

export default App;
