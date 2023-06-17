import React, { useState, useEffect } from 'react'
import './Chat.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const DEFAULT_MSG = [
  {
    pergunta: 'Gerson: oi',
    resposta: 'ChatGpt: Ola'
  },
  {
    pergunta: 'Gerson: Tudo bom?',
    resposta: 'ChatGpt: Otimo'
  },
  {
    pergunta: 'Gerson: Quem e voce?',
    resposta: 'ChatGpt: Sou o chatGpt, e voce ?'
  },
  {
    pergunta: 'Sou o Gerson Aguiar. Estou construindo um chatGpt com uma galera muito top',
    resposta: 'Que bacana'
  }
]

function ChatComponent() {

  const [arrayConversa, setArrayConversa] = useState(DEFAULT_MSG)
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    setMessage(e.target.value)
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    setArrayConversa([...arrayConversa, {
      pergunta: message,
      resposta: 'nada'
    }])
  }

  useEffect(() => {
    console.log(arrayConversa)
  }, [arrayConversa]);

  return (

    <h1>

      {
        arrayConversa.map(i => {
          return (
            <Box key={i.pergunta}>
              <Box style={{ backgroundColor: "purple" }}>
                <h3 className="pergunta">
                  {i.pergunta}
                </h3>
                <h3 className="resposta">
                  {i.resposta}
                </h3>
              </Box>
            </Box>

          )
        })
      }

      <form onSubmit={handleMessageSubmit}>

        <TextField
          label="Outlined"
          variant="outlined"
          onChange={handleInputChange}
        />
      </form>

    </h1>
  )
}

export default ChatComponent;
