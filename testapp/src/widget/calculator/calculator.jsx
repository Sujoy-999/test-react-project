import UXButton from "../../components/UXButton/UXButton";
import UXTextbox from "../../components/UXTextbox/UXTextbox";
import { useState } from 'react';
import UXHeader from "../../components/UXHeader/UXHeader";

const Calculator = () =>{
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [summation, setSummation] = useState(0);
    return (
        <div>
            <UXTextbox value={firstNumber} onEdit={(value) => setFirstNumber(value)}/>
            <UXTextbox value={secondNumber} onEdit={(value) => setSecondNumber(value)}/>
            <UXButton text={"+"} onTap={() => setSummation(+firstNumber + +secondNumber)}/>
            <UXHeader text={"Result is: "+summation}/>
        </div>
    );
}
export default Calculator;