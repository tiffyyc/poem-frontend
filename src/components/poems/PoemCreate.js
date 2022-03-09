import React, { useState } from 'react'
import { createPoem } from '../../api/poems'
import { Navigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const PoemCreate = ({user}) => {
  const [poem, setPoem] = useState({})
  const [created, setCreated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    createPoem(poem, user)
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
    return <Navigate to='/' />
  }

  return (
    <div style={{ padding: '4rem'}}>
      <form onSubmit={handleSubmit}>
       
        <label style={{ marginBottom: '1rem' }}>
          Title:
          <input
            type='text'
            name='title'
            value={poem.title}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label style={{ marginBottom: '1rem' }}>
          Writer:
          <input
            type='text'
            name='writer'
            value={poem.writer}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label style={{ marginBottom: '1rem' }}>
          Description:
          <input
            type='textarea'
            name='description'
            value={poem.description}
            onChange={handleChange}
          />
        </label>
        <br/>
        <Button variant="dark" type="submit" value="Submit">Create Poem</Button>
         {/* <button>Create Poem</button> */}
      </form>
    </div>
  )
}

export default PoemCreate
