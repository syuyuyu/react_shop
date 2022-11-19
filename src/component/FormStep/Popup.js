import {useContext} from 'react'
import {InputValueContext} from '../Context/InputValueContext.js';
import { IsPopupContext } from '../Context/IsPopupContext.js';

export default function Popup(){
const {value,setValue} = useContext(InputValueContext);
const {isPopup,setIsPopup}=useContext(IsPopupContext);



function handleOffClick(){
  setIsPopup(!isPopup)
      setValue({
      name : '',
      number: '',
      term: '',
      cvc: '',
    })
}

  return(
    <div className='popup-wrap'>
      <div className="popup-content">
        <h1><b>確認資訊</b></h1>
        <h3>持卡人姓名:  {value.name}</h3>
        <h3>卡號:  {value.number}</h3>
        <h3>有效期限:  {value.term}</h3>
        <h3>CVC/CCD:  {value.cvc}</h3>
        <button className="popup-button" onClick={handleOffClick}>
          關閉
        </button>
      </div>
    </div>
    
  )
}