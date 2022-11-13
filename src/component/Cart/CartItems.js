
export default function RenderItem({lists,setLists}){

  function handleMinusClick(listId){
    let nextLists = lists.map(li=>{
      if(listId === li.id && li.quantity>0){
        return {
          ...li,
          quantity : li.quantity-1,
        }
      }else{
        return li
      };
    });
    setLists(nextLists)
  }

  function handleAddClick(listId){
    let nextLists = lists.map(li=>{
      if(listId === li.id){
        return {
          ...li,
          quantity : li.quantity+1,
        }
      }else{
        return li
      };
    });
    setLists(nextLists)
  }
    


  return(
    lists.map((list =>
      <div className="cart-item" key={list.id} data-price={list.price} data-quantity={list.quantity}>

        <div className="cart-img">
          <img src={list.img} alt={list.name} />
        </div>
        <div className="cart-content">
          <div className="cart-content-title">
            <div key={list.id}>{list.name}</div>
            <div>${list.price}</div>
          </div>
          <div className="cart-content-count">
            <div
              onClick={()=>{handleMinusClick(list.id)}}
              id={list.id}
              className="cart-content-btn cart-content-btn-minus">-</div>
            <div className="cart-content-num">{list.quantity}</div>
            <div
              onClick={()=>{handleAddClick(list.id)}}
              id={list.id}
              className="cart-content-btn cart-content-btn-add">+</div>
          </div>
        </div>

      </div>
    ))
  )
}
