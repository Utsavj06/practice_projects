import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './userSlice'

const UserView = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  console.log(user)
  useEffect(()=>{
    dispatch(fetchUser())
  },[])

  return (
    <div>
      <h2>Users</h2>
      {user.loading && <div>Loading ...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div>:null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map(users => (
            <li key={users.id}>{users.name}</li>
          ))}
        </ul>
      ): null}
    </div>
  )
}

export default UserView