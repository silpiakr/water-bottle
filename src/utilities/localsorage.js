const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartaToLocalstorage = cart => {
    const carStringified = JSON.stringify(cart);
    localStorage.setItem('cart', carStringified);
}

const addToLocalstorage = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local stprage
    saveCartaToLocalstorage(cart);
}

const removeFromLocalstorage = id => {
    const cart = getStoredCart();
    // removing every id
    const remaing = cart.filter(idx => idx !== id);
    saveCartaToLocalstorage(remaing)
}
export {addToLocalstorage, getStoredCart, removeFromLocalstorage}