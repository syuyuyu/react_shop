import React from 'react';
import {CartList} from './cart_data.js'


export default function Cart(){
  const products = CartList.map( product=>
    <div className="cart-item">
        <div className="cart-img"><img src={product.img} alt="img" /></div>
        <div className="cart-content">
          <div className="cart-content-title">
            <div key={product.id}>{product.name}</div>
            <div>${product.price}</div>
          </div>
          <div className="cart-content-count">
            <div className="cart-content-btn cart-content-btn-minus">-</div>
            <div className="cart-content-num">{product.quantity}</div>
            <div className="cart-content-btn cart-content-btn-add">+</div>
          </div>
        </div>
      </div>
    )
    
    


  return (
    <>
    <div className="cart-container">
      <h3>購物籃</h3>
      <div className='cart-group'>
          {/* 變數從我開始cart-item */}
        {products}
        {/* cart item */}
      </div>
      <div className="cart-down cart-fee">
        <span>運費</span>
        <span>免費</span>
      </div>
      <div className="cart-down cart-total">
        <div>小計</div>
        <div>$400</div>
      </div>
    </div>
    </>
  )
}
