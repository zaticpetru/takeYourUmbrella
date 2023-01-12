export default function OneDayWeather(props) {
  return (
    <div className="flex width-100 justify-content-space-between align-items-center">
      <div>{props.day}</div>
      <div className="font-size-sm flex align-items-center gap-05">
        <img width="20px" height="20px" src="/images/cloudy-symbol.png" alt="weather"/>
        {props.rainChance}
      </div>
      <div>{props.temperature}</div>
    </div>
  )
}