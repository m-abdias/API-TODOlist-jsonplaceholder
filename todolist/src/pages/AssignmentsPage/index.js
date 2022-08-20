import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'

import { BASE_URL } from '../../constants/urls'

import { Header } from './styled'

const UsersPage = () => {
  const { id } = useParams()
  const [items, setItems] = useState([])

  const assignments = useRequestData([], `${BASE_URL}/  todos`)

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  const assignment = assignments.map(todo => {
    return (
      <article key={todo.id} state={todo.completed}>
        <ul>
          <input type="checkbox" checked={todo.completed} />
          <li>{todo.title}</li>
          <button onClick={() => deleteItem(id)}></button>
        </ul>
      </article>
    )
  })

  return (
    <div>
      <Header>TODO List</Header>
      {assignment}
    </div>
  )
}

export default UsersPage
