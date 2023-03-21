import ProductCard from "components/ProductCard";
import "./styles.css";

const Catalog = () => {
  return (
    <>
      <div className="container-card">
        <div className="container-busca">
          <div className="campo-busca">
            <input type="text" placeholder="Digite aqui sua busca" />
          </div>
          <div className="botao">
            <button>Buscar</button>
          </div>
        </div>

        <div className="container my-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
