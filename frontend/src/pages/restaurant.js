import { useEffect, useState } from "react";
import axios from 'axios';
import Categories from "../components/categories";
import RestaurantItem from "../components/restaurantItem";
import './restuarant.css'



export default function Restaurant () {
    
    // const restaurants = [
    //     {
    //         name:"McDonald's® (Burbank-Olive)",
    //         icon:'https://tb-static.uber.com/prod/image-proc/processed_images/41e448619de9527990482249b90f154c/c9252e6c6cd289c588c3381bc77b1dfc.jpeg',
    //         deliveryTime: "10-20 min",
    //         id:1
    //     },
    //     {
    //         name:'Dounats',
    //         icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hZDYxMTZkNS1jZTkzLTQxNzQtOWQ3NC02ZjM2MGI1YWYxZTQuanBlZw==',
    //         deliveryTime: "10-30 min",
    //         id:2
    //     },
    //     {
    //         name:'Starbucks',
    //         icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWRhMjEzYWM3MWYwM2M0NTQwN2ZhZWNiYTRmOTg1ZmEvNzkxNWM0YTc4YTlmOTRlZDU2MzE2YzdjNGRjMGVjODkuanBlZw==',
    //         deliveryTime: "10-20 min",
    //         id:3
    //     },
    // ]
const [restaurants, setRestaurants] = useState([]);

useEffect(() => {
    axios.get(`http://localhost:3001/restaurants`)
    .then(response => {
        setRestaurants(response.data);
    })
    .catch(error => {
        console.error('You got some error', error)
    })
},[])
    function onSelectCategory(id) {
        axios.get(`http://localhost:3001/restaurants?categoryId=${id}`)
        .then(response => {
            setRestaurants(response.data);
        })
        .catch(error => {
            console.error('You got some error', error)
        })
    }

    return<>

        <Categories selectCategory={onSelectCategory}></Categories>
        <div className="restaurant-parent">
            {restaurants.map((restaurant) =>
                <RestaurantItem data={restaurant}></RestaurantItem>
            )}
        </div>
        
       
       
       
    </>
}