export default function FormStep3(){
  return(
    <>
      <h2>付款資訊</h2>
      <form className='form-step3'>
        <div className="card">
          <div className="card-item card-name">
            <h5>持卡人姓名</h5>
            <input type="text" placeholder="John Doe" name='card-name' className="card-input" />
          </div>
          <div className="card-item card-num">
            <h5>卡號</h5>
            <input type="text" placeholder="1111 2222 3333 4444" name='card-num' className="card-input" />
          </div>
          <div className="card-info">
            <div className="card-item card-info-term">
              <h5>有效期限</h5>
              <input type="text" placeholder="MM/YY" name='card-term' className="card-input"/>
            </div>
            <div className="card-item card-info-cvc">
              <h5>CVC/CCV</h5>
              <input type="text" placeholder="123" name='card-cvc' className="card-input" />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}