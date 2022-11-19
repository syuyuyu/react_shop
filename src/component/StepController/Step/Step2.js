export default function Step2({onNextClick,onPrevClick}){
  return(
    <div className="btn-step-2" data-step="step2">
      <div className='btn-step'>
        <div onClick={()=>onPrevClick()} className="btn-prev">←上一步</div>
        <div onClick={()=>onNextClick()} className="btn-next">下一步→</div>
      </div>
    </div>
  )
}