import React from 'react';
import './Product.css';
import data from '../data.json'; // Import the JSON data

const Product = () => {
  return (
    <div className='ProductMain'>
      <div className='CardHolder'>
        {
          data.map((product) => (
            <div key={product.id} className='Cards'>
              <div className='head'>
                <div className='head1'>
                  <div className='head2'>Add</div>
                  <div className='head3'>Shop</div>
                </div>
                <div className='headbody'>
                  <div className='headbody1'>
                    <div className='headbody2'>
                      <img src={product.image} />
                    </div>
                  </div>
                </div>
                <div className='feet'>
                  <div className='feet1'>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Product;
