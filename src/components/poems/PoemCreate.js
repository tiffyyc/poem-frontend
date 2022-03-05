import React, { useState } from 'react'
import { createPoem } from '../../api/poems'
import { Navigate } from 'react-router-dom'

const PoemCreate = () => {
  const [poem, setPoem] = useState({})
  const [created, setCreated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    createPoem(poem)
      .then(() => {
        setCreated(true)
      })
  }

  const handleChange = (event) => {
    console.log(event.target.name)
    console.log(poem)
    setPoem({ ...poem, [event.target.name]: event.target.value })
  }

  if (created) {
    return <Navigate to='/poem-create' />
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>Create Poem</button>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={poem.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Writer:
          <input
            type='text'
            name='writer'
            value={poem.writer}
            onChange={handleChange}
          />
        </label>
    
        <label>
          Description:
          <input
            type='textarea'
            name='description'
            value={poem.description}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  )
}

export default PoemCreate
