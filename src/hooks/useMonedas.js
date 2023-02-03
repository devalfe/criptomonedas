import {Fragment, useState} from 'react'
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: Bebas Neue, cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;


const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

/**
 * Hook useMonedas
 * @param label
 * @param initialState
 * @param options
 * @returns {[unknown,(function(): *),((value: unknown) => void)]}
 */
const useMonedas = (label, initialState, options) => {

  const [state, setState] = useState(initialState);
  const Seleccionar = () => (
    <Fragment> 
      <Label>{label}</Label>
      
      <Select name="" id=""
        onChange={e =>  setState(e.target.value)}
        value={state}
      >
        <option value="">--Seleccione una moneda--</option>
        {
          options.map(option => (
            <option  key={option.codigo} value={option.codigo}>{option.nombre}</option>
          ))
        }
      </Select>
    </Fragment>
  );
  return [state, Seleccionar, setState];
}

export default useMonedas
