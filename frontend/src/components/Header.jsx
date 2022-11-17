import { FaUser } from 'react-icons/fa'
import { GoSignIn, GoSignOut } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>MyBucketList</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>Welcome, <span className='name'>{user && user.name}</span></li>
            <li>
              <button className='btn' onClick={onLogout}>
                <GoSignOut /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <GoSignIn /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
