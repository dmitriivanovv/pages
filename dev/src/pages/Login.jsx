import React, { useContext } from 'react'
import MyInput from '../components/UI/Input/MyInput'
import MyButton from '../components/UI/Button/MyButton'
import { AuthContext } from '../context/context'

function Login() {
  const {iaAuth, setIsAuth} = useContext(AuthContext)
  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth','true');
    console.log(localStorage.getItem('auth'));
  }
  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder='Введите логин'/>
        <MyInput type="password" placeholder='Введите пароль'/>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login