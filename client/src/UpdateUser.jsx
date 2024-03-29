import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const UpdateUser = () => {
    const { id } = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/getUser/' + id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            })
            .catch(err => console.log(err))
    }, [])
    const Update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3000/updateUser/" + id, { name, email, age })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='flex h-screen bg-blue-500    justify-center items-center'>
            <div className='w-1/2  bg-white rounded p-3 '>
                <form className='' onSubmit={Update} >
                    {/* onSubmit={Submit} */}
                    <h1 className=' text-3xl mb-2 '>Update user</h1>
                    <div className="mb-2 ">
                        <label htmlFor="" className=''>Name</label>
                        <input type="text" placeholder='Enter Name' className="form-control w-full  border border-zinc-500  " value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Email' className="form-control border border-zinc-500  w-full" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Age' className="form-control  w-full border border-zinc-500" value={age}
                            onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button className='btn btn-success bg-green-700 rounded px-2 p-2 text-white'>Update</button>


                </form>
            </div>
        </div>
    )
}

export default UpdateUser