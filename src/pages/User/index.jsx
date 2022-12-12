/**
 * Display the profil page
 * @return { HTMLElement }
 */

 import './user.css';
 import { useSelector, useDispatch } from "react-redux";
 import { useState } from 'react'
 import { Navigate } from 'react-router-dom'
 import { getProfile } from "../../store/store.js";
 import editProfile from '../../utils/editProfile';
  
   function User() {
    const profile = useSelector((state) => state.profile);
    const [isEditing, setIsEditing] = useState(false)
    const [userFirstName, setUserFirstName] = useState(profile.firstName);
    const [userLastName, setUserLastName] = useState(profile.lastName);
    //if input is empty, don't change name
    !userFirstName&&setUserFirstName(profile.firstName);
    !userLastName&&setUserLastName(profile.lastName);
    const dispatch = useDispatch();
    
    const myToken = useSelector((state) => state.token);

    async function useHandleSubmit(e) { 
      e.preventDefault();
      const newUserInfos = {firstName: userFirstName, lastName: userLastName };
      const newProfileData = await editProfile(newUserInfos, myToken);
      if(newProfileData&&(newProfileData.status === 200)){
        console.log(newProfileData.body);
        dispatch(getProfile(newProfileData.body));
        setIsEditing(false)
       }
      
      }

     return (
        <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{profile.firstName} {profile.lastName}!</h1>
          {!profile && <Navigate replace to="/" />}
          {!isEditing?
          (<button className="edit-button" onClick={(e) => setIsEditing(true)}>Edit Name</button>):
          (<form>
            <div className="edit-input-wrapper">
              <input type="email" id="username" placeholder={profile.firstName}  minLength="3" required onChange={(e) => setUserFirstName(e.target.value)}/>
              <input type="email" id="username" placeholder={profile.lastName}  minLength="3" required onChange={(e) => setUserLastName(e.target.value)}/>
            </div>
            <div className="edit-button-wrapper">
              <button className="editing-buttons" onClick={useHandleSubmit}>Save</button>
              <button className="editing-buttons"  onClick={(e) => setIsEditing(false)}>Cancel</button>
            </div>
           </form>)}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
     );
  }
  
  export default User;