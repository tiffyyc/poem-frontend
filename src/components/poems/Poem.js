import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MessageBoard from './MessageBoard'
// import styles from '../styles/Movie.module.css'

import { getPoem } from '../../api/poems'

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
    <>
      {poem}
      <MessageBoard user={user}/>
    </>
    // </div>
  )
}

export default Poem
