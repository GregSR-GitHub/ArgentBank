/**
 * Display the profil page
 * @return { HTMLElement }
 */

 import './login.css';
//  import useLogin from '../../utils/login.js';
 import { Api } from '../../utils/api.js';
 import { useState } from 'react'
 import { Link, Navigate } from 'react-router-dom'
 import { useSelector, useDispatch } from "react-redux";
 import { newToken } from "../../store/store.js";
  
   function SignIn() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const loginInfos = {email: userName, password: password };
    const [loginError, setLoginError] = useState(false)
    const dispatch = useDispatch();
    const myToken = useSelector((state) => state.token);

    // console.log(token);

    async function useHandleSubmit(e) {   
      e.preventDefault();
      console.log('Le lien a été cliqué.'); 
      console.log(loginInfos)
      const loginData =  await Api('http://localhost:3001/api/v1/user/login', loginInfos);
      if(loginData.status === 200){
        dispatch(newToken(loginData.body.token));
        console.log(myToken)
        setLoginError(false);
      }else{
        setLoginError(true);
      }
  
    }

     return (
     <main className="main bg-dark">
     <section className="sign-in-content">
       <i className="fa fa-user-circle sign-in-icon"></i>
       <h1>Sign In</h1>
       {myToken && <Navigate replace to="/user" />}
       <form onSubmit={useHandleSubmit}>
         <div className="input-wrapper">
           <label htmlFor="username">Username</label>
           <input type="email" id="username" placeholder='user@email.com'  minLength="3" required onChange={(e) => setUserName(e.target.value)}/>
           <span></span>
         </div>
         <div className="input-wrapper">
           <label htmlFor="password">Password</label>
           <input type="password" id="password" placeholder='**********'  minLength="6"  required onChange={(e) => setPassword(e.target.value)}/>
           {loginError&&<span>Mot de passe ou identifiant incorect</span>}
         </div>
         <div className="input-remember">
           <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">
            Remember me
             </label>
         </div>
         <Link to="/user" className="sign-in-button">Sign In</Link>
        <button className="sign-in-button" >Sign In</button>
       </form>
     </section>
   </main>
     );
  }
  
  export default SignIn;