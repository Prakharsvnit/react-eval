import React,{useState} from 'react'
import "../App.css"

const GroceryData = ({data1}) => {

    const [productPrice,setProductPrice] = useState(data1.price);
    const [number,setNumber] = useState(1);

    const handleAdd=()=>{
        setNumber(number+1)
        setProductPrice(Number(data1.price) * (number+1)); 
        }
    
        const handleSubtract = ()=>{
            setNumber(number-1)
            setProductPrice(Number(data1.price) * (number-1));
        }

        console.log(typeof(productPrice));
    return (
        <div className="container1">
            <div className="item">
            <img alt="img" src={data1.image_url} className="item_img" />
                <h3>Product Name:</h3><p>{data1.product_name}</p>
                <h3>Description:</h3><p>{data1.description}</p>
                <p>Price:{productPrice}</p>
                <button disabled={number<=0} className="qty_box" onClick={handleSubtract}>-</button>
                <div className="qty_box">{number}</div>
                <button className="qty_box" onClick={handleAdd}>+</button>
                <div className="stock">{data1.is_available ? "High Stock" : "Low Stock"}</div>
            </div>
            
        </div>
    )
}

export default GroceryData