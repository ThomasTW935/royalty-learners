import { Send, LocationOn, Phone, Mail } from '@material-ui/icons'
import React from 'react'
import './Contacts.style.js'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

const contacts = [
  { icon: Phone, content: '1 2 3 4 5 6 7 8' },
  { icon: LocationOn, content: '12th floor tower cubao Quezon city' },
  { icon: Mail, content: 'RoyaltyLearners@mail.com.ph' },
]

export default function Contacts() {
  return (
    <div
      style={{
        margin: '0 auto',
        width: '60%',
      }}
    >
      <h1>Contacts</h1>
      {contacts.map((contact) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <contact.icon />
          <h2>{contact.content}</h2>
        </div>
      ))}
      <div
        style={{
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField label='Your Name' color='Secondary' variant='outlined' />
        <TextField label='Your Email' color='Secondary' variant='outlined' />
        <TextField label='Subject' color='Secondary' variant='outlined' />
        <TextField label='Message' color='Secondary' variant='outlined' />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          endIcon={<Send />}
        >
          Send
        </Button>
      </div>
    </div>
  )
}
