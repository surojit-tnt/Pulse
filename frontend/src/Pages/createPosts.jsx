import React from 'react'
import { redirect } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const createPosts = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const formData= new FormData(e.target)
    axios.post("http://localhost:3000/create-post",formData).then(
      (res)=>{
        navigate('/feed')
      }
    ).catch((err)=>{
      console.log(err)
      alert("error creating post")
    })

  }

  return (
    <section className='h-screen w-full flex justify-center items-center  bg-zinc-500 '>
        <div className="bg-gray-100 border-2 rounded-2xl border-zinc-600 h-[35vh] w-[70%] flex flex-col p-4 gap-7 items-center justify-center ">
          <h1 className='mt-0 font-semibold text-2xl'>Create post</h1>

        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-2'  >
            <input type="file" name='image' accept='image/*' className='border-1 bg-zinc-300 pl-3 hover:cursor-pointer' />
            <input className='border-zinc-500 border-1 p-2' type="text" placeholder='Enter caption...' name="caption" id="" required />
            <button type='submit' className='p-2 rounded-md hover:cursor-pointer bg-black text-gray-100' >Submit</button>

        </form>
        </div>

    </section>
  )
}

export default createPosts
