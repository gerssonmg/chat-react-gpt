import React, { useState, useEffect } from 'react'
import './Chat.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import {
  Button, Divider
} from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

import API_KEY from './const';

function ChatComponent() {

  const [arrayConversa, setArrayConversa] = useState([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {

    setArrayConversa([...arrayConversa, {
      pergunta: message,
      autor: 'user'
    }])

    const input = message
    setMessage('')
    try {
      setLoading(true)
      await axios.post('https://api.openai.com/v1/chat/completions', {
        messages: [
          { role: 'user', content: `[[pt]] ${input}` }
        ],
        model: 'gpt-3.5-turbo'
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      }).then(response => {
        setLoading(false)
        response.data.choices.map(msg => setArrayConversa(
          (prevMessage) => [...prevMessage,
          { autor: 'bot', pergunta: msg.message.content }]
        ))
        setMessage('')
      }).catch(error => {
        console.log('error')
        console.log(error)
      })
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }


  const handleInputChange = (e) => {
    setMessage(e.target.value)
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    sendMessage()
  }

  return (

    <>
      <Box pt={2} px={1}>
        <Container style={{
          maxWidth: "420px",
          backgroundColor: "#E0E0E0",
          borderRadius: '16px',
          height: "60vh",
          paddingTop: "12px",
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>

          <Box overflow='auto'>
            {
              arrayConversa.map(i => {
                return (
                  <Box
                    key={i.pergunta} display="flex"
                    justifyContent={i.autor === 'user' ? 'right' : 'left'}
                    mt={1}
                  >
                    <Box
                      style={{
                        maxWidth: '70%',
                        padding: '4px',
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        borderRadius: '8px',
                        backgroundColor: i.autor === 'user' ? '#DCFBC6' : '#FFFFFF',
                        textAlign: i.author === 'user' ? 'right' : 'left',
                      }}
                    >
                      {i.pergunta}
                    </Box>
                  </Box>
                )
              })
            }
          </Box>
          <Box my={2} >
            <Box display="flex" >
              {
                loading && <CircularProgress size={20} />
              }
            </Box>
            <Divider />
            <form onSubmit={handleMessageSubmit}>
              <Box my={2} display="flex" alignItems="center">
                <TextField
                  label="Mensagem"
                  variant="outlined"
                  onChange={handleInputChange}
                  value={message}
                  style={{ marginRight: "10px" }}
                />
                <Button type="submit"
                  variant="contained">
                  Enviar
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box >
    </>
  )
}

export default ChatComponent;
