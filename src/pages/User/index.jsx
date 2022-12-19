/**
 * Display the profil page
 * @return { HTMLElement }
 */

 import './user.css';
 import Account from '../../components/Account';
 import EditUseName from '../../components/EditUserName';
 import { useSelector } from "react-redux";
 import { Navigate } from 'react-router-dom'
  
   function User() {
    const profile = useSelector((state) => state.profile);

     return (
        <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{profile.firstName} {profile.lastName}!</h1>
          {!profile && <Navigate replace to="/" />}
          <EditUseName />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account title="Argent Bank Checking (x8349)" amount="$2,082.79"/>
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42"/>
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30"/>
      </main>
     );
  }
  
  export default User;