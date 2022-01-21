import React, { useState } from "react";
import styled from 'styled-components';
import data from "./data";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import api from "../api/api";

 function SearchBox(props) {
  const [location, setLocations] = useState([]);

  const handleOnSelect = (location) => {
      props.setLoading(true);     /* II 15   */
      api.get(`/?location=${location.name}`)
         .then((forecast) => {props.setForecast(forecast.data)})
         .catch((error) => {console.error("ocorreu um erro" + error); })
         .finally(() => {props.setLoading(false);})
  };

  const handleOnSearch = async (string, results) => {
      const result = data.filter((location) => {
          return location.name.toLowerCase().includes(string.toLowerCase());
      });
      setLocations(result);

  };

  return (

      <Container>
          <ReactSearchAutocomplete
              items={location}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              autofocus
              placeholder="Procure pela Cidade..." />

      </Container>


  )
};

const Container = styled.div`
margin: 38px;
text-align: center;
& > *:first-child{
  margin: auto;
  width: 700px;
  
  @media screen and (max-width:700px ){
    width:400px 
}}

`


export default SearchBox;