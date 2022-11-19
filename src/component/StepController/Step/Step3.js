export default function Step3({onSubmit,onPrevClick}){
  return(
    <div className="btn-step-3" data-step="step3">
      <div className='btn-step'>
        <div onClick={()=>onPrevClick()} className="btn-prev">←上一步</div>
        <div onClick={()=>onSubmit()} className="btn-next">確認下單</div>
      </div>
    </div>
  )
}
  