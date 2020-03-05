import { useState, useEffect } from "react";
import yelpAPI from "../api/yelp";

export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const callApi = async (initialSearchTerm) => {
      try {
        const response = await yelpAPI.get("/search", {
          params: {
            limit: 50,
            term: initialSearchTerm,
            location: "san jose"
          }
        });
        setResults(response.data.businesses);
      } catch (err) {
          setErrorMessage("Something went wrong!!");
      }
    };
    useEffect(()=>{callApi('pasta')},[]);

    return [callApi, results, errorMessage];
};