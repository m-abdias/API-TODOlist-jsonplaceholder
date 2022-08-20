import React from 'react'

const UserCard = props => {
  return (
    <div>
      <div>
        <h1 name={props.name} />
        <p email={props.email} />
      </div>
    </div>
  )
}

export default UserCard
