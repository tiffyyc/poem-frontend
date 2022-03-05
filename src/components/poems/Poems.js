import React, { useEffect, useState } from 'react'
import { getPoems } from '../../api/poems'

const Poems = ({ user }) => {
  const [poems, setPoems] = useState([])

  useEffect(() => {
    getPoems()
      .then(res => {
        setPoems(res.data.poems)
      })
  }, [])

  return (
    <main>
      <h4>Poem of the day</h4>
      {poems}
    </main>
  )
}

export default Poems
