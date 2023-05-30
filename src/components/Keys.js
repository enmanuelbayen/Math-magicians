import React from 'react';
import '../Calculator.css';

const Keys = () => (
  <div className="key-container grid">
    <button className="key-row" type="button">AC</button>
    <button className="key-row" type="button">+/-</button>
    <button className="key-row" type="button">%</button>
    <button className="key-row orange" type="button">+</button>
    <button className="key-row" type="button">7</button>
    <button className="key-row" type="button">8</button>
    <button className="key-row" type="button">9</button>
    <button className="key-row orange" type="button">x</button>
    <button className="key-row" type="button">4</button>
    <button className="key-row" type="button">5</button>
    <button className="key-row" type="button">6</button>
    <button className="key-row orange" type="button">-</button>
    <button className="key-row" type="button">1</button>
    <button className="key-row" type="button">2</button>
    <button className="key-row" type="button">3</button>
    <button className="key-row orange" type="button">+</button>
    <button className="key-row" id="ceroKey" type="button">0</button>
    <button className="key-row" type="button">.</button>
    <button className="key-row orange" type="button">=</button>
  </div>
);

export default Keys;
