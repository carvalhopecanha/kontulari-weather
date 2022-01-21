 import React, { useState, useEffect } from 'react';
 import WeatherCard from './components/weathercard'
 import SearchBox from './components/SearchBox'
 import api from './api/api';
 import { Container, Loader } from './style/style';
 import Header from './components/header'


function App() {

  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(true);
 
  useEffect((  ) => {
    if (Object.keys(forecast).lenght === 0) {
      api
      .get("/?location=Salvador")
      .then((forecast) => {
        setForecast(forecast.data)
      
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      })
    }
  }, [forecast] )
 
   const Weather = loading || Object.keys(forecast).length === 0 ? (<Loader/>) : (<WeatherCard forecast = {forecast} />);
   
   return (
     
     <div >    
      <Header/>
    
   
      
      <Container>  
      <SearchBox setForecast={setForecast} setLoading = {setLoading}/> 
      {Weather}
       
      
  
      </Container>
     </div>
 
   );
 }

export default App;

