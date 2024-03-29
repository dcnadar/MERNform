import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/deleteUser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))

    }

    return (
        <div className=' h-screen bg-blue-600 flex justify-center items-center'>
            {/* // <div className=' bg-blue-600 justify-center items-center flex h-screen'> */}
            <div className=' w-1/2 bg-white p-3 rounded '>
                <button className='mb-1 pt-1 pb-1 pl-2 pr-2 bg-green-600 border border-none  rounded'>
                    <Link to="/create" className='btn btn-success text-white '>Add +</Link>
                </button>
                <table className=' divide-y divide-pink-500 w-full text-left'>
                    <thead className=''>
                        <tr className='uppercase ' >
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-purple-600'>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td className='flex space-x-4'>
                                        {/* {`/update/${user_id}`} */}
                                        <Link to={`/update/${user._id}`} className=' border-black    pl-1 pr-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600 '>Update</Link>
                                        <button className=' border-black  pl-1 pr-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700'
                                            onClick={(e) => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Users