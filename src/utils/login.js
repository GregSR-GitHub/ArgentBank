/**
 * Display the profil page
 * @return { Function }
 */
 import { Api } from './api.js';

   async function useLogin({email, password}) { 
        console.log('Le lien a été cliqué.'); 
        console.log({email, password})
        const  apiData =  Api('http://localhost:3001/api/v1/user/login', {email, password});
        console.log(apiData)
        
  }
  
  export default useLogin;