import React from 'react'
import styles from './ChatInput.module.scss'
import { useField } from '../hooks'

const ChatInput = () => {
  const message = useField('text')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('test')
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.formWrapper}>
        <input {...message} className={styles.messageBar} />
        <button className={styles.sendButton}>send</button>
      </form>
    </div>
  )
}

export default ChatInput
