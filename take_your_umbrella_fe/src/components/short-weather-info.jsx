export default function ShortWeatherInfo(props) {
  return (
      <div className="flex flex-column align-items-center text-align-center min-width-70px font-size-sm">
        <p>{props.time}</p>
        <img width="30px" height="30px" src="/images/cloudy-symbol.png" alt="wind symbol" />
        <p>{props.temperature}</p>
        <p>{props.rainChance}</p>
      </div>
  )
}