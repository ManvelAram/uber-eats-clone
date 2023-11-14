import { useState } from "react";

export default function BasketItem ({cart, onCountChange}) {
    const [counter, setCounter] = useState(1);
    
  
    const increase = () => {
      setCounter(counter + 1);
      onCountChange(cart.id, counter+1)
  
    };
   
    
    const decrease = () => {
      if (counter > 1) {
          setCounter(counter - 1);
          onCountChange(cart.id, counter-1)
  
      }
      };
    return <>
        <tr>
            <td>             
                <img alt="" width={150}  src={cart.img}/>             
            </td>
            <td>
                <span >{cart.title}</span> 
            </td>
            <td>
                <span >$ {cart.price}</span> 
            </td>
            <td>
                <button type="button" onClick={decrease}>-</button>
                 <span className="counter">{counter}</span> 
                 <button  type="button" onClick={increase}>+</button>
            </td>
                <td>
                     <span > TOTAL { (cart.price * counter).toFixed(2)}</span> 
                </td>
        </tr>
    </>
}


