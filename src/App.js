import React from 'react';
import {useState} from 'react'
import { FormContext } from './component/Context/FormContext.js';
import { InputValueContext } from './component/Context/InputValueContext.js';
import {inputValue} from './component/Context/InputValueContext.js';
import { IsPopupContext } from './component/Context/IsPopupContext.js';
import {CartTotalContext} from './component/Context/CartTotalContext.js'


import './style/App.css';
import './style/reset.css'
import './style/baseCSS.css'

import StepLine from './component/StepProgressBar/StepLine.js'
import FormStep1 from './component/FormStep/FormStep1.js'
import FormStep2 from './component/FormStep/FormStep2.js'
import FormStep3 from './component/FormStep/FormStep3.js'
import StepController from './component/StepController/StepController.js'
import Header from './component/Header/Header.js'
import Footer from './component/Footer/Footer.js'
import Cart from './component/Cart/Cart.js'
import Popup from './component/FormStep/Popup.js'


export default function App(){
  const [stepData,setStepData]=useState('step1');
  const [value,setValue] = useState(inputValue);
  const [isPopup,setIsPopup] = useState(false)
  const [total,setTotal] = useState(0)



  return (
    <>
      <Header />
      <InputValueContext.Provider value={{value,setValue}}>
      <IsPopupContext.Provider value={{isPopup,setIsPopup}}>
      <CartTotalContext.Provider value={{total,setTotal}}>
      <div className='container'>
        <FormContext.Provider value={{stepData,setStepData}}>
          <section className='main'>
              <div className='title'>
                <StepLine />
              </div>
            <div className='form'>
              {stepData === 'step1' && <FormStep1 />}
              {stepData === 'step2' && <FormStep2 />}
              {stepData === 'step3' && <FormStep3 />}
            </div>
            <div className='control-button'>
              {/* <ControlButton onStep3Submit={handleSubmit}/> */}
              <StepController />
            </div>
          </section>
        </FormContext.Provider>
        <section className='cart'>
          <Cart />
        </section>
      {/* submit後彈出視窗 */}
      {isPopup && <Popup />}
      </div>
      </CartTotalContext.Provider>
      </IsPopupContext.Provider>
      </InputValueContext.Provider>
      <Footer />
    </>
  )
}