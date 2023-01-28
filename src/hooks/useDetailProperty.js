import { useEffect, useState } from "react";
import axios from "axios";


const useFetchDataList = (id) => {
    const options = {
        method: "GET",
        url: "https://bayut.p.rapidapi.com/properties/detail",
        params: {externalID: id},
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      };
    
    const [property, setProperty] = useState(null);

    useEffect(() => {
      axios
        .request(options)
        .then(function (response) {
          setProperty(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, [id]);
  
    if (!property) return null;

    return { property };
}
export default useFetchDataList;