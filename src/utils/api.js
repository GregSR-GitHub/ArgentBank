/**
 * Fetch data from the Api
 * @param { String } url
 * @param { String } requestOptions
 * @return { Object }
 */

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