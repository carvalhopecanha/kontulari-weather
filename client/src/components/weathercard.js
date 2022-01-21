import React, { useState} from "react";
import iSol from "../icons/isol.png"; 
import iChuva from "../icons/ichuva.png";
import iNuvens from "../icons/iNuvens.png";
 

import styled from "styled-components";

const WeatherCard = (props) => {
const [forecast] = useState(props.forecast);
    return (
        <Container>
    
<h3> {forecast.title}</h3>
<img className="sRot"src={iSol} alt="icone" width="100" />

<h4> <span class="tempF"> {forecast.consolidated_weather[0].the_temp.toFixed(0)} Cº</span> </h4>

<ul className="liM" > 
<li>Min -   {forecast.consolidated_weather[0].min_temp.toFixed(0)} Cº</li>
<li>Max -    {forecast.consolidated_weather[0].max_temp.toFixed(0)} Cº</li>
</ul>

<ul className="ulInfo">

    <li>Umidade {forecast.consolidated_weather[1].humidity.toFixed(0)} %</li>
    <li>Vento {forecast.consolidated_weather[1].wind_speed.toFixed(0)} mph</li>
    <li>Pressão atmosférica {forecast.consolidated_weather[1].air_pressure.toFixed(2)} mbar</li>


</ul>

<ul className="ulDias">
    <p>Seg
        <li>{forecast.consolidated_weather[1].the_temp.toFixed(0)}Cº</li>
        <img src={iSol} alt="icone" width="50" /></p>

    <p>Ter
        <li>{forecast.consolidated_weather[2].the_temp.toFixed(0)}Cº</li>
        <img src={iChuva} alt="icone" width="50" /></p>
    <p>Quar
        <li>{forecast.consolidated_weather[3].the_temp.toFixed(0)}Cº</li>
        <img src={iNuvens} alt="icone" width="50" /></p>
    <p>Qui
        <li>{forecast.consolidated_weather[4].the_temp.toFixed(0)}Cº</li>
        <img src={iSol} alt="icone" width="50" /></p>
    <p>Sex
        <li>{forecast.consolidated_weather[5].the_temp.toFixed(0)}Cº</li>
        <img src={iChuva} alt="icone" width="50" /></p>
</ul>


</Container>
);
};


export default WeatherCard;


const Container = styled.div`
background: white;
overflow: hidden;
padding:  32px;
margin: 48px auto 0;
width: 390px;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 18px;

&:hover { 
     box-shadow: 1px 8px 20px grey;
    -webkit-transition:  box-shadow .2s ease-in;
  }

.sRot {
    animation: rotation 18s infinite linear;
  }
  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

 

h3{
font-size: 1.8em;
font-family: "Helvetica", arian;
font-weight: 700;
color: #2a6fc6;
margin-top: 10px;
margin-bottom: 20px;
}
h4{
font-size: 1.7em;
font-family: "Helvetica", arian;
font-weight: 600;
color: #322e2e;
margin-top: 10px;
margin-bottom: 20px;
}

 .liM{
    
display: flex;
flex-wrap: wrap;
justify-content: space-between;  
 
font-size: 1.5em;
font-family: "Helvetica", arian;
font-weight: 6000;

 }

.liM li{
    color: #2a6fc6;
}




.ulInfo{
list-style-type: none;
padding: 10px;
padding-bottom: 20px; 
}    

 

.ulInfo li{
    color: #51555b;
}

.tempF{
font-size: 1.2em;
font-family: "Helvetica", arian;
font-weight: 6500;
color: #544c4c;

}

.ulDias{
list-style-type: none;
display: flex;
flex-wrap: wrap;
justify-content: space-between;  
background: #f5f5f587;
padding:10px;
          
}

.ulDias li{
    color: #363638;
    font-size: 1.55em;

} 


`