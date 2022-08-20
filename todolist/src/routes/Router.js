import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UsersPage from '../pages/UsersPage'
import AssignmentsPage from '../pages/AssignmentsPage'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<UsersPage />} />
        <Route path={'/tarefas'} element={<AssignmentsPage />} />
        <Route path={'*'} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
