import Categories from './categories'
import './restauranrItem.css'
import { Link } from 'react-router-dom'

export default function RestaurantItem ({data}) {
    return <>
        
        <Link to={{ pathname: `/products/${data.id}`, state:{id: data.id}}}>
        <div className='restaurat-parent'>
            <img className="restaurantImage" alt="" src={data.icon}
            />
            <div>
                <span>{data.name}</span>
                <span>{data.deliveryTime}</span>
            </div>
        </div> 
         </Link> 
      
    </>
}