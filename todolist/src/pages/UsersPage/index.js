import React from 'react'
import useRequestData from '../../hooks/useRequestData'

import { BASE_URL } from '../../constants/urls'
import UserCard from '../../components/UserCard'
import { Content, Header } from './styled'

const UsersPage = () => {
  const users = useRequestData([], `${BASE_URL}/users`)

  const user = users.map(user => {
    return <UserCard key={user.id} name={user.name} />
  })

  return (
    <div>
      <Header>TODO List</Header>
      <Content>{user}</Content>
    </div>
  )
}

export default UsersPage
