import React, {useState} from 'react'
import Aprovado from '../assets/img/aprovado.png';
import Proibido from '../assets/img/proibido.png';

export default function Login(props) {
  let logged = {
    text: 'Seja bem vindo!',
    img : Aprovado,
    textButton: 'Logout',
    logged: true
  }

  let unlogged = {
    text: 'Por favor, faça o login.',
    img : Proibido,
    textButton: 'Login',
    logged: false
  }

  let initialState = {};

  if(props.logged === true){
    initialState = {...logged};
  }else{
    initialState = {...unlogged};
  }

  const [login, setLogin] = useState(initialState);

  const handleLogin = (event)=>{
    if(login.logged === false){
      setLogin(logged);
    }else{
      setLogin(unlogged);
    }
  }

  return (
    <div>
      <div>
        <h1>{login.text}</h1>
        <img src={login.img} alt=""/>
      </div>
      <div>
        <button onClick={handleLogin}>{login.textButton}</button>
      </div>      
    </div>
  )
}
