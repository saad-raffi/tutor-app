import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import style from '../Login/Login.css'

const GoogleSign = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (user){
          navigate('/home')
      }
    return (
        <div>
             <button className='form-submit' onClick={()=> signInWithGoogle()}>Google Sign In</button>
        </div>
    );
};

export default GoogleSign;