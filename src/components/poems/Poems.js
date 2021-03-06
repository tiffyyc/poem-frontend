import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getPoems } from '../../api/poems'

const Poems = () => {
  const [poems, setPoems] = useState([])

  useEffect(() => {
    getPoems()
      .then(res => {
        setPoems(res.data.poems)
        console.log(res.data)
      })
      .catch(console.error)
  }, [])

const renderedPoems = poems.map(poem => {
  return (
      <div key={poem._id}>
        <Link to={`/poems/${poem._id}`}>
          <h5>{poem.title}</h5>
        </Link>
        <p>Writer: {poem.writer}</p>
      </div>
)}
)

  return (
    <div style={{ padding: '4rem'}}>
      <h4>Poem of the day</h4>
      <p>list of poems</p>
      
        {renderedPoems}
      
    </div>
  )
}

export default Poems
