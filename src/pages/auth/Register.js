
import React,{useState} from 'react';
import { auth } from '../../firebase';
import {toast} from 'react-toastify';


const Register = () => {
  const  [email,setEmail] = useState('');
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const config = {
      url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp:true,
    };
     await auth.sendSignInLinkToEmail(email,config);

    toast.success(
      `🤩 Hemos enviado un correo a ${email}. Has click en el link para completar tu registro.`
    );
    window.localStorage.setItem('emailForRegistration',email);

    setEmail("");

  };

  const RegisterForm = () => <form onSubmit={handleSubmit}>
    <input 
    placeholder="e-mail"
      type="email"
      className="form-control"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      autoFocus
    /> 
    <br/>
    <button type="submit" className="btn btn-raised">Enviar</button>
  </form>
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Registro</h4>
            {RegisterForm()}
           

          </div>

        </div>

      </div>
  
    );
  }
  
  export default Register;