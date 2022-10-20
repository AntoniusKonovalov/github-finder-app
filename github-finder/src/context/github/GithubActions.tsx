const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

 // Get search results
 export const searchUsers = async(text:string) => {
  const params = new URLSearchParams({
    q: text
  })
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    // headers: {
    //   Authorization: `token ${GITHUB_TOKEN}`
    // }
  })
  const {items} = await response.json()
  
  return items
}

  // Get single user
   export const getUser = async(login:string) => {
      const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        // headers: {
        //   Authorization: `token ${GITHUB_TOKEN}`
        // }
      })

      if(response.status === 404) {
        const win: Window = window;
        win.location = ('/notfound')
      } else {
        const data = await response.json() 
        return data
      }
      // dispatch({
      //   type: 'GET_USER', 
      //   payload: data,
      // })
    }

      //Get user repos
  export const getUserRepos = async(login:string) => {

    // @ts-ignore
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    }) 

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`
      // }
    })
    const data = await response.json()
    return data
    // dispatch({
    //   type: 'GET_REPOS', 
    //   payload: data,
    // })
  }
