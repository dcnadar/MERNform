import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    const Submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/createUser", { name, email, age })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='flex h-screen bg-blue-500    justify-center items-center'>
            <div className='w-1/2  bg-white rounded p-3 '>
                <form onSubmit={Submit}>
                    <h1 className=' text-3xl mb-2 '>Add user</h1>
                    <div className="mb-2 ">
                        <label htmlFor="" className=''>Name</label>
                        <input type="text" placeholder='Enter Name' className="form-control w-full  border border-zinc-500  "
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Email' className="form-control border border-zinc-500  w-full"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Age' className="form-control  w-full border border-zinc-500"
                            onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button className='btn btn-success bg-green-700 rounded px-2 p-2 text-white'>Submit</button>


                </form>
            </div>
        </div>
    )
}

export default CreateUser