import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createMessage, getMessages } from '../../api/messages'
import Message from './Message'
import { Button } from 'react-bootstrap'

const MessageBoard = ({ user }) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [numMessages, setNumMessages] = useState(10)

  const { id } = useParams()

  useEffect(() => {
    getMessages(id)
      .then(res => {
        setMessages(res.data.messages.reverse().slice(0, numMessages))
      })
      .catch(console.error)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()

    const body = {
      board: id,
      text: newMessage,
      owner: user
    }

    createMessage(body)
      .then(() => {
        setNewMessage('')
        onRefresh()
      })
      .catch(console.error)
  }

  const onRefresh = (e) => {
    getMessages(id)
      .then(res => {
        setMessages(res.data.messages.reverse().slice(0, numMessages))
      })
      .catch(console.error)
  }

  const onMessageChange = e => {
    e.preventDefault()

    setNewMessage(e.target.value)
  }

  const onNumMessageChange = (e) => {
    e.preventDefault()

    setNumMessages(e.target.value)
  }

  return (
    <div style={{
      marginTop: '2rem',
      width: '100%',
      height: '500px',
      backgroundColor: '#fff'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 10%',
        padding: '2%'
      }}>
        <div >
          {/* for spacing */}
        </div>
        <h4 style={{
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          
        }}>Comments</h4>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'right',
          marginRight: '10%'
          
        }}>
          {/* <p style={{ margin: 'auto 0.5rem auto 1rem' }}> Messages Displayed: </p>
          <input value={numMessages} onChange={onNumMessageChange} style={{ width: '3rem', textAlign: 'center' }}></input>
          <button onClick={onRefresh}>Refresh</button> */}
        </div>
      </div>
      {user && <form onSubmit={onSubmit} style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '1rem',
        margin: '0 10%'
      }}>
        {/* <p style={{
          margin: 'auto 0.5rem auto 1rem'
        }}>New message: </p> */}
        <input style={{
          width: '50%',
          height: '3rem'
        }}
        value={newMessage} onChange={onMessageChange}></input>

        <br/>
        
        <Button variant="secondary" onClick={onSubmit} style={{ margin:'1rem' }}>Submit</Button>
      </form>}

      {messages.map(message => {
        return <Message key={message._id} message={message} user={user} refresh={onRefresh} />
      })}
    </div>
  )
}

export default MessageBoard
