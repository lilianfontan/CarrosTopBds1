import CarImage from 'assets/images/carro.png';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from "components/Navbar";
import './styles.css'

const Home = () => {
    return(
        <>
            <Navbar />
            <div className="home-container">
                <div className="home-card">
                    <div className="home-content-container">
                        <h1>O carro perfeito para você</h1>
                        <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                    </div>
                    <div className="home-image-container">
                        <img src={CarImage} alt="Carro"/>
                    </div>
                </div>
                <div className='home-container-button'>
                   <ButtonIcon />
                    <div className='home-container-button-txt'>
                        <h4>Comece agora a navegar</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;