import React from "react"
import { useSelector,useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {


  const cartItems =useSelector((store)=>store.cart.items)
  
  const dispatch = useDispatch()
const handleClearCart = () =>{
  dispatch(clearCart())
}

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-8/12 m-auto">
      <button className="px-2 py-1 m-2 bg-black text-white text-sm rounded-lg "
      onClick={handleClearCart}
      >Clear Cart</button>
      {cartItems.length===0 && <h1>Cart empty ba re 😑</h1>}
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
};

export default Cart;
