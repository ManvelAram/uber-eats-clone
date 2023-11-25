import { useState, useEffect } from "react";
import axios from "axios";


export default function Categories ({selectCategory}) {
    // const categories = [
    //     {
    //         name: 'Deals',
    //         icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png',
    //         categoryId: 1
    //     },
    //     {
    //         name: 'Grocery',
    //         icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/uber_grocery.png',
    //         categoryId: 2
    //     },
    //     {
    //         name: 'Convenience',
    //         icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png',
    //         categoryId: 3 
    //     },
    //     {
    //         name: 'Coffee and tea',
    //         icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/coffeeandtea.png',
    //         categoryId: 4
    //     },
    //     {
    //         name: 'Retail',
    //         icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/retail-v2.png',
    //         categoryId:5 
    //     },
    //     {
    //         name: 'Alcohol',
    //         icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png',
    //         categoryId: 6
    //     },
    //     {
    //         name: 'Pharmacy',
    //         icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/pharmacy-v2.png',
    //         categoryId: 7
    //     },
    //     {
    //         name: 'Baby',
    //         icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/baby.png',
    //         categoryId: 8
    //     },
    //     {
    //         name: 'Pet supplies',
    //         icon:'https://cn-geo1.uber.com/static/mobile-content/eats/pet_supplies.png',
    //         categoryId: 9
    //     },
    //     {
    //         name: 'Flowers',
    //         icon:'https://cn-geo1.uber.com/static/mobile-content/eats/flowers_transparent_background.png',
    //         categoryId: 10
    //     },
    //     {
    //         name: 'Specialty Foods',
    //         icon:'https://cn-geo1.uber.com/static/mobile-content/eats/specialy_transparent_background.png',
    //         categoryId: 11
    //     },
    //     {
    //         name: 'Electronics',
    //         icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/electronics.png',
    //         categoryId: 12
    //     },
    //     {
    //         name: 'Best overall',
    //         icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png',
    //         categoryId: 13
    //     },
    // ]


    const [categories, setCategories] = useState([]);

    useEffect(() => {
    axios.get(`http://localhost:3001/categories`)
    .then(response => {
        setCategories(response.data);
    })
    .catch(error => {
        console.error('You got some error', error)
    })
    },[])

    return<>
        <div>
                <nav >
                    <ul className='nav-row'>{categories.map((category)=> 
                       <li>
                            <a onClick={ () => {
                                selectCategory(category.id)
                            }}>
                                <div>
                                    <img alt="" src={category.icon}></img>
                                </div>
                                <span>{category.name}</span>
                            </a>
                          
                        
                        </li>
                    )}
                        
                    </ul>
                </nav>
            </div>

    </>
}