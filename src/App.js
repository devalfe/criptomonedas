import styled from '@emotion/styled';
import Spinner from "./components/Spinner";
import imagen from './cryptomonedas.png';
import Formulario from "./components/Formulario";
import {useState, useEffect} from "react";
import axios from 'axios'
import Cotizacion from "./components/Cotizacion";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {

    const cotizarCriptomoneda = async  () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);
      // mostrar el spinner
      setCargando(true);

      setTimeout(() => {
        setCargando(false);

        setResultado(resultado.data?.DISPLAY[criptomoneda][moneda]);
      }, 3000)

    }

    cotizarCriptomoneda().then();

  }, [moneda, criptomoneda]);

  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />

  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="imagen criptomonedas"
        />
      </div>
      <div>
          <Heading>
            Cotiza Criptomonedas al instante
          </Heading>
          <Formulario
            setMoneda={setMoneda}
            setCriptomoneda={setCriptomoneda}
          />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
