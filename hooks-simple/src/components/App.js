import React, { useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList';

const App = () => {
  // [current value of state, setter function to update state] = useState('default value')
  const [resource, setResource] = useState('posts')

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')} >Posts</button>
        <button onClick={() => setResource('todos')} >To-dos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  )
}

export default App