import React from 'react';
import {useState,useContext} from 'react'
import { FormContext } from './component/Context/FormContext.js';
import { InputValueContext } from './component/Context/InputValueContext.js';
import {inputValue} from './component/Context/InputValueContext.js';


import './style/App.css';
import './style/reset.css'
import './style/baseCSS.css'

import StepLine from './component/StepProgressBar/StepLine.js'
import FormStep1 from './component/FormStep/FormStep1.js'
import FormStep2 from './component/FormStep/FormStep2.js'
import FormStep3 from './component/FormStep/FormStep3.js'
import ControlButton from './component/StepController/StepController.js'
import Header from './component/Header/Header.js'
import Footer from './component/Footer/Footer.js'
import Cart from './component/Cart/Cart.js'


export default function App(){
  const [stepData,setStepData]=useState('step1');
  const [value,setValue] = useState(inputValue);

  function handleSubmit(){
    console.log(value)
    setValue({
      name : '',
      number: '',
      term: '',
      cvc: '',
    })
  }



  return (
    <>
      <Header />
      <div className='container'>
        <FormContext.Provider value={{stepData,setStepData,handleSubmit}}>
        <InputValueContext.Provider value={{value,setValue}}>
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
              <ControlButton onStep3Submit={handleSubmit}/>
            </div>
          </section>
        </InputValueContext.Provider>
        </FormContext.Provider>
        <section className='cart'>
          <Cart />
        </section>
      </div>
      <Footer />
    </>
  )
}