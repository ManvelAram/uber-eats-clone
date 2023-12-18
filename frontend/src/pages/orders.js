import axios from 'axios';
import { useEffect, useState } from 'react';



export default function Orders () {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/orders`)
        .then(response => {
            setOrders(response.data);
        })
        .catch(error => {
            console.error('You got some error', error)
        })
    },[])

    return<>
        <div>
                <nav >
                    <ul className='nav-row'>{orders.map((order, i)=> 
                        
                       <li key={i}>
                           {order?.products?.map((product) => 
                           <div>
                                <span>{product.id }</span>
                                <span>{product.count }</span>
                                <span>{product.price }</span>
                           </div>
                           )}
                            <span>{order.deliveryAdress}</span>
                            <span>{order.deliveryTime}</span>
                        </li>
                    )}
                        
                    </ul>
                </nav>
            </div>

    </>
}