import './style/main.scss';

function App() {
  return (
    <div className="App">
      <div className="messages"></div>
      <div className="input">
        <input type="text" placeholder="Din besked..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default App;
