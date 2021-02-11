import React from "react";
import useMoneda from "../hooks/useMoneda";
import styled from "@emotion/styled";

const Boton = styled.input`
	margin-top: 20px;
	font-weight: bold;
	font-size: 20px;
	padding: 10px;
	background-color: #66a2fe;
	border: none;
	width: 100%;
	border-radius: 10px;
	color: #fff;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #326ac0;
		cursor: pointer;
	}
`;

const Formulario = () => {
	const MONEDAS = [
		{ codigo: "USD", nombre: "Dolar de Estados Unidos" },
		{ codigo: "MXN", nombre: "Peso Mexicano" },
		{ codigo: "EUR", nombre: "Euro" },
		{ codigo: "ARS", nombre: "Peso Argentino" },
	];

	//Utilizar moneda
	const [moneda, SelectMonedas] = useMoneda("Elije tu Moneda", "", MONEDAS);

	return (
		<form>
			<SelectMonedas />
			<Boton type="submit" value="calcular" />
		</form>
	);
};

export default Formulario;