
import React,{useState} from 'react';
import { auth } from '../../firebase';
import {toast} from 'react-toastify';


const RegisterComplete = ({history}) => {
  const  [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useState(() => {
    setEmail(window.localStorage.getItem('emailForRegistration'));
  }, []);
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!email || !password){
        toast.error("Email y contraseña son requeridos.");
        return;
    }
    if(password.length < 6){
        toast.error("La contraseña debe tener minimo 6 caracteres.");
        return;
    }
    try{
        const result = await auth.signInWithEmailLink(
            email,
            window.location.href
        );

        if(result.user.emailVerified){

            window.localStorage.removeItem('emailForRegistration');

            let user = auth.currentUser;
            await user.updatePassword(password);
            const idTokenResult = await user.getIdTokenResult();

            history.push('/');

        }

    } catch(error){

        console.log(error);
        toast.error(error.message);

    }


  };

  const completeRegistrationForm = () => <form onSubmit={handleSubmit}>
    <input 
        placeholder="e-mail"
        type="email"
        className="form-control"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        disabled
    /> 
    <br/>
    <input 
        placeholder="Contraseña"
        type="password"
        className="form-control"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        autoFocus
    /> 
    <br/>
    <button type="submit" className="btn btn-raised">Enviar</button>
  </form>
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Completar Registro</h4>
            {completeRegistrationForm()}

          </div>

        </div>

      </div>
  
    );
  }
  
  export default RegisterComplete;