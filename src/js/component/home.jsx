import React from "react";

const Home = (props) => {
	return (
		<div className="contador">
			<div className="segunderos">
				<div className="reloj">
					<i class="far fa-clock"></i>
				</div>
				<div className="digito">{props.hora1}</div>
				<div className="digito">{props.hora0}</div>
				<div className="digito">{props.minuto1}</div>
				<div className="digito">{props.minuto0}</div>
				<div className="digito">{props.segundo1}</div>
				<div className="digito">{props.segundo0}</div>
			</div>
		</div>
	);
};

export default Home;
