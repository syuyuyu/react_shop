import {useContext} from 'react'
import { FormContext } from '../Context/FormContext.js';
import {InputValueContext} from '../Context/InputValueContext.js';
import { IsPopupContext } from '../Context/IsPopupContext.js';
import {CartTotalContext} from '../Context/CartTotalContext'

import Step1 from './Step/Step1.js'
import Step2 from './Step/Step2.js'
import Step3 from './Step/Step3.js'


// ControlButton
export default function StepController(){
  const {stepData,setStepData}=useContext(FormContext);
const {isPopup,setIsPopup}=useContext(IsPopupContext);
  const {value,setValue} = useContext(InputValueContext);
  const {total,setTotal} = useContext(CartTotalContext);

  
  function handleNextStep(){
    if(stepData === 'step1'){
      setStepData('step2')
    }else if(stepData === 'step2'){
      setStepData('step3')
    }else{
      setStepData(stepData)
    }
  }  
  
  function handlePrevStep(){
    if(stepData === 'step2'){
      setStepData('step1')
    }else if(stepData === 'step3'){
      setStepData('step2')
    }else{
      setStepData(stepData)
    }
  }  

  function handleSubmit(){
    setIsPopup(!isPopup)
    console.log(value)
    console.log('total='+total)
  }


  return(
    <>
      {stepData === 'step1' && <Step1 onNextClick={handleNextStep}/>}
      {stepData === 'step2' && <Step2 onNextClick={handleNextStep} onPrevClick={handlePrevStep}/>}
      {stepData === 'step3' && <Step3 onSubmit={handleSubmit} onPrevClick={handlePrevStep}/>}
    </>
  )
}