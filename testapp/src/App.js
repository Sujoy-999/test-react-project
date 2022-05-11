import UXHeader from './components/UXHeader/UXHeader';
import UXButton from './components/UXButton/UXButton';
import UXTextbox from './components/UXTextbox/UXTextbox';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Calculator from './widget/calculator/calculator';

function App() {
  const [counter, setCounter] = useState(0);
  const [empList, setEmpList] = useState(['Anish', 'Indra', 'Sujoy']);
  const [empName, setEmpName] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const clickHandler = (source) => {
    console.log('Click......', source);
  }
  const addEmp = () => {
    let empListArray = [...empList];
    if(empName !== ''){
      if(empListArray.indexOf(empName) === -1){
        empListArray.push(empName);
      } else {
        setErrorMsg('Emp name already exists');
      }
    } else {
      setErrorMsg('Emp name can not be blank, please enter emp name');
    }
    
    setTimeout(() => {
      setErrorMsg(null);
    }, 2000);
    setEmpList(empListArray);
    setEmpName('');
  }

  const handlePromise = () => {
    return new Promise((resolve, reject) => {
      if(empList && empList.length > 0){
        resolve();
      } else {
        reject();
      }
    })
  }

  const apiCall = () => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      
    }).catch((err) => {
      
    })
  }

  useEffect(() => {
    console.log('calling...');
    handlePromise().then(() => {
      setSuccessMsg('Valid record');
    }).catch(() => {
      setErrorMsg('invalid record');
    })
    apiCall();
  }, [])

  return (
    <div className="App">
      <UXHeader text={`Counter Example ${counter}`} variant={'hh1'}/>
      <UXButton text={"-"} variant={'primary'} onTap={() => setCounter(counter - 1)}/>
      <UXButton text={"+"} variant={'primary'} onTap={() => setCounter(counter + 1)}/>
      <hr />
      <Calculator />
      <hr />
      <UXHeader text={`Emp Record`} variant={'hh1'}/>
      <UXTextbox value={empName} onEdit={(value) => setEmpName(value)}/>
      <UXButton text={"Add"} variant={'primary'} onTap={() => addEmp()}/>
      <ul>
        {
          empList && empList.map((value, index) => (
            <li key={index} id={'listItem' + index}>{value}</li>
          ))
        }
      </ul>
      {errorMsg && <UXHeader text={errorMsg} variant={'danger'}/>}
      {successMsg && <UXHeader text={successMsg} variant={'success'}/>}
      {/* <UXButton text={"promise check"} variant={'primary'} onTap={() => handlePromise()}/> */}
    </div>
  );
}

export default App;
