import './App.css';
import React, {useState} from "react";
import Info from './componets/Infoma';

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");
  const [resultado, setResultado] = useState(0);

  function allClear(){
    setNumber1("");
    setNumber2("");
    setOperation("");
    setResultado("");
  }

  
  function clicNumber (val) {
    if(operation === ""){
      setNumber1(number1 + val);
    } else{
      setNumber2(number2 + val);
    }
  }

  function clicOperation (val) {
    setOperation(val);
  }

  function getResultado (){
    switch (operation){
      case "+":
        setResultado(Number(number1) + Number(number2));
        break;
        case "-":
          setResultado(Number(number1) - Number(number2));
          break;
          case "*":
            setResultado(Number(number1) * Number(number2));
            break;
            case "/":
              setResultado(Number(number1) / Number(number2));
              break;
              case "%":
              setResultado(Number(number1) * Number(number2) / 100);
              break;
    }
  }
  return (
    
    <div className="App">
      <div className="titul"><h1>Calculadora By ronal</h1>
      <h2>Deslize hacia bajo para mas informacion</h2></div>
      <div className="calculadora-grid">
        <div className="outoput">
          <div className="previus-operador">{operation ? number1 + operation + number2: ""}</div>
          <div className="current-operandor">{resultado ? resultado : (!operation ? number1 : number2)}</div>
        </div>

        <button onClick={allClear} className="span-two">AC</button>
        <button onClick={() => {clicOperation("%")}}>%</button>
        <button onClick={() => {clicOperation("/")}}>/</button>
        <button onClick={() => {clicNumber(7)}}>7</button>
        <button onClick={() => {clicNumber(8)}}>8</button>
        <button onClick={() => {clicNumber(9)}}>9</button>
        <button onClick={() => {clicOperation("*")}}>*</button>
        <button onClick={() => {clicNumber(4)}}>4</button>
        <button onClick={() => {clicNumber(5)}}>5</button>
        <button onClick={() => {clicNumber(6)}}>6</button>
        <button onClick={() => {clicOperation("+")}}>+</button>
        <button onClick={() => {clicNumber(1)}}>1</button>
        <button onClick={() => {clicNumber(2)}}>2</button>
        <button onClick={() => {clicNumber(3)}}>3</button>
        <button onClick={() => {clicOperation("-")}}>-</button>
        <button onClick={() => {clicNumber(".")}}>.</button>
        <button onClick={() => {clicNumber(0)}}>0</button>
        <button onClick={getResultado} className="span-two">=</button>

      </div>
    </div>
  );
}

export default App;
