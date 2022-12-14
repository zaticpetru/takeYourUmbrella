import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="
            flex flex-column
            align-items-center
            justify-content-f-end
            min-height-100vh">

      <img id="logo-image" src="/images/umbrella.png" alt="umbrella logo" />
      <h1 id="title">Take your umbrella</h1>
      <Link to={"/login"} class="bb-button">START</Link>

    </div>
  )
}