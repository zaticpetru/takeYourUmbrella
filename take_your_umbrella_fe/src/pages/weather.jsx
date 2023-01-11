import { Link, useNavigate } from "react-router-dom";
import OneDayWeather from "../components/one-day-weather";
import ShortWeatherInfo from "../components/short-weather-info";

export default function Weather() {
  const navigate = useNavigate();

  return (
    <>
      <div className="
      container width-90
      flex flex-column
      align-items-center
      gap-1">
        <button className="align-self-start padding-none" onClick={() => navigate(-1)}>
          <img className="margin-block-1" width="40px" height="40px" src="/images/back-button.png" alt="go back" />
        </button>
        <div className="
                grid gap-05
                padding-block-1
                padding-inline-1
                weather-card box-shadow
                border-radius-m width-100">
          <div className="plus">
            <img width="30px" height="30px" src="/images/plus.png" alt="add city" />
          </div>
          <div className="city">Timișoara</div>
          <Link to="/settings" className="menu">
            <img width="30px" height="30px" src="/images/menu-dots.png" alt="add city" />
          </Link>

          <div className="icon">
            <img width="100px" height="100px" src="/images/sunny.png" alt="add city" />
          </div>
          <div className="day">Thursday | Dec 15</div>
          <div className="temp font-size-xxl font-weight-6">4°</div>
          <div className="sep width-100"></div>
          <div className="wind flex align-items-center">
            <img width="30px" height="30px" src="/images/wind-symbol.png" alt="wind symbol" />
            <div className="width-90px">
              <p className="margin-none font-size-sm">3.7 km/h</p>
              <p className="margin-none font-size-sm">Wind</p>
            </div>
          </div>
          <div className="c-rain flex align-items-center">
            <img width="30px" height="30px" src="/images/c-rain-symbol.png" alt="wind symbol" />
            <div className="width-90px">
              <p className="margin-none font-size-sm">74%</p>
              <p className="margin-none font-size-sm">Chance of rain</p>
            </div>
          </div>
          <div className="press flex align-items-center">
            <img width="30px" height="30px" src="/images/pressure-symbol.png" alt="wind symbol" />
            <div className="width-90px">
              <p className="margin-none font-size-sm">1010 mbar</p>
              <p className="margin-none font-size-sm">Pressure</p>
            </div>
          </div>
          <div className="humid flex align-items-center">
            <img width="30px" height="30px" src="/images/humidity-symbol.png" alt="wind symbol" />
            <div className="width-90px">
              <p className="margin-none font-size-sm">83%</p>
              <p className="margin-none font-size-sm">Humidity</p>
            </div>
          </div>
        </div>

        <div className="flex flex-column gap-1 width-100
                    hourly-forecast box-shadow
                    padding-inline-1 padding-block-1">
          <div>Thursday | Dec 15</div>

          <div className="flex gap-05 overflow-x-auto">
            <ShortWeatherInfo time="Now" temperature="2°/3°" rainChance="74% rain"/>
            <ShortWeatherInfo time="12:00" temperature="-2°/0°" rainChance="60% rain"/>
            <ShortWeatherInfo time="13:00" temperature="-2°" rainChance="50% rain"/>
            <ShortWeatherInfo time="14:00" temperature="0°" rainChance="44% rain"/>
            <ShortWeatherInfo time="15:00" temperature="-1°/0°" rainChance="30% rain"/>
            <ShortWeatherInfo time="16:00" temperature="0°" rainChance="22% rain"/>
            <ShortWeatherInfo time="17:00" temperature="1°/2°" rainChance="21% rain"/>
            <ShortWeatherInfo time="18:00" temperature="-1°/0°" rainChance="25% rain"/>
            <ShortWeatherInfo time="19:00" temperature="-1°" rainChance="18% rain"/>
            <ShortWeatherInfo time="20:00" temperature="-2°/0°" rainChance="15% rain"/>
            <ShortWeatherInfo time="21:00" temperature="-2°/0°" rainChance="15% rain"/>
            <ShortWeatherInfo time="22:00" temperature="-2°/0°" rainChance="15% rain"/>
          </div>
        </div>

        <div className="flex flex-column gap-1 width-100
                    weekly-forecast box-shadow
                    padding-inline-1 padding-block-1">
          <div>Forecast for 7 days</div>
          <OneDayWeather day="Fri" rainChance="74% rain" temperature="-2°/0°" />
          <OneDayWeather day="Sat" rainChance="4% rain" temperature="1°/4°" />
          <OneDayWeather day="Sun" rainChance="23% rain" temperature="4°/2°" />
          <OneDayWeather day="Mon" rainChance="10% rain" temperature="-1°/-1°" />
          <OneDayWeather day="Tue" rainChance="5% rain" temperature="3°/4°" />
          <OneDayWeather day="Wed" rainChance="70% rain" temperature="5°/8°" />
          <OneDayWeather day="Thu" rainChance="66% rain" temperature="2°/4°" />

        </div>
      </div>
    </>
  )
}