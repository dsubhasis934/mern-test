import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
function Users() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3006/show")
            .then(res =>
                setUsers(res.data.data))
    }, [])
    const forDelete = (email) => {
        console.log({ email })
        axios.delete('http://localhost:3006/delete', { email })
            .then(resp => {
                console.log(resp);
                return
                const deletedlist = users.filter((item) => item.email !== email)
                setUsers(deletedlist)
            }
            )
    }
    return (
        <div>
            <h1>here is your users data</h1>
            {users && users.map((elem, id) => {
                // console.log(elem)
                return (
                    <div key={id}>
                        <h1>{elem.email}</h1>
                        <button onClick={() => forDelete(elem.email)}>delete</button>
                    </div>
                )

            })}
            <button onClick={() => navigate('/update')} style={{ backgroundColor: "red" }}>update</button>
        </div>
    )
}

export default Users
