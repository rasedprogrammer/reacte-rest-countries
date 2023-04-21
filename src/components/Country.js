import React from "react";
import { useLoaderData } from "react-router-dom";

const Country = () => {
	const country = useLoaderData()[0];
	console.log(country.name);
	return (
		<div>
			<h1>Country Details</h1>
			<h3>Name: {country?.name?.common}</h3>
			<img src={country.flags.png} alt="" />
			<h3>Population: {country.population}</h3>
		</div>
	);
};

export default Country;
