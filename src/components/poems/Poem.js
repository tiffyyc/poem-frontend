import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MessageBoard from './MessageBoard'

import { deletePoem, getPoem } from '../../api/poems'

const Poem = ({ user }) => {
  const { id } = useParams()
  const [poem, setPoem] = useState({})

  useEffect(() => {
    getPoem(id)
      .then(res => {
        setPoem(res.data.poem)
      })
  }, [])

  return (
    // <div className={styles.display}>
    <div style={{ padding: '4rem'}}>
      <h4>{poem.title}</h4>
      <p>writer: {poem.writer}</p>
      <button onClick={deletePoem}>Delete</button>

      <MessageBoard user={user}/>
    {/* </> */}
    </div>
  )
}

export default Poem
