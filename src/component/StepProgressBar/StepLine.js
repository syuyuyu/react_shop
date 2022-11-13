const step1={
  id:1,
  name:'寄送地址',
}
const step2={
  id:2,
  name:'運送方式',
}
const step3={
  id:3,
  name:'付款資訊',
}



export default function StepLine({stepData}){



  return (
    <div className='step'>
      <h1>結帳</h1>
      <div className='step-line'>
        <div className='step-item'>
          <div className='step-number bg-black'>{step1.id}</div>
          <p>{step1.name}</p>
        </div>
        <div className="step-run-line "></div>
        <div className='step-item bg-grey'>
          <div className={stepData === 'step2' || stepData === 'step3'? 'step-number bg-black':'step-number'}>{step2.id}</div>
          <p>{step2.name}</p>
        </div>
        <div className="step-run-line bg-grey"></div>
        <div className='step-item bg-grey'>
          <div className={stepData === 'step3'? 'step-number bg-black':'step-number'}>{step3.id}</div>
          <p>{step3.name}</p>
        </div>
      </div>
    </div>
  )
}