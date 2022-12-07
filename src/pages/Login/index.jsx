/**
 * Display the profil page
 * @return { HTMLElement }
 */

 import './login.css';
 import login from '../../utils/login.js';
 import { useState } from 'react'
 import { Navigate } from 'react-router-dom'
 import { useSelector, useDispatch } from "react-redux";
 import { getProfile } from "../../store/store.js";
  
   function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const loginInfos = {email: userName, password: password };
    const [loginError, setLoginError] = useState(false)
    const dispatch = useDispatch();
    const myProfile = useSelector((state) => state.profile);

    async function useHandleSubmit(e) {   
      e.preventDefault();
      const profileData = await login(loginInfos);
      if(profileData&&(profileData.status === 200)){
            console.log(profileData)
            setLoginError(false);
            dispatch(getProfile(profileData.body));
          }else{
            setLoginError(true);
          }
      }

     return (
     <main className="main bg-dark">
     <section className="sign-in-content">
       <i className="fa fa-user-circle sign-in-icon"></i>
       <h1>Sign In</h1>
       {myProfile && <Navigate replace to="/profile" />}
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
        <button className="sign-in-button" >Sign In</button>
       </form>
     </section>
   </main>
     );
  }
  
  export default Login;