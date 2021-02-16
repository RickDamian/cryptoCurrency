import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import PropTypes from "prop-types";

const FadeIn = keyframes`

from {opacity:0;
}
to{opacity:1;}
`;

const MensajeError = styled.p`
	background-color: #b7322c;
	padding: 1rem;
	color: #fff;
	font-size: 30px;
	text-transform: uppercase;
	font-weight: bold;
	text-align: center;
	font-family: "Bebas Neue", cursive;
	animation: ${FadeIn} 0.5s ease-in;
`;

const Error = ({ mensaje }) => {
	return <MensajeError>{mensaje}</MensajeError>;
};
Error.propTypes = {
	mensaje: PropTypes.string.isRequired,
};
export default Error;
