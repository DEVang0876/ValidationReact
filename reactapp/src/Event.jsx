function Event(){
    const alertButton = () => {
        alert("Button clicked!");
    };
    const printData = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
    };
    return (
        <div>
            <h1>Event Page</h1>
            <input type='button' value="Click1" onClick={alertButton} name="AlertButton"></input>    <br/>
            <input type='button' value="Click2" onClick={() => alert("Button clicked with arrow function!")} name="ArrowFunctionAlertButton"></input><br/>
            <input type='button' value="Click3" onClick={printData} name="butn3"></input>    <br/>
            <input type='text' value="type...." onClick={printData} name="textinput"></input>    <br/>
        </div>
    );
}

export default Event;