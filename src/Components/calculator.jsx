import { useState, useEffect } from "react"

function Calculator() {
const [display, setDisplay] = useState('0');

const handleClick = (value) => {
    if (value === '=') {
        try {
            //sichere Auswertung des Ausdrucks
            const result = new Function('return ' + display)();
            setDisplay(String(result));
        } catch (error) {
            setDisplay('Error');
        }
} else if (value === 'C') {
    setDisplay('0');
} else {
    setDisplay((display === '0' && value !== '.') ? value : display + value);
}
};

return (
    <div className="calculator">
         <div className="display">{display}</div>

<div className="buttons">
    <button onClick={() => handleClick('7')}>7</button>
    <button onClick={() => handleClick('8')}>8</button>
    <button onClick={() => handleClick('9')}>9</button>
    <button className="operator" onClick={() => handleClick('/')}>/</button>
    <button onClick={() => handleClick('4')}>4</button>
    <button onClick={() => handleClick('5')}>5</button>
    <button onClick={() => handleClick('6')}>6</button>
    <button className="operator" onClick={() => handleClick('*')}>*</button>
    <button onClick={() => handleClick('1')}>1</button>
    <button onClick={() => handleClick('2')}>2</button>
    <button onClick={() => handleClick('3')}>3</button>
    <button className="operator" onClick={() => handleClick('-')}>-</button>
    <button onClick={() => handleClick('0')}>0</button>
    <button onClick={() => handleClick('.')}>.</button>
    <button onClick={() => handleClick('C')}>C</button>
    <button className="operator" onClick={() => handleClick('+')}>+</button>
    <button className="equal" onClick={() => handleClick('=')}>=</button>
</div>

</div>

);
}

export default Calculator;