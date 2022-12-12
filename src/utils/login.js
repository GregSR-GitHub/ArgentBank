/**
 * Fetech profil data from Api after signing in
 * @return { Object }
 */
 import { Api } from './api.js';

   async function login(loginInfos) { 
    console.log('Le lien a été cliqué.'); 
    console.log(loginInfos)
    const requestOptionLogin = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfos)
    }
    const loginData =  await Api('http://localhost:3001/api/v1/user/login', requestOptionLogin);
    if(loginData.status === 200){
      const requestOptionProfile = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer" + loginData.body.token,
        }
      }
      const profileData =  await Api('http://localhost:3001/api/v1/user/profile', requestOptionProfile);
      if(profileData.status === 200){
        return {profileData: profileData, token: loginData.body.token}
      }
    }
  }
  
  export default login;