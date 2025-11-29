const ProductReducer = (state, action) => {
  switch (action.type) {

    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "API_ERROR":
      return { ...state, isLoading: false, iserror: true };

    case "SET_API_DATA":
      // FIXED HERE ⭐ — no "featured" property in API!
      const featuresdata = action.payload.slice(0, 4);

      return { 
        ...state,
        isLoading: false,
        products: action.payload,
        featuresProducts: featuresdata
      };

    case "SET_SINGLE_LOADING":
      return { ...state, issingleLoading: true };

    case "SET_SINGLE_DATA":
      return { ...state, issingleLoading: false, singleproduct: action.payload };

    case "API_SINGLE_ERROR":
      return { ...state, issingleLoading: false, iserror: true };

    default:
      return state;
  }
};

export default ProductReducer;
