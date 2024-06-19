export const createAuthHeader = (method, accessToken, data) => {
    if (!method) return console.log('No http method found')
  
    let options = {
      method: method,
      credentials: 'include',
      headers: {
        'Cache-Control': 'no-store'
      }
    }
    
    if(accessToken) {
      if((data && method == 'POST') || (data && method == 'PUT') || (data && method == 'PATCH') || (data && method == 'DELETE')){
        options.headers = {
          "Content-Type": "application/json",
          "Authorization":  `Bearer ${accessToken}`,
          'Cache-Control': 'no-store'
        }
      }
      else options.headers = {
        "Authorization":  `Bearer ${accessToken}`, 'Cache-Control': 'no-store'}
    }else if(!accessToken && data ){
      options.headers = {
        "Content-Type": "application/json", 
        'Cache-Control': 'no-store',
      }
    }
    
    if(data) {
      options.body = JSON.stringify(data)
    }
  
    return options
  }