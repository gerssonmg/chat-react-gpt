import './App.css';
import ChatComponent from './ChatComponent';
import telegram from './images/logo_telegram.svg';
import youtube from './images/logo_youtube.svg';
import instagram from './images/logo_instagram.svg';
import Box from '@mui/material/Box';

function App() {

  const TEXT_HEADER = "Oi, sou um chatBot."

  return (
    <div className="App">
      <header className="App-header">
        {TEXT_HEADER}

        <a
          className="App-link"
          href="https://www.instagram.com/gersonaguiar.br/#"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '12px' }}
        >
          Gérson Águiar
          <br />
          Se increva no meu Canal YouTube
        </a>

      </header>
      <ChatComponent />

      <Box mt={2}
        px={6}
        display="flex"
        justifyContent="space-between"

      >
        {/* Troque esses links aqui, pelos links das suas redes sociais */}
        <a
          href="https://www.youtube.com/@gerson.aguiar.engenharia/videos"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} className="App-logo" alt="logo" />
        </a>

        {/* Troque esses links aqui, pelos links das suas redes sociais */}
        <a
          href="https://t.me/+xoKyabPuquY5Yzkx"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} className="App-logo" alt="logo" />
        </a>

        {/* Troque esses links aqui, pelos links das suas redes sociais */}
        <a
          href="https://www.instagram.com/tecnologia.gersonaguiar/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} className="App-logo" alt="logo" />
        </a>
      </Box>
    </div>
  );
}

export default App;
