import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import reducer from "../Reducer/ProductReducer";
const Appcontext = createContext();

// let API = "https://api.pujakaitem.com/api/products";
let API = "https://api.escuelajs.co/api/v1/products";
let initialstate = {
  isLoading: false,
  iserror: false,
  products: [],
  featuresProducts: [],
  issingleLoading: false,
  singleproduct: {},
};
let AppProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialstate);

  let getfeaturesproducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const { data } = await axios.get(url);

      // Normalize data here
      const formattedData = data.map((item) => ({
        id: item.id,
        name: item.title, // mapping title → name
        price: item.price * 100, // convert to paise format
        category: item.category?.name || "Unknown",
        image: item.images || "",
        
        // dummy values because API doesn't have them
        company: "Escuela Store",
        colors: ["black", "white"], 
        description: item.description,
      }));

      dispatch({ type: "SET_API_DATA", payload: formattedData });

    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product
  let getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(url);
      let singleproduct = response.data;
      
      dispatch({ type: "SET_SINGLE_DATA", payload: singleproduct });
    } catch (error) {
      dispatch({ type: "API-SINGLE-ERROR" });
    }
  };

  useEffect(() => {
    getfeaturesproducts(API);
  }, []);

  return (
    <Appcontext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </Appcontext.Provider>
  );
};
// custom hooks
const UseProductcontext = () => {
  return useContext(Appcontext);
};

export { AppProvider, Appcontext, UseProductcontext };
