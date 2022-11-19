import React from 'react';
import CartItems from './CartItems'
import {useState,useContext} from 'react';
import {CartContext,CartList} from '../Context/CartContext'
import {CartTotalContext} from '../Context/CartTotalContext'


//方法一 使用prop傳值，另一半在CartItems.js裡
export default function Cart(){
  const [lists,setLists] = useState(CartList);
  const {total,setTotal} = useContext(CartTotalContext);


  let totalCash = 0
  lists.forEach(list =>{
    totalCash += list.price*list.quantity
    setTotal(totalCash)
  })

  return (
    <div className="cart-container">
      <h3>購物籃</h3>
      <div className='cart-group'>
        <CartContext.Provider value={{lists,setLists}}>
          <CartItems />
        </CartContext.Provider>
      </div>
        <div className="cart-down cart-fee">
          <span>運費</span>
          <span>免費</span>
        </div>
        <div className="cart-down cart-total">
          <div>小計</div>
          <div>{total}</div>
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
