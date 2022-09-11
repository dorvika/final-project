export const addToCart = product => {
    return {
        type: 'ADD_TO_CART',
        payload: {product} 
    }
}

export const removeFromCart = id => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: { id }
    }
}

export const decreaseCartItem = product => {
    return {
        type: 'DECREASE_CART_ITEM',
        payload: { product }
    }
}

export const removeAllFromCart = () => {
    return {
        type: 'REMOVE_ALL_FROM_CART',
    }
}

export const getCartLS = data => {
    return {
        type: 'GET_CART_LOCALSTORAGE',
        payload: { data }
    }
}