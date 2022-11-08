export default function ControlButton(){
  return(
    <>
    <div className="btn-step-1">
      <div className='btn-step'>
        <div className="btn-prev visiblility">←上一步</div>
        <div className="btn-next">下一步→</div>
      </div>
    </div>

    <div className="btn-step-2 dis-none">
      <div className='btn-step'>
        <div className="btn-prev">←上一步</div>
        <div className="btn-next">下一步→</div>
      </div>
    </div>

    <div className="btn-step-3 dis-none">
      <div className='btn-step'>
        <div className="btn-prev">←上一步</div>
        <div className="btn-next">確認下單</div>
      </div>
    </div>
    </>

  )
}