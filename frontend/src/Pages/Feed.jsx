import React from 'react'
import { useState,useEffect } from 'react'
import axios from"axios"
import { data } from 'react-router-dom'


const Feed = () => {
const [posts, setPosts]= useState([
    {
        _id:'1',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBvXvo9zsJGCXjhf9S7fouD0KvofjH1i_2uZxK1eT5g&s",
        caption: "hott"
    }
])

useEffect(()=>{
    axios.get("http://localhost:3000/posts").then(
        (res)=>{
            // console.log(res.data)
            
            setPosts(res.data.post)
        }
    )
})

  return (
    <section>
        {
            posts.length>0 ?(
                posts.map((post)=>(
                    <div key={post._id}>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                )
            )
        )                   : (
            <h1>no posts available</h1>
        )
        }


    </section>
  )
}

export default Feed
