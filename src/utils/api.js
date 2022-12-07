/**
 * Fetch data from the Api
 * @param { String } url
 * @param { Object } body
 * @return { Object.< datas: Object, isLoading: Boolean, error: Boolean>}
 */

//  import { useState } from 'react'

//  export function Api(url, body) {
//     console.log("Url:" + url)
//     console.log(body)
//     const [datas, setData] = useState({})
//     const [isLoading, setLoading] = useState(true)
//     const [error, setError] = useState(false)
//     const requestOptions = {
//                         method: 'POST',
//                         headers: {
//                           'Accept': 'application/json',
//                           'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify(body)
//                       };
    
//      if (!url) return
//      async function fetchData() { 
        
//          try {
//              const response = await fetch(url, requestOptions) 
//              const data = await response.json()
//              console.log(data)
//              setData(data)
//          } catch(err) {
//              console.log(err)
//              setError(true)
//          } finally {
//              setLoading(false)
//          }
//      }
 
//      fetchData()

//   return {datas, isLoading, error}
 
//  }
 
 export async function Api(url, requestOptions) {
    console.log("Url:" + url)
     if (!url) return
     async function fetchData() { 
             const response = await fetch(url, requestOptions) 
             const data = await response.json()
             console.log(data)
             return data
     }
 
  return fetchData()

 }