import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ChatComponent from './ChatComponent';

function App() {
  return (
    <div className="App">
      <ChatComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello chat react <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained">Oi botão</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
