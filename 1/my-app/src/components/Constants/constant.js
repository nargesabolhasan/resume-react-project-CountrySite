import { useParams } from "react-router-dom";
let {name}=useParams()

export const CountryURL="https://restcountries.com/v2/all"
export const infoCountryURL =`https://restcountries.eu/rest/v2/name/${name}?fullText=true`