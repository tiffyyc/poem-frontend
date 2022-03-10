import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import MessageBoard from './MessageBoard'
import { Button } from 'react-bootstrap'

import { deletePoem, getPoem } from '../../api/poems'

const Poem = ({ user, refresh }) => {
  const { id } = useParams()
  const [poem, setPoem] = useState({})
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    getPoem(id)
      .then(res => {
        setPoem(res.data.poem)
      })
  }, [])

    const handleDeleteClick = async () => {
    try {
      await deletePoem(id, user)
      setDeleted(true)
    } catch (error)
    {

    } 
  }

  if (deleted) {
    return <Navigate to='/' />
  } else {

    return (
      // <div className={styles.display}>
      <div style={{ padding: '4rem'}}>
        <h4>{poem.title}</h4>
        <p>writer: {poem.writer}</p>
        <p>description: {poem.description}</p>
        <Button variant='secondary' onClick={handleDeleteClick}>Delete</Button>
  
        <MessageBoard user={user}/>
      {/* </> */}
      </div>
    )
  }

}

export default Poem
