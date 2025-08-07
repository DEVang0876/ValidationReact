import React from "react";

function Calculator() {
    const [num1, setNum1] = React.useState(null);
    const [num2, setNum2] = React.useState(null);
    const [choice, setChoice] = React.useState(null);
    const [ans,setAns] = React.useState(null);
    


    const calculate = () => {
        let result = 0;
        if (choice === "add") {
            result = parseFloat(num1) + parseFloat(num2);
        } else if (choice === "subtract") {
            result = parseFloat(num1) - parseFloat(num2);
        } else if (choice === "multiply") {
            result = parseFloat(num1) * parseFloat(num2);
        } else if (choice === "divide") {
            if (num2 !== 0) {
                result = parseFloat(num1) / parseFloat(num2);
            } else {
                return "not devide by zero";
            }
        }
        setAns(result);
    }

    return (
        <div>
            <h2>Calculator</h2>
            num1<input type='text' value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" />
            num2<input type='text' value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" />
            Choice: <input type="radio" name="choice" value="add"  onChange={(e) => setChoice(e.target.value)} />Add
            <input type="radio" name="choice" value="subtract"  onChange={(e) => setChoice(e.target.value)} />Subtract
            <input type="radio" name="choice" value="multiply"  onChange={(e) => setChoice(e.target.value)} />Multiply
            <input type="radio" name="choice" value="divide"  onChange={(e) => setChoice(e.target.value)} />Divide
            <br />
            <button onClick={calculate}>Calculate</button>
            {ans }
        </div>   
       
    );
}

export default Calculator;