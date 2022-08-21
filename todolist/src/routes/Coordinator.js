export const goToUsers = navigate => {
  navigate('/')
}

export const goToAssignments = (navigate, id) => {
  navigate(`/tarefas/${id}`)
}
