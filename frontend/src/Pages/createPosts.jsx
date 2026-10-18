import React from 'react'
import { redirect } from 'react-router-dom'

const createPosts = () => {
  return (
    <section className=''>
        <h1>Create post</h1>

        <form action="">
            <input type="file" name='image' accept='image/*' />
            <input type="text" placeholder='Enter caption...' name="caption" id="" required />
            <button type='submit' >Submit</button>

        </form>

    </section>
  )
}

export default createPosts
