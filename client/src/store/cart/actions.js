import {
    fetchData,
    postData,
    putData,
    updateCustomerCart,
    deleteData,
    getDataLS,
  } from "../../utils/api";
  const token = getDataLS("userToken");
  
  export const addToCart = (product) => {
    return async function (dispatch) {
      if (token.length !== 0 || !token) {
        dispatch({
          type: "ADD_TO_CART",
          payload: { product },
        });
        putData(`/cart/${product._id}`);
      } else {
        dispatch({
          type: "ADD_TO_CART",
          payload: { product },
        });
      }
    };
  };
  
  export const customerCart = () => {
    return async function (dispatch) {
      dispatch(loadRequest());
      try {
        const isCart = await fetchData("/cart");
        const lsCart = getDataLS("cart");

        if (isCart === null) {
          const newCart = lsCart.map((product) => {
            return {
              product: product.product._id,
              cartQuantity: product.cartQuantity,
            };
          });
          const cartResponse = await postData("/cart", {
            products: newCart,
          });
          dispatch(loadSuccess());
          dispatch(loadedWithoutError());
          dispatch(getCartLS(cartResponse.data));
          
        } else if(isCart !== null && lsCart.length !== 0){
            const prevCart = isCart.products.map(prevItem => {
                return {
                    product: prevItem.product._id,
                    cartQuantity: prevItem.cartQuantity,
                }
            })
            
          let updatedCart = lsCart.map((product) => {
              return {
                product: product.product._id,
                cartQuantity: product.cartQuantity,
              };
            });
           
            updatedCart = [...updatedCart, ...prevCart]
            
            const uniqueProducts = updatedCart.reduce((acc, item) => {
              if (!acc.some(e => e.product == item.product)) {
                 acc.push(item);
              }
              return acc;
           }, []);
          
            const cartResponse = await updateCustomerCart("/cart", {
              products: uniqueProducts,
            });
            
            dispatch(loadSuccess());
            dispatch(loadedWithoutError());
            dispatch(getCartLS(cartResponse.data));
            
        } else {
          dispatch(loadSuccess());
          dispatch(loadedWithoutError());
          dispatch(getCartLS(isCart));
          
        }
      } catch (error) {
        dispatch(loadSuccess());
        dispatch(loadedWithError());
      }
    };
  };
  
  export const removeFromCart = (id) => {
    return async function (dispatch) {
      if (token.length !== 0 || !token) {
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: { id },
        });
        deleteData(`/cart/${id}`);
      } else {
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: { id },
        });
      }
    };
  };
  
  export const decreaseCartItem = (product) => {
    return async function (dispatch) {
      if (token.length !== 0 || !token) {
        dispatch({
          type: "DECREASE_CART_ITEM",
          payload: { product },
        });
        deleteData(`/cart/product/${product._id}`);
      } else {
        dispatch({
          type: "DECREASE_CART_ITEM",
          payload: { product },
        });
      }
    };
  };
  
  export const changesToCart = (product, qty) => {
    return {
        type: 'CHANGES_TO_CART',
        payload: {product: product, cartQuantity: qty} 
    }
  };
  
  export const removeAllFromCart = () => {
    return async function (dispatch) {
        if (token.length !== 0 || !token) {
          dispatch({
            type: "REMOVE_ALL_FROM_CART",
          });
          deleteData("/cart");
        } else {
          dispatch({
            type: "REMOVE_ALL_FROM_CART",
          });
        }
      };
  };
  
  export const getCartLS = (data) => {
    return {
      type: "GET_CART_LOCALSTORAGE",
      payload: { data },
    };
  };
  
  export const loadRequest = () => {
      return {
        type: "LOAD_REQUEST",
      };
    };
    export const loadSuccess = () => {
      return {
        type: "LOAD_SUCCESS",
      };
    };
    export const loadedWithError = () => {
      return {
        type: "GET_PRODUCTS_WITH_ERROR",
      };
    };
    export const loadedWithoutError = () => {
      return {
        type: "GET_PRODUCTS_WITHOUT_ERROR",
      };
    };