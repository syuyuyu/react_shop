import React from 'react';

import './style/App.css';
import './style/reset.css'
import './style/baseCSS.css'

import StepLine from './component/StepLine/StepLine.js'
import FormStep1 from './component/FormStep/FormStep1.js'
import FormStep2 from './component/FormStep/FormStep2.js'
import FormStep3 from './component/FormStep/FormStep3.js'
import ControlButton from './component/ControlButton/ControlButton.js'
import Header from './component/Header/Header.js'
import Footer from './component/Footer/Footer.js'
import Cart from './component/cart/Cart.js'


export default function App(){
  return (
    <>
      <Header />
      <div className='container'>
        <section className='main'>
          <div className='title'>
            <StepLine />
          </div>
          <div className='form'>
            <FormStep1 />
          </div>
          <div className='control-button'>
            <ControlButton />
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