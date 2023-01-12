import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors}, watch } = useForm()

  const submitRegisterForm = data => {
    console.log(data);
  } 
  console.log(errors)

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
        <h1 className="font-size-xl margin-none">Create an account</h1>
      </div>

      <form
        onSubmit={handleSubmit(submitRegisterForm)}
        className="flex flex-column align-items-center gap-2">
        <input type={"email"}
          id="email"
          name="email"
          placeholder="Enter Email / Username"
          className="line-input margin-block-1 width-100 font-size-l"
          {...register("email", {required: true})}
          />
        {errors.email && <span>Email is required</span>}
        
        <input type={"password"}
          id="password"
          name="password"
          placeholder="Create Password"
          className="line-input margin-block-1 width-100 font-size-l"
          {...register("password", {required: true})}
          />
        {errors.password && <span>Password is required</span>}
        
        <input type={"password"}
          id="confirm_password"
          name="confirm_password"
          placeholder="Confirm Password"
          className="line-input margin-block-1 width-100 font-size-l"
          {...register("confirm_password", {
            required: true,
            validate: (val) => {
              if(watch("password") !== val) {
                return "Your passwords do not match"
              }
            }
          })}
          />
        {errors.confirm_password && <span>{errors.confirm_password.message}</span>}

        <button className="bb-button" type="submit">SIGN UP</button>
      </form>
    </div>
  )
}