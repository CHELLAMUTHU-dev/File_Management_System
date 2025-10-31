import {logout} from '../utils/auth';
import {useNavigate} from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

  return (
    <nav>
      <h3>File Manager</h3>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  )
}

