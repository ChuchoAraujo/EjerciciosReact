import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const clickHandler = (e) => {
	console.log("I was clicked!", e);
};

const Alert = (props) => {
	return (
		<button className="btn btn-success btn-lg" onClick={clickHandler}>
			Click Me
		</button>
	);
};

ReactDOM.render(<Alert />, document.querySelector("#myDiv"));
