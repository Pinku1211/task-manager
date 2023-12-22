import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import AnoImg from '../../assets/images/placeholder.jpg'
import toast from 'react-hot-toast';

const SignUp = () => {

  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleSignUP = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)
    createUser(email, password)
      .then(async res => {
        console.log(res.data)
        await updateUserProfile(name, AnoImg)
        navigate('/')
        toast.success("successfully signed up!")
        // save user
        // const savedUser = await saveUser(loggedUser)
        // console.log(savedUser)
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-base-100 border-2 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold text-blue-400'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Task Manager</p>
        </div>
        <form
          onSubmit={handleSignUP}
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name'
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-blue-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
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
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-blue-200 text-gray-900'
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
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-blue-200 text-gray-900'
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
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-blue-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
