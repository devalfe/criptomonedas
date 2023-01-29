import styled from "@emotion/styled";
import axios from "axios";
import useMonedas from "../hooks/useMonedas";
import useCriptomoneda from "../hooks/useCriptomoneda";
import {useEffect, useState} from "react";
import Error from './Error';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a6fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color .3s ease;
  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`;

const Formulario = ({setMoneda, setCriptomoneda}) => {

  const [listar, setListar] = useState([]);
  const [error, setError] = useState(false);

  const OPTIONS_MONEDAS = [
    {codigo: "USD", nombre: "Dollar de Estados Unidos"},
    {codigo: "MXN", nombre: "Peso Mexicano"},
    {codigo: "EUR", nombre: "Euro"},
    {codigo: "GBP", nombre: "Libre Esterlina"},
  ];
  const [monedas, SelectMonedas] = useMonedas("Elige tu moneda", "", OPTIONS_MONEDAS);

  const [criptomonedas, SelectCripto] = useCriptomoneda("Elige tu Criptomoneda",
    "", listar);

  useEffect(() => {

    const consultarApi = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      setListar(resultado.data.Data);
    };
    consultarApi().then(r => r);
  }, []);

  const cotizarMoneda = e => {
    e.preventDefault();
    if (monedas === '' || criptomonedas === '') {
      setError(true);

    } else {
      setError(false);
      setMoneda(monedas);
      setCriptomoneda(criptomonedas);
    }
  }


  return (
    <form
      onSubmit={cotizarMoneda}
    >
      {error ? <Error mensaje="Todos los campos obligatorios" /> : null}

      <SelectMonedas

      />
      <SelectCripto

      />
      <Boton
        type="submit"
        value="Calcular"
      />
    </form>
  );
};

export default Formulario;
