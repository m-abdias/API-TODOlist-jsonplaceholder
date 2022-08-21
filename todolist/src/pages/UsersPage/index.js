import React, { useState } from 'react'
import useRequestData from '../../hooks/useRequestData'

import { BASE_URL } from '../../constants/urls'
import UserCard from '../../components/UserCard'
import { useNavigate } from 'react-router-dom'
import { Content, Header } from './styled'
import { goToAssignments } from '../../routes/Coordinator'

const UsersPage = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  useRequestData(users, setUsers, `${BASE_URL}/users`)

  const onClickCard = id => {
    goToAssignments(navigate, id)
  }

  const user = users.map(user => {
    return (
      <UserCard
        key={user.id}
        username={user.username}
        onClick={() => onClickCard(user.id)}
      />
    )
  })
  console.log(user)

  return (
    <div>
      <Header>TODO List</Header>
      <Content>{user}</Content>
    </div>
  )
}

export default UsersPage
