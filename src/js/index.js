//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let counter = 0;
var arr = [0, 0, 0, 0, 0, 0];
setInterval(function(){
    counter++;

    var contador = counter.toString();
    
    for(let i = 0; i < contador.length; i++){
        if(contador.length == 1){
            arr[5] = contador;
        }
        else if(contador.length == 2){
            arr[5] = contador[1];
            arr[4] = contador[0];
        }
        else if(contador.length == 3){
            arr[5] = contador[2];
            arr[4] = contador[1];
            arr[3] = contador[0];
        }
        else if(contador.length == 4){
            arr[5] = contador[3];
            arr[4] = contador[2];
            arr[3] = contador[1];
            arr[2] = contador[0];
        }
        else if(contador.length == 5){
            arr[5] = contador[4];
            arr[4] = contador[3];
            arr[3] = contador[2];
            arr[2] = contador[1];
            arr[1] = contador[0];
        }
        else if(contador.length == 6){
            arr[5] = contador[5];
            arr[4] = contador[4];
            arr[3] = contador[3];
            arr[2] = contador[2];
            arr[1] = contador[1];
            arr[0] = contador[0];
        }
    }


ReactDOM.render(<Home uno={arr[5]} dos={arr[4]} tres={arr[3]} cuatro={arr[2]} cinco={arr[1]} seis={arr[0]}/>, document.querySelector("#app"));
},1000);







//render your react application
