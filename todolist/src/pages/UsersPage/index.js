import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { goToAssignments } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import UserCard from '../../components/UserCard'

const UsersPage = () => {
  const navigate = useNavigate()
  const users = useRequestData([], `${BASE_URL}/users`)

  const user = users.map(user => {
    return <UserCard key={user.id} name={user.name} email={user.email} />
  })
  console.log(users)

  return (
    <div>
      {user}
      <button onClick={() => goToAssignments(navigate)}>Ver Tarefas</button>
    </div>
  )
}

export default UsersPage
