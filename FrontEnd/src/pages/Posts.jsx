import React, { useState,useEffect } from 'react'
import axios from 'axios'


function Posts() {

  const[posts,setPosts]=useState([])

  useEffect(()=>{
    async function getPost() {
      const resp =await axios.get('http://localhost:3000/post')
      setPosts(resp.data.posts)
    }
    getPost()
  },[])
  return (
    <div className='posts-section'>
      {posts.length>0?(
        posts.map((posts)=>(
          <div key={posts._id} className='post-card'>
            <img src={posts.image} alt={posts.image} />
            <h3>{posts.caption}</h3>
          </div>
        ))
      ):(
        <h1>No Post Available</h1>
      )}
    </div>
  )
}

export default Posts