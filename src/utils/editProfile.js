/**
 * Fetech profil data from Api after signing in
 * @return { Object }
 */
 import { Api } from './api.js';

   async function editProfile(userName,token) { 

    if(token){
        console.log(userName)
        const requestOptionProfile = {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer" + token,
            },
            body: JSON.stringify(userName)
          }
        const newProfileData =  await Api('http://localhost:3001/api/v1/user/profile', requestOptionProfile);
        if(newProfileData.status === 200){
            return newProfileData
          }
    }
    
}
  
export default editProfile;