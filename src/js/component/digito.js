import React from "react";

const Digito = (props) =>{
    return (
        <div className="col-1 bg-dark m-2 text-white h-75 rounded-4 text-center p-1 d-flex align-items-center justify-content-center">
            <span style={{fontSize: "3.5rem"}}>{props.digito}</span>
        </div>
    );
};

export default Digito;