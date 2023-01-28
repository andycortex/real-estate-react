import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (category) => {
    const options = {
        method: "GET",
        url: "https://bayut.p.rapidapi.com/properties/list",
        params: {
          locationExternalIDs: "5002,6020",
          purpose: category,
          hitsPerPage: "25",
          page: "0",
          lang: "en",
          sort: "city-level-score",
          rentFrequency: "monthly",
          categoryExternalID: "4",
        },
        headers: {
          "X-RapidAPI-Key": "aab88fdbe8msh0bc7e3aafe92204p12be54jsnacc025383ac1",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      };
    
    const [property, setProperty] = useState([]);

    useEffect(() => {
      axios
        .request(options)
        .then(function (response) {
          setProperty(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, [category]);
  
    if (!property) return null;

    return { property };
}
export default useFetch;