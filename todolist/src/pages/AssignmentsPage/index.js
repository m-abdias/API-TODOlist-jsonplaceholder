import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined'
import { goToUsers } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

import { BASE_URL } from '../../constants/urls'

import {
  Header,
  CardAssignments,
  List,
  ImputAssignments,
  ButtonDelete,
  FormNewAssignment,
  Content,
  InputNewAssignment,
  ButtonAddNewAssignment
} from './styled'

const UsersPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [items, setItems] = useState([])
  const [todoText, setTodoText] = useState('')

  useRequestData(items, setItems, `${BASE_URL}/users/${params.id}/todos`)

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  const onChangeText = event => {
    setTodoText(event.target.value)
  }

  const onChangeTodoText = event => {
    event.preventDefault()

    if (!todoText) {
      alert('Digite uma tarefa')
    } else {
      const newItem = {
        userId: params.id,
        id: items.length + 1,
        title: todoText,
        completed: false
      }
      setItems([newItem, ...items])
      setTodoText('')
    }
  }

  const assignment = items.map(assignment => {
    return (
      <article key={assignment.id}>
        <CardAssignments>
          <ImputAssignments>
            <input type="checkbox" defaultChecked={assignment.completed} />
            <List>{assignment.title}</List>
          </ImputAssignments>
          <ButtonDelete onClick={() => deleteItem(assignment.id)}>
            <DeleteOutlineOutlinedIcon />
          </ButtonDelete>
        </CardAssignments>
      </article>
    )
  })

  return (
    <Content>
      <Header>
        <ArrowBackOutlinedIcon onClick={() => goToUsers(navigate)} />
        <>TODO List</>
      </Header>

      <FormNewAssignment onSubmit={onChangeTodoText}>
        <InputNewAssignment
          type="text"
          name="text"
          placeholder="Nova Tarefa"
          autoComplete="off"
          value={todoText}
          onChange={onChangeText}
        />
        <ButtonAddNewAssignment>
          <PlaylistAddOutlinedIcon />
        </ButtonAddNewAssignment>
      </FormNewAssignment>
      {assignment}
    </Content>
  )
}

export default UsersPage
