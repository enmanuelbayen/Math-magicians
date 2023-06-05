import './style/Calculator.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <section className="app-section">
      <div className="App grid">
        <h1>Lets do some math!</h1>
        <Calculator />
      </div>
    </section>
  );
}

export default App;
