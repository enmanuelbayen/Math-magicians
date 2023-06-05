import './style/Calculator.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <section className="app-section">
      <div className="App grid">
        <h2>Lets do some math!</h2>
        <Calculator />
      </div>
    </section>
  );
}

export default App;
