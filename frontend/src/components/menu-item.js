import './menu-item.css'
import { Link } from 'react-router-dom'

export default function MenuItem ({prop}) {
    
    return <>
        
       
        <Link to="/singleproduct">  
        <div className='menu-item-parent'>
            <div >
                <img alt='' className='photo' src={prop.img}
                />  
            </div>
                <div className='info-box'>
                    <span>{prop.title}</span>
                    <span>{prop.price}</span>
                    <span> • {prop.cal}</span>
                </div>
        </div>
      
        </Link>
      

    </>
}