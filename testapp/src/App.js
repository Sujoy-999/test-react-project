import UXHeader from './components/UXHeader/UXHeader';
import UXButton from './components/UXButton/UXButton';
import { useState, useReducer } from 'react';
import './App.css';
import Calculator from './widget/calculator/calculator';

function App() {
  const [counter, setCounter] = useState(0);
  const [empList, setempList] = useState(['Anish', 'Indra', 'Sujoy']);

  const clickHandler = (source) => {
    console.log('Click......', source);
  }

  return (
    <div className="App">
      <UXHeader text={"This is my new header"} variant={'hh1'}/>
      <UXHeader text={"Hello every one"} variant='hh2'/>
      <UXHeader text={"This is Anish dey from earth"} variant='hh3'/>

      <UXButton text={"Click me"} variant={'primary'} onTap={(param) => clickHandler(param)}/>
      <hr />
      <UXHeader text={`Counter Example ${counter}`} variant={'hh1'}/>
      <UXButton text={"-"} variant={'primary'} onTap={() => setCounter(counter - 1)}/>
      <UXButton text={"+"} variant={'primary'} onTap={() => setCounter(counter + 1)}/>
      <hr />
      <Calculator />
      <hr />
      <ul>
        {
          empList.map((value, index) => (
            <li key={index} id={'listItem' + index}>{value}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
