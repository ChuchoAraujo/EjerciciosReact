import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];


const newPlanets = planets.map((planet, index) => {
	return (
		<li key={index} className="list-group-item">
			{planet}
		</li> );
    });

const content = <ul className="list-group m-5">{newPlanets}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));

/////////////////////////////////////////////////////////////////////////
