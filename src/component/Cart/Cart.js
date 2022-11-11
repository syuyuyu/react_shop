import React from 'react';
import {CartList} from './cart_data.js'
import RenderItem from './CartItems.js'


export default function Cart(){
  return (
    <div className="cart-container">
      <h3>購物籃</h3>
      <div className='cart-group'>
        {CartList.map( product=>
          <RenderItem
          key= {product.id}
          name={product.name}
          img={product.img}
          price={product.price}
          quantity={product.quantity}
          />
        )}
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
  )
}

// 方法二 將CartList.map單獨拉出來return
// export default function Cart(){

//   const products = CartList.map( product=>
//     <div className="cart-item" key={product.id}>
//       <div className="cart-img">
//         <img src={product.img} alt="img" />
//       </div>
//       <div className="cart-content">
//         <div className="cart-content-title">
//           <div key={product.id}>{product.name}</div>
//           <div>${product.price}</div>
//         </div>
//         <div className="cart-content-count">
//           <div className="cart-content-btn cart-content-btn-minus">-</div>
//           <div className="cart-content-num">{product.quantity}</div>
//           <div className="cart-content-btn cart-content-btn-add">+</div>
//         </div>
//       </div>
//     </div>
//   )

//   return (
//     <>
//     <div className="cart-container">
//       <h3>購物籃</h3>
//       <div className='cart-group'>
//         {products}
//       </div>
//       <div className="cart-down cart-fee">
//         <span>運費</span>
//         <span>免費</span>
//       </div>
//       <div className="cart-down cart-total">
//         <div>小計</div>
//         <div>$400</div>
//       </div>
//     </div>
//     </>
//   )
// }
