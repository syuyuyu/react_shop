export default function FormStep2(){
  return(
    <>
      <h2>運送方式</h2>
      <form className='form-step2'>
        <div className="radio-group">
          <div className="radio-item">
            <input type="radio" name='transport' id='transport-normal'/>
            <div className="transport-content">
              <div className="transport-content-title">
                <div>標準運送</div>
                <div>免費</div>
              </div>
              <div>約3~7個工作天</div>
            </div>
          </div>
          <div className="radio-item">
            <input type="radio" name='transport' id='transport-DHL'/>
            <div className="transport-content">
              <div className="transport-content-title">
                <div>DHL貨運</div>
                <div>$500</div>
              </div>
              <div>48小時內送達</div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}