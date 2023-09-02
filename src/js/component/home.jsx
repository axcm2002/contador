import React from "react";
import Digito from "./digito"
import {FaClock} from "react-icons/fa"


//create your first component
const Home = (props) => {
	return (
		<div style={{height: "25vh", backgroundColor: "black"}}>
			<div className="p-2 h-100 container d-flex justify-content-center">
				<Digito digito={<FaClock/>}/>
				<Digito digito={props.seis}/>
				<Digito digito={props.cinco}/>
				<Digito digito={props.cuatro}/>
				<Digito digito={props.tres}/>
				<Digito digito={props.dos}/>
				<Digito digito={props.uno}/>
			</div>
		</div>
	);
};

export default Home;
