//方法一 使用prop傳值
export default function RenderItem(product){
  return(
    <div className="cart-item" key={product.id}>
      <div className="cart-img">
        <img src={product.img} alt="img" />
      </div>
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
}
