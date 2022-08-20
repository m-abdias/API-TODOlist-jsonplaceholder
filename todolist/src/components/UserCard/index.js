import React from 'react'
import { Name, CardUser, Email, Button } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToAssignments } from '../../routes/Coordinator'

const UserCard = props => {
  const navigate = useNavigate()

  const onClickCard = id => {
    goToAssignments(navigate, id)
  }

  return (
    <CardUser>
      <Name>{props.name}</Name>
      <Button onClick={() => onClickCard(props.id)}>Ver Tarefas</Button>
    </CardUser>
  )
}

export default UserCard
