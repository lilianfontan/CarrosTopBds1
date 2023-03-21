import './styles.css'

import ProductImg from 'assets/images/carro2.png';

const ProductCard = () => {
    return (
        <div className='base-card product-card'>
            <div className='card-top-container'>
                <img src={ProductImg} alt="Nome do Produto"/>
            </div>
            <div className='card-nome'>
                <h4>Audi Supra TT</h4>
            </div>
            <div className='card-descricao'>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</h6>
            </div>
            <div className='card-button'>
                <button>Comprar</button>
            </div>

        </div>
    );
}

export default ProductCard;
