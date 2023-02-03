import styled from "@emotion/styled";

/**
 * Styled Component MsgError
 * @type {StyledComponent<{theme?: Theme, as?: React.ElementType}, JSX.IntrinsicElements["p"], {}>}
 */
const MsgError = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
`;
/**
 * Component Error
 * @param mensaje - Mensaje de error
 * @returns {JSX.Element}
 * @constructor
 */
const Error = ({mensaje}) => {
  return(
    <MsgError>
      {mensaje}
    </MsgError>
  );
}


export default Error
