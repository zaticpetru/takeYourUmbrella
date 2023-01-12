import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm()

  // console.log(errors)
  const submitLoginForm = data => {
    console.log(data);
  } 

  const forgotPassword = () => {
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

      <form
        onSubmit={handleSubmit(submitLoginForm)}
        className="flex flex-column align-items-center gap-2">
        <input type={"email"}
          id="email"
          name="email"
          placeholder="Username"
          className="line-input margin-block-1 width-100 font-size-l"
          {...register("email", {required: true})}
          />
        {errors.email && <span>Email is required</span>}
        <input type={"password"}
          id="password"
          name="password"
          placeholder="Password"
          className="line-input margin-block-1 width-100 font-size-l"
          {...register("password", {required: true})}
          />
        {errors.password && <span>Password is required</span>}
        <input
          type={"submit"}
          value="LOGIN"
          className="bb-button"
          />
      </form>
      <button className="link" onClick={() => forgotPassword()}>Forgot your password?</button>
      <Link className="link" to="/register">Create new account</Link>
    </div>
  )
}