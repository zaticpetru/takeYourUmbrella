import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const forgotPassword = () => {
    let text;
    let email = prompt("Please enter your email, we will send you the reset url:");
    if (email === null || email === "") {
      // promt canceled
    } else {
      // email
      // if was entered a value
      console.log(email)
    }
  }

  return (
    <div className="
                container width-90
                padding-inline-1
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

      <form className="flex flex-column align-items-center gap-2">
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
        {/* <button className="bb-button" type="submit">LOGIN</button> */}
        <Link to="/weather" className="bb-button" type="submit">LOGIN</Link>
      </form>
      <button className="link" onClick={() => forgotPassword()}>Forgot your password?</button>
      <Link className="link" to="/register">Create new account</Link>
    </div>
  )
}