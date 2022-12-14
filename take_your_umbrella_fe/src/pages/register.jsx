import { Link, useNavigate } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()

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
        <h1 className="font-size-xl margin-none">Create an account</h1>
      </div>

      <form className="flex flex-column align-items-center gap-2">
        <input type={"email"}
          id="email"
          name="email"
          placeholder="Create Email / Username"
          className="line-input margin-block-1 width-100 font-size-l"
          />
        <input type={"password"}
          id="password1"
          name="password1"
          placeholder="Create Password"
          className="line-input margin-block-1 width-100 font-size-l"
          />
        <input type={"password"}
          id="password2"
          name="password2"
          placeholder="Confirm Password"
          className="line-input margin-block-1 width-100 font-size-l"
          />
        <button className="bb-button" type="submit">SIGN UP</button>
      </form>
    </div>
  )
}