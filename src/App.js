import './App.css';
import ChatComponent from './ChatComponent';

function App() {

  const TEXT_HEADER = "Oi, sou um chatBot."

  return (
    <div className="App">
      <header className="App-header">
        {TEXT_HEADER}
      </header>
      <ChatComponent />
    </div>
  );
}

export default App;
