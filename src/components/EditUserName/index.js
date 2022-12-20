/**
 * Display the form for editing user names
 * @return { HTMLElement }
 */

 import './edit_user_name.css';
 import { useSelector, useDispatch } from "react-redux";
 import { useState } from 'react'
 import { getProfile } from "../../store/store.js";
 import editProfile from '../../utils/editProfile';
  
   function EditUserName() {
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
        <div>
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
     );
  }
  
  export default EditUserName;