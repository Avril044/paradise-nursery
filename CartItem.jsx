import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem(){
 const dispatch = useDispatch();
 const cartItems = useSelector(state => state.cart.items);
 const totalAmount = cartItems.reduce((acc, item) => acc + parseInt(item.cost.replace('$','')) * item.quantity, 0);

 return (
  <div>
   <h2>Total Cart Amount: ${totalAmount}</h2>
   <h3>Total de carrito: ${totalAmount}</h3>
   {cartItems.map((item, idx) => (
    <div key={idx}>
     <h3>{item.name}</h3>
     <p>Cost: {item.cost}</p>
     <p>Total: ${parseInt(item.cost.replace('$','')) * item.quantity}</p>
     <button onClick={()=>dispatch(updateQuantity({name:item.name, quantity:item.quantity+1}))}>+</button>
     <span>{item.quantity}</span>
     <button onClick={()=>dispatch(updateQuantity({name:item.name, quantity:item.quantity-1}))}>-</button>
     <button onClick={()=>dispatch(removeItem(item.name))}>Delete</button>
     <button onClick={()=>dispatch(removeItem(item.name))}>Eliminar</button>
    </div>
   ))}
   <button>Checkout - Próximamente</button>
   <button>Pagar - Próximamente</button>
   <button>Continue Shopping</button>
   <button>Continuar comprando</button>
  </div>
 );
}
export default CartItem;
