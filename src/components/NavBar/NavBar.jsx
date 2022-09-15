import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className="App-header">
        React Kitties
        {user ?
          <nav>
            <Link to="/">Puppies</Link>
            <Link to="/add">Add Kitty</Link>
            <Link to="" onClick={handleLogout}>Log Out</Link>
            <Link to="/changePassword">Change Password</Link>
          </nav>
        :
          <nav>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        }
      </header>
    </>
  )
}

export default NavBar
