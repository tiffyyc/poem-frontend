import React, { useState } from 'react'
import { changeMessage, deleteMessage } from '../../api/messages'
import { Button } from 'react-bootstrap'

const Message = ({ message, user, refresh }) => {
  const [msg, setMsg] = useState(message.text)
  const [editing, setEditing] = useState(false)

  const handleDelete = () => {
    deleteMessage(message._id, user)
      .then(() => {
        refresh()
      })
      .catch(console.error)
  }

  const handleEdit = () => {
    changeMessage(message._id, msg, user)
      .then(() => {
        refresh()
        setEditing(false)
      })
      .catch(console.error)
  }

  const editChange = (e) => {
    setMsg(e.target.value)
  }

  const startEdit = () => {
    setEditing(true)
  }

  const cancelEdit = () => {
    setEditing(false)
    setMsg(message.text)
  }

  return (
    <div style={{
      display: 'flex',
      borderBottom: 'solid',
      paddingTop: '1rem',
      marginLeft: '10%',
      width: '80%'
    }}>
      <p style={{ padding: '1rem', width: '20rem' }}>{message.owner.email}</p>
      {!editing && <p style={{ padding: '1rem', width: '80%' }}>{msg}</p>}
      {editing && <input style={{ padding: '1rem', width: '80%' }} value={msg} onChange={editChange}></input>}

      <div style={{ float: 'right', width: '20rem' }}>
        {!editing && user && user.token === message.owner.token && <Button variant='secondary' onClick={startEdit} style={{ margin:'1rem' }}>Edit</Button>}

        {editing && <Button variant='secondary' onClick={handleEdit} style={{ margin: '1rem'}}>Submit</Button>}

        {editing && <Button variant='secondary' onClick={cancelEdit}>Cancel</Button>}
        {!editing && user && user.token === message.owner.token && <Button variant='secondary' onClick={handleDelete}>Delete</Button>}
      </div>
    </div>
  )
}

export default Message
