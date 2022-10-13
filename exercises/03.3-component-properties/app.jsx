import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) AGREGA LOS VINCULOS DEL PROPS EN LUGAR DE LA INFO LITERAL
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

// 2) ADD LAS PROPIEDADES Y LOS TIPOS

BootstrapCard.propTypes = {
	imageUrl: PropType.string,
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};

// 3) LLAMA AL DOM AGREGANDO EL VALOR DE LAS PROPS
ReactDOM.render(
	<BootstrapCard
		title="Bob Dylan"
		imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
		description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
		buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
		buttonLabel="Go to wikipedia"></BootstrapCard>,
	document.querySelector("#myDiv")
);
