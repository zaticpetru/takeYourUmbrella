import { useNavigate } from "react-router-dom";

export default function Weather() {
  const navigate = useNavigate();

  return (
    <div className="
    container width-100
    padding-inline-1
    flex flex-column
    align-items-center
    gap-1
    min-height-100vh">
      <button className="align-self-start padding-none" onClick={() => navigate(-1)}>
        <img className="margin-block-1" width="40px" height="40px" src="/images/back-button.png" alt="go back" />
      </button>
      <div className="
              grid gap-1
              padding-block-1
              padding-inline-1
              weather-card box-shadow
              border-radius-m width-100">
            <div className="plus">
              <img width="30px" height="30px" src="/images/plus.png" alt="add city"/>
            </div>
            <div className="city">Timișoara</div>
            <div className="menu">
              <img width="30px" height="30px" src="/images/menu-dots.png" alt="add city"/>
            </div>

            <div className="icon">
              <img width="100px" height="100px" src="/images/sunny.png" alt="add city"/>
            </div>
            <div className="day">Thursday | Dec 15</div>
            <div className="temp font-size-xxl font-weight-6">4°</div>
            <div className="sep width-100"></div>
            <div className="wind flex align-items-center">
              <img width="30px" height="30px" src="/images/wind-symbol.png" alt="wind symbol"/>
              <div className="width-90px">
                <p className="margin-none font-size-sm">3.7 km/h</p>
                <p className="margin-none font-size-sm">Wind</p>
              </div>
            </div>
            <div className="c-rain flex align-items-center">
              <img width="30px" height="30px" src="/images/c-rain-symbol.png" alt="wind symbol"/>
              <div className="width-90px">
                <p className="margin-none font-size-sm">74%</p>
                <p className="margin-none font-size-sm">Chance of rain</p>
              </div>
            </div>
            <div className="press flex align-items-center">
              <img width="30px" height="30px" src="/images/pressure-symbol.png" alt="wind symbol"/>
              <div className="width-90px">
                <p className="margin-none font-size-sm">1010 mbar</p>
                <p className="margin-none font-size-sm">Pressure</p>
              </div>
            </div>
            <div className="humid flex align-items-center">
              <img width="30px" height="30px" src="/images/humidity-symbol.png" alt="wind symbol"/>
              <div className="width-90px">
                <p className="margin-none font-size-sm">83%</p>
                <p className="margin-none font-size-sm">Humidity</p>
              </div>
            </div>
      </div>
    </div>
  )
}