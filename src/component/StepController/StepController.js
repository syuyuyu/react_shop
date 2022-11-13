
export default function ControlButton({stepData,setStepData}){
  // const [stepData,setStepData]=useState('step1')

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


  function Step1(){
    return(
      <div className="btn-step-1" data-step="step1">
        <div className='btn-step'>
          <div className="btn-prev visiblility">←上一步</div>
          <div onClick={handleNextStep} className="btn-next">下一步→</div>
        </div>
      </div>
    )
  }

  function Step2(){
    return(
      <div className="btn-step-2" data-step="step2">
        <div className='btn-step'>
          <div onClick={handlePrevStep} className="btn-prev">←上一步</div>
          <div onClick={handleNextStep} className="btn-next">下一步→</div>
        </div>
      </div>
    )
  }

  function Step3(){
    return(
      <div className="btn-step-3" data-step="step3">
        <div className='btn-step'>
          <div onClick={handlePrevStep} className="btn-prev">←上一步</div>
          <div onClick={handleNextStep} className="btn-next">確認下單</div>
        </div>
      </div>
    )
  }
  


  return(
    <>
      {stepData === 'step1' && <Step1 />}
      {stepData === 'step2' && <Step2 />}
      {stepData === 'step3' && <Step3 />}
    </>
  )
}