import {useContext} from 'react';
import {InputValueContext} from '../Context/InputValueContext.js';


export default function FormStep3(){
  const {value,setValue} = useContext(InputValueContext);

  //當input輸入時，setValue跟著更新狀態
  function handleValueChange(e){
    const name = e.target.name
    if(name === 'card-name' ){
      setValue({
        ...value,
        name : e.target.value
      })
    }else if(name === 'card-num'){
      setValue({
        ...value,
        number : e.target.value
      })
    }else if(name === 'card-term'){
      setValue({
        ...value,
        term : e.target.value
      })
    }else if(name === 'card-cvc'){
      setValue({
        ...value,
        cvc : e.target.value
      })
    };
  }


  return(
    <>
      <h2>付款資訊</h2>
      <form className='form-step3'>
        <div className="card">
          <div className="card-item card-name">
            <h5>持卡人姓名</h5>
            {/* input name */}
            <input type="text" placeholder="John Doe" name='card-name' className="card-input" value={value.name} onChange={handleValueChange}/>
          </div>
          <div className="card-item card-num">
            <h5>卡號</h5>
            {/* input card */}
            <input type="text" placeholder="1111 2222 3333 4444" name='card-num' className="card-input" value={value.number} onChange={handleValueChange} />
          </div>
          <div className="card-info">
            <div className="card-item card-info-term">
              <h5>有效期限</h5>
              {/* input term */}
              <input type="text" placeholder="MM/YY" name='card-term' className="card-input" value={value.term} onChange={handleValueChange}/>
            </div>
            <div className="card-item card-info-cvc">
              <h5>CVC/CCV</h5>
              {/* input cvc */}
              <input type="text" placeholder="123" name='card-cvc' className="card-input" value={value.cvc} onChange={handleValueChange} />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}