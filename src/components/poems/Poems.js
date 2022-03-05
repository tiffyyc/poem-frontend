import React, { useEffect, useState } from 'react'

import { getPoems } from '../../api/poems'

const Poems = () => {
  const [poems, setPoems] = useState([])
  console.log(poems)

  useEffect(() => {
    getPoems()
      .then(res => {
        setPoems(res.data.poems)
      })
  }, [])

  return (
    <div style={{ padding: '4rem'}}>
      <h4>Poem of the day</h4>
      {/* <Poem poems={poems}/> */}

    </div>
  )
}

export default Poems
