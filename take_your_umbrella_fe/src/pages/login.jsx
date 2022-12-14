import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="
                container
                flex flex-column
                align-items-center
                gap-2
                min-height-100vh">
      <button className="align-self-start padding-none" onClick={() => navigate(-1)}>
        <img className="margin-block-1" width="40px" height="40px" src="/images/back-button.png" alt="go back"/>
      </button>

      <div className="width-100 margin-block-1">
        <h1 className="font-size-xl margin-none">Welcome Back!</h1>
        <p className="margin-none">Enter Your Username & Password</p>
      </div>

      <input type={"email"}
        id="email"
        name="email"
        placeholder="Username"
        className="line-input margin-block-1 width-100 font-size-l"
        />
      <input type={"password"}
        id="password"
        name="password"
        placeholder="Password"
        className="line-input margin-block-1 width-100 font-size-l"
        />
      <button class="bb-button">LOGIN</button>
      <Link className="link" to="/">Forgot your password?</Link>
      <Link className="link" to="/">Create new account</Link>
    </div>
  )
}