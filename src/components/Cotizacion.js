import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ResultadoDiv = styled.div`
	color: #fff;
	font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
	font-size: 18px;

	Precio {
		font-weight: bold;
	}
`;

const Precio = styled.span`
	font-size: 30px;
	Precio {
		font-weight: bold;
	}
`;

const Cotizacion = ({ resultado }) => {
	if (Object.keys(resultado).length === 0) return null;

	console.log(resultado);
	return (
		<ResultadoDiv>
			<Info>
				El precio es: <Precio>{resultado.PRICE}</Precio>
			</Info>
			<Info>
				Precio más alto del día: <Precio>{resultado.HIGHDAY}</Precio>
			</Info>
			<Info>
				Precio más bajo del día: <Precio>{resultado.LOWDAY}</Precio>
			</Info>
			<Info>
				Variación ultimas 24HS: <Precio>{resultado.CHANGEPCT24HOUR}</Precio>
			</Info>
			<Info>
				Última actualización: <Precio>{resultado.LASTUPDATE}</Precio>
			</Info>
		</ResultadoDiv>
	);
};
Cotizacion.propTypes = {
	resultado: PropTypes.object.isRequired,
};
export default Cotizacion;
