export default function Step1({onNextClick}){
  return(
    <div className="btn-step-1" data-step="step1">
      <div className='btn-step'>
        <div className="btn-prev visiblility">←上一步</div>
        <div onClick={()=>onNextClick()} className="btn-next">下一步→</div>
      </div>
    </div>
  )
}