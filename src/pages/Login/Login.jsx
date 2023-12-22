import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'
import { useState } from 'react'

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password');
    signIn(email, password)
      .then(result => {
        toast.success('logged in successfully')
        navigate(location?.state ? location.state : "/")
      })
      .catch(error => {
        console.error(error);
        toast.error(`${error}`)
      })
  }

  const handleGoogleSignIng = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        toast.success('logged in successfully')
        navigate(location?.state ? location.state : "/")

      })
      .catch(error => {
        console.log(error)
        
      })
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-base-100 border-2 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold text-blue-400'>Log In</h1>
        </div>
        <form
          onSubmit={handleLogin}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email'
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-blue-100 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-blue-100 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-blue-400 w-full rounded-md py-3 text-white'
            >
              Continue
            </button>
          </div>
        </form>
        <div
        onClick={handleGoogleSignIng}
        className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-blue-500 text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
