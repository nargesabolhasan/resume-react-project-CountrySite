import React from 'react';
import {useParams} from "react-router-dom";

const InfoCountryPage = () => {
  const { name } = useParams()
  return (
    <div>
       <h1> {name}</h1>
      InfoCountryPage</div>
  )
}

export default InfoCountryPage