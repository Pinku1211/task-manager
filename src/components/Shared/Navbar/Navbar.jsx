import { Link } from 'react-router-dom'
import Container from '../Container'
import logoImg from '../../../assets/images/logo.png'
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
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex justify-between items-center'>
            <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
              {/* Logo */}
              <Link to='/'>
                <img
                  className='hidden md:block'
                  src={logoImg}
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
            {
              user && <div className="navbar-end w-fit flex justify-between items-center gap-3">
                <img className='rounded-full w-[30px] mr-1 md:mr-3' src={user.photoURL} alt="" />
                <button onClick={handleLogOut} className='px-2 py-1 md:px-3 md:py-1 bg-rose-500 text-white rounded-sm'>Log out</button>
              </div>
            }
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
