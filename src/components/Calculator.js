import React, { useState } from 'react';
import Keys from './Keys';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [operator, setOperator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setOperator(calculate(operator, buttonName));
  };

  const output = operator.next ? operator.next : operator.total || 0;

  return (
    <div className="calculator">
      <div className="result">{output}</div>
      <Keys onClick={handleClick} />
    </div>
  );
};

export default Calculator;
