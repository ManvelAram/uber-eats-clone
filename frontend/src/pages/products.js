import { useEffect, useState } from 'react'
import axios from 'axios'
import './products.css'
import MenuItem from '../components/menu-item'



export default function Products () {
    // const productsList = [
    //     {
    //         id:1,
    //         img:'https://tb-static.uber.com/prod/image-proc/processed_images/db3c6966ae5f42e857598331c222d425/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
    //         title:'Medium French Fries', 
    //         price:'$4.89',
    //         cal:'320 Cal.',
    //     },
    //     {
    //         id:2,
    //         img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTlkMmExNWRkMDJiYWQxYTI1NzY1OWE3Y2IzNGE1YzIvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
    //         title:'10 pc. Chicken McNuggets® Meal', 
    //         price:'$11.59',
    //         cal:'740 - 980 Cal.', 
    //     },
    //     {
    //         id:3,
    //         img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNzFlYWQ5ZGI4OTZlYzExMmZkMTZlMGRmYTI0N2VmZTkvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
    //         title:'10 pc. Chicken McNuggets®', 
    //         price:'$6.19',
    //         cal:'410 Cal.', 
    //     },
    //     {
    //         id:4,
    //         img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZmFkYzI4MTgxZjE1MDVhODAzYmIwZjFkMjM4NGU1ZGIvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
    //         title:'Double Cheeseburger', 
    //         price:'$4.59',
    //         cal:'450 Cal.', 
    //     },
    //     {
    //         id:5,
    //         img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYjQ4MGM5NjcwMzVmOGE5ZWVkOWIzZGVjMTgxZTQxOGEvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
    //         title:'McChicken®', 
    //         price:'$4.59',
    //         cal:'400 Cal.', 
    //     },
    // ]

    const [productsList, setProductsList] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/products`)
        .then(response => {
            setProductsList(response.data)
        })
        .catch(error => {
            console.log('You got some error', error)
        })
    },[])

    const [basketItems, setBasketItems] = useState([])

    function addToCard (id) {
       const tempArr = basketItems.slice();
       
        const finderOfId = tempArr.find(item => item.id===id)
        if (finderOfId) {
            finderOfId.count++;
            
        }else {
            tempArr.push({id, count:1})
        }
        setBasketItems(tempArr);
        window.localStorage.setItem('basket', JSON.stringify(tempArr))
        console.log(tempArr)
    }

    return <>
        <div>
            <img  alt="" src="78f3e5246c024ab98e8b711ab5f92b2f/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg" 
                srcset="https://tb-static.uber.com/prod/image-proc/processed_images/78f3e5246c024ab98e8b711ab5f92b2f/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg 240w,https://tb-static.uber.com/prod/image-proc/processed_images/78f3e5246c024ab98e8b711ab5f92b2f/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg 550w,https://tb-static.uber.com/prod/image-proc/processed_images/78f3e5246c024ab98e8b711ab5f92b2f/67b1ce06a25a64dc4a71581bb39c36c6.jpeg 640w,https://tb-static.uber.com/prod/image-proc/processed_images/78f3e5246c024ab98e8b711ab5f92b2f/f3376a06b92224efbe50167fb7cb61e4.jpeg 750w,https://tb-static.uber.com/prod/image-proc/processed_images/78f3e5246c024ab98e8b711ab5f92b2f/50446f64f31cbefe66558fc47f50a9d6.jpeg 1080w,https://tb-static.uber.com/prod/image-proc/processed_images/78f3e5246c024ab98e8b711ab5f92b2f/c9252e6c6cd289c588c3381bc77b1dfc.jpeg 2880w"
                className="dz"
            />
        </div>
        <h1>McDonald's® (Burbank)</h1>   
        <h2>Featured items</h2>
        
        <div className='item-parent'>
            {productsList.map((e)=>
                <MenuItem prop={e} onAddToCard={addToCard}></MenuItem>
            )}
            
        </div>
       
    </>
}