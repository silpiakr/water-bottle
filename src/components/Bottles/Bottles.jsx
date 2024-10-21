import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalstorage, getStoredCart, removeFromLocalstorage } from "../../utilities/localsorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    } ,[]);

    // load cart from localstroge
    useEffect(()=>{
        console.log('call the useEffect ', bottles.length);
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            let savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            console.log('saved cart', savedCart);
            setCart(savedCart)
        }
    },[bottles])

    const handleAddToCart = bottle => {
        // console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalstorage(bottle.id);
    }

    const handleRemoveFromCart = id => {
      //  visual cart remove
        const remaingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remaingCart);
      // remove fron local storage
      removeFromLocalstorage(id)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>



           <div className="bottle-container">
           {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;