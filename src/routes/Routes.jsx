import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import DashBoard from '../pages/DashBoard/DashBoard'
import Private from '../pages/Private/Private'
import { getSingleTask } from '../hooks/auth'
import Update from '../pages/DashBoard/Update'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/dashboard', element: <Private><DashBoard /></Private> },
  { 
    path: '/dashboard/update/:id', 
    element: <Update /> ,
    loader: ({params}) => getSingleTask(params.id)
  },
])
