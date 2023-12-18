
import { useEffect, useState } from 'react'
import BasketItem from '../components/basket-item'
import './basket.css'
import axios from 'axios';





// const productsList = [
//     {
//         id:1,
//         img:'https://tb-static.uber.com/prod/image-proc/processed_images/db3c6966ae5f42e857598331c222d425/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
//         title:'Medium French Fries', 
//         price:4.89,
//         cal:'320 Cal.',
//         count:1,
//     },
//     {
//         id:2,
//         img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTlkMmExNWRkMDJiYWQxYTI1NzY1OWE3Y2IzNGE1YzIvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
//         title:'10 pc. Chicken McNuggets® Meal', 
//         price:11.59,
//         cal:'740 - 980 Cal.', 
//         count:1,
//     },
//     {
//         id:3,
//         img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNzFlYWQ5ZGI4OTZlYzExMmZkMTZlMGRmYTI0N2VmZTkvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
//         title:'10 pc. Chicken McNuggets®', 
//         price:6.19,
//         cal:'410 Cal.', 
//         count:1,
//     },
//     {
//         id:4,
//         img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZmFkYzI4MTgxZjE1MDVhODAzYmIwZjFkMjM4NGU1ZGIvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
//         title:'Double Cheeseburger', 
//         price:4.59,
//         cal:'450 Cal.', 
//         count:1,
//     },
//     {
//         id:5,
//         img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYjQ4MGM5NjcwMzVmOGE5ZWVkOWIzZGVjMTgxZTQxOGEvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
//         title:'McChicken®', 
//         price:4.59,
//         cal:'400 Cal.', 
//         count:1,
//     },
// ]
export default function Basket () {
    const [basketItem, setBasketItem] = useState([]);
    
    useEffect(() => {
        // console.log(basketItem)
        const items = JSON.parse(localStorage.getItem('basket'));
        if(items) {
            // setBasketItem(items) 
            axios.post('http://localhost:3001/products', {
                ids: items.map((e) => e.id)
            })
            .then(response => {
                response.data.map((element) => {
                    const foundItem = items.find((item) => item.id === element.id);
                    if (foundItem) {
                        element.count = foundItem.count
                    }
                    return element
                } )
                setBasketItem(response.data);
                const grandTotalAmount = response.data.reduce((a,b) =>{
                    return(a + b.count * b.price)
                },0)
                setGrandTotal(grandTotalAmount)  
                // console.log("This is data", response.data);
                // console.log("Items", items)
            })
        }
    }, [])


    const [grandTotal, setGrandTotal] = useState(0)
    function countChange (id, count) {
        const pr = basketItem.find((k)=> k.id===id);
        pr.count = count;
        const grandTotalAmount = basketItem.reduce((a,b) =>{
            return(a + b.count * b.price)
        },0)
        setGrandTotal(grandTotalAmount)
        
    }
    function cashOut () {
        axios.post('http://localhost:3001/orders', {
            products:basketItem,
            deliveryTime : '1hour',
            deliveryAdress : 'Qochar 36',
        })
        .then(response => {
            alert('Your order has been placed and will be delivered via' + response.data.deliveryTime)
            return console.log(response.data)
        })
        
        // window.location.reload();
        localStorage.removeItem("basket")
        setBasketItem([])
        
    }
    return <>
        
       <form>
            <table className="basket-table" cellPadding={46}>
                <tbody>
                    {basketItem.map((cart, index)=>
                     <BasketItem onCountChange={countChange} key={index} cart={cart}></BasketItem>
                    )}
                    
                </tbody>
            </table>
            <span>AMOUNT {(grandTotal).toFixed(2)} </span>
            <button type='button' onClick={cashOut} >
                Order
            </button>
       </form>
    </>
}