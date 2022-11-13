import React from 'react';
import {useState} from 'react'

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

  return (
    <>
      <Header />
      <div className='container'>
        <section className='main'>
          <div className='title'>
            <StepLine stepData={stepData}/>
          </div>
          <div className='form'>
            {/* <FormStep1 stepData={stepData}/> */}
            {stepData === 'step1' && <FormStep1 />}
            {stepData === 'step2' && <FormStep2 />}
            {stepData === 'step3' && <FormStep3 />}
          </div>
          <div className='control-button'>
            <ControlButton stepData={stepData} setStepData={setStepData}/>
          </div>
        </section>
        <section className='cart'>
          <Cart />
        </section>
      </div>
      <Footer />
    </>
  )
}