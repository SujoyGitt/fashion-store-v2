const Cart_reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;

      let existingproduct = state.cart.find(
        item => item.id === id + color
      );

      if (existingproduct) {
        let updatedproduct = state.cart.map(item => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount;
            if (newAmount > item.max) newAmount = item.max;
            return { ...item, amount: newAmount };
          }
          return item;
        });
        return { ...state, cart: updatedproduct };
      } else {
        const Cartproduct = {
          id: id + color,
          Name: product.title || "Unnamed Product",
          color,
          amount,
          image: product.images && product.images.length ? product.images[0] : "",
          max: product.stock ?? 10,
          price: product.price,
        };
        return { ...state, cart: [...state.cart, Cartproduct] };
      }

    case "SET_INCREASE":
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload) {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) newAmount = item.max;
            return { ...item, amount: newAmount };
          }
          return item;
        }),
      };

    case "SET_DECREASE":
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload) {
            let newAmount = item.amount - 1;
            if (newAmount < 1) newAmount = 1;
            return { ...item, amount: newAmount };
          }
          return item;
        }),
      };

    case "REMOVE_ITEM":
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case "REMOVE_ALL_CARTDATA":
      return { ...state, cart: [] };

    case "CART_ITEM_PRICE_TOTAL":
      const { total_item, total_price } = state.cart.reduce(
        (acc, curr) => {
          acc.total_item += curr.amount;
          acc.total_price += curr.price * curr.amount;
          return acc;
        },
        { total_item: 0, total_price: 0 }
      );
      return { ...state, total_item, total_price };

    default:
      return state;
  }
};

export default Cart_reducer;
