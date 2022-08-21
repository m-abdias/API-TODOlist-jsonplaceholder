import React from 'react'
import { Name, CardUser } from './styled'

const UserCard = props => {
  return (
    <CardUser onClick={props.onClick}>
      <Name>{props.username}</Name>
      
    </CardUser>
  )
}

export default UserCard
