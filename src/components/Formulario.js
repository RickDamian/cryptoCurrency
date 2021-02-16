import React, { useEffect, useState } from "react";
import useMoneda from "../hooks/useMoneda";
import useCriptoMoneda from "../hooks/useCriptoMoneda";
import Error from "./Error";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import axios from "axios";
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

const Formulario = ({ guardarCriptomoneda, guardarMoneda }) => {
	const [listarcripto, guardarCriptomonedas] = useState([]);
	const [error, guardarError] = useState(false);

	const MONEDAS = [
		{ codigo: "USD", nombre: "Dolar de Estados Unidos" },
		{ codigo: "MXN", nombre: "Peso Mexicano" },
		{ codigo: "EUR", nombre: "Euro" },
		{ codigo: "ARS", nombre: "Peso Argentino" },
	];

	//Utilizar moneda
	const [moneda, SelectMonedas] = useMoneda("Elije tu Moneda", "", MONEDAS);

	//Utilizar Cryptomoneda
	const [criptomoneda, SelectCripto] = useCriptoMoneda(
		"Elije tu CriptoMoneda",
		"",
		listarcripto
	);

	useEffect(() => {
		const consultarApi = async () => {
			const url =
				"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
			const resultado = await axios.get(url);

			guardarCriptomonedas(resultado.data.Data);
		};

		consultarApi();
	}, []);

	// cuando el usuario hace submit
	const cotizarMoneda = (e) => {
		e.preventDefault();
		//validar si ambos campos estan llenos

		if (moneda === "" || criptomoneda === "") {
			guardarError(true);
			return;
		}

		//pasar los datos al componente principal

		guardarError(false);
		guardarMoneda(moneda);
		guardarCriptomoneda(criptomoneda);
	};
	return (
		<form onSubmit={cotizarMoneda}>
			{error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
			<SelectMonedas />
			<SelectCripto />
			<Boton type="submit" value="calcular" />
		</form>
	);
};

Formulario.propTypes = {
	guardarCriptomoneda: PropTypes.func.isRequired,
	guardarMoneda: PropTypes.func.isRequired,
};

export default Formulario;
