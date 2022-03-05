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
      <img src={movie.image} />
      <form onSubmit={handleSubmit}>
        <button>Create Movie</button>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={movie.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type='text'
            name='image'
            value={movie.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Genre:
          <input
            type='text'
            name='genre'
            value={movie.genre}
            onChange={handleChange}
          />
        </label>
    
        <label>
          Description:
          <input
            type='textarea'
            name='description'
            value={movie.description}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  )
}

export default PoemCreate
