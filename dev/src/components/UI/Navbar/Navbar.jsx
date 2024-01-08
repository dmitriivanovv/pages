import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../Button/MyButton'
import { AuthContext } from '../../../context/context'

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }  

  return (
    <div className="navbar">
      
      <div className="navbar__links">
        <Link style={{ paddingRight: '15px' }} to='/about' >
          О сайте
        </Link>
        <Link to='/posts'>
          Посты
        </Link>
      </div>
      
      <MyButton onClick={logout}>
        Выйти
      </MyButton>
    </div>
  )
}

export default Navbar