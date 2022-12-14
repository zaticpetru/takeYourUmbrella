import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()
  const navigate = useNavigate()
  console.error(error)

  return (
    <div className="flex flex-column align-items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="bb-button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  )
}