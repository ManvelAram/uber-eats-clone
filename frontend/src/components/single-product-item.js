import './single-product-item.css'

export default function SingleProductItem () {

    return <>
        <div className='parent'>
            <div className = 'burger-item'>
                <img alt="" src='https://tb-static.uber.com/prod/image-proc/processed_images/6382f13784f101e0f7c56554f2ac6cbc/a19bb09692310dfd41e49a96c424b3a6.jpeg'/>
            </div>
            <div className = 'burger-info-left'>
                <h2>McDouble®</h2>
                <span className='s1'>$ 2.30</span>
                <hr/>
                <span className='s2'>McDouble® Comes With</span>
                <br/>
                <span className='s3'>Choose up to 17</span>
                    <div className=''>
                    <div className='choose-ingredients'>
                        <p>Mustard</p>
                        <span className='calorias'>5 Cal.</span>
                        <div className='buttons'>
                            <button>-</button> 1
                            <button className='plus'>+</button>
                        </div>
                    </div>
                    <hr/>
                    <div className='choose-ingredients'>
                        <p>Ketchup</p>
                        <span className='calorias'>20 Cal.</span>
                        <div className='buttons'>
                            <button>-</button> 3
                            <button className='plus'>+</button>
                        </div>
                    </div>
                    <hr/>
                    <div className='choose-ingredients'>
                        <p>Diced Onions</p>
                        <span className='calorias'>5 Cal.</span>
                        <div className='buttons'>
                            <button>-</button> 0
                            <button className='plus'>+</button>
                        </div>
                    </div>
                    <hr/>
                    <div className='choose-ingredients'>
                        <p>American Cheese</p>
                        <p>$ 1.50</p>
                        <span className='calorias'>40 Cal.</span>                       
                        <div className='buttons'>
                            <button>-</button> 1
                            <button className='plus'>+</button>
                        </div>
                    </div>
                    <hr/>
                    <div className='choose-ingredients'>
                        <p>Regular Bun</p>                       
                        <span className='calorias'>150 Cal.</span>                       
                        <div className='buttons'>
                            <input type="checkbox"></input>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div> 
        </div>
    </>
}