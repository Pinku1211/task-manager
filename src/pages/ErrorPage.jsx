
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Oops! Something wrong...</h1>
    </div>
  )
}

export default ErrorPage
