import React from 'react'

import {FaLink} from 'react-icons/fa'

const About = () => {
  return <>
    <div className="mb-4 ml-8">
      <h1 className='text-2xl'>GitHub finder is an app for searching the GitHub users and looking into their profiles. 
      </h1>
      <h1 className='text-2xl ml-2 mt-2'>The user profile has a different information such as:</h1>  
      <h1 className='text-xl ml-2 mt-1'>
         Profile image, followers, followings, number of views, forks, latest repositories with a link to them etc..
      </h1>
      <h1 className='text-xl ml-2' style={{color:'rgb(159, 159, 192)'}}>
       <br /> The app was build using Tailwind CSS, React and GitHub API using Axios Promise based HTTP.
       <br />
       React Hooks: useEffect, useState, useContext, useReducer
      </h1>
      <a className='flex items-center gap-3 text-xl mt-3  ml-2'  href="https://github.com/DickYtman/GitHubFinder" target="_blank" rel="noreferrer"><FaLink /> GitHub Repo Link</a>
    </div>
  </>
  
}

export default About