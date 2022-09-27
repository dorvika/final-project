import {
  fetchData,
  postData,
  putData,
  updateCustomerWishlist,
  deleteData,
  getDataLS,
} from "../../utils/api";

export const addFavorite = (product) => {
  return async function (dispatch, getState) {
    const isLogged = getState().loggedIn.isLoggedIn;
      dispatch({
        type: "ADD_FAVORITE",
        payload: { product },
      });
      if(isLogged) {putData(`/wishlist/${product._id}`)};
  
  };
};


export const removeFavorite = (product) => {
  return async function (dispatch, getState) {
    const isLogged = getState().loggedIn.isLoggedIn;
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: { product },
      });
      if(isLogged) {deleteData(`/wishlist/${product._id}`)};
  };
};

export const removeAllFromWishlist = () => {
  return async function (dispatch) {
        dispatch({
          type: "REMOVE_ALL_FROM_WISHLIST",
        });
    };
};

export const customerWishlist = () => {
  return async function (dispatch) {
    dispatch(loadRequest());
    try {
      const isWishlist = await fetchData("/wishlist");
      const lsFavorite = getDataLS("favorite");
      
      if (isWishlist === null) {
        const newWishlist = lsFavorite.map((product) => {
          return product._id
        });
        const wishlistResponse = await postData("/wishlist", {
          products: newWishlist,
        });
        dispatch(loadSuccess());
        dispatch(loadedWithoutError());
        dispatch(getFavoriteLS(wishlistResponse.data));
        
      } else if(isWishlist !== null && lsFavorite.length !== 0){
          const prevWishlist = isWishlist.products.map(prevItem => {
              return prevItem._id  
          })
          
        let updatedWishlist = lsFavorite.map((product) => {
           return product._id
          });
       
          updatedWishlist = [...updatedWishlist, ...prevWishlist]
          
          const uniqueProducts = updatedWishlist.reduce((acc, item) => {
            if (!acc.some(e => e == item)) {
               acc.push(item);
            }
            return acc;
         }, []);
       
          const wishlistResponse = await updateCustomerWishlist("/wishlist", {
            products: uniqueProducts,
          });
          
          dispatch(loadSuccess());
          dispatch(loadedWithoutError());
          dispatch(getFavoriteLS(wishlistResponse.data));
          
      } else {
        dispatch(loadSuccess());
        dispatch(loadedWithoutError());
        dispatch(getFavoriteLS(isWishlist));
        
      }
    } catch (error) {
      dispatch(loadSuccess());
      dispatch(loadedWithError());
    }
  };
};

export const getFavoriteLS = (data) => {
  return {
    type: "GET_FAVORITE_LOCALSTORAGE",
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