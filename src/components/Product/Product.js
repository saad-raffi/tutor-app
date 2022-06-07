import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Banner from '../Banner/Banner';
import { useNavigate } from 'react-router-dom';
<Banner></Banner>
const Product = ({product}) => {
    const navigate = useNavigate();
    const { name, img, fee, duration, discription } = product;
    
    return (
        <div className='product'>
            
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: BDT{fee}</p> 
                <p><small>Seller: {duration}</small></p>
                <p><small>Description: {discription} </small></p>
            </div>
            <button onClick={() => navigate('/shipment')} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;