
import Container from '../Container'
import useAuth from '../../../hooks/useAuth'
import toast from 'react-hot-toast'

const Navbar = () => {
  const { user, logOut } = useAuth()

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("successfully logged out!")
      })
      .then(error => console.log(error))
  }
  return (
    <div className='fixed w-full bg-transparent z-10 shadow-sm py-5'>
        <Container>
          <div className='flex justify-between items-center'>
            <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
              <h1 className='text-2xl font-bold text-blue-400 hidden sm:hidden md:block'>Safe<span className='text-blue-800'>Space</span></h1>
            </div>
            <div className='flex gap-4 text-blue-800'>
              <a className='hover:text-blue-300' href="/">About Us</a>
              <a className='hover:text-blue-300' href="/">Blog</a>
              <a className='hover:text-blue-300' href="/dashboard">Get Free</a>
            </div>
            {
              user ? <div className="navbar-end w-fit flex justify-between items-center gap-3">
                <img className='rounded-full w-[30px] mr-1 md:mr-3' src={user?.photoURL} alt="alt" />
                <button onClick={handleLogOut} className='px-4 py-1 bg-blue-400 rounded-sm text-white'>Log out</button>
              </div>
              : ""
            }
          </div>
        </Container>
      </div>
  )
}

export default Navbar
