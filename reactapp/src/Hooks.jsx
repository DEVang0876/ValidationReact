import React from "react";
function Hooks() {
    const [counter, setCounter] = React.useState(0);
    const [msg, setmsg] = React.useState("");

    const increment = () => {
        if(counter<5){
        setCounter(counter + 1);
    setmsg("");}
        else{
            setmsg("counter >5");
        }
        
    };

    const decrement = () => {
        if(counter>0){
            setCounter(counter - 1);
            setmsg("");
        }
        else{
            setmsg("counter <0");
        }
    };

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>{msg}</p>
        </div>
    );
}

export default Hooks;