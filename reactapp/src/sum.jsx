import React from 'react'
class Sumdemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
   

doSum(){
    var no1 = parseInt(this.state.txt1);
    var no2 = parseInt(this.state.txt2);

    if (this.doValidation()) {
      let result = no1 + no2;
      this.setState({ ans: "Sum is " + result });
      console.log("Sum:", result);
    }
}

doValidation() {
    const { txt1, txt2 } = this.state;
    let temperr = {};
    let isValid = true;

   
    if (!txt1) {
      temperr.txt1 = "Enter No1";
      isValid = false;
    } else if (isNaN(txt1)) {
      temperr.txt1 = "Enter Only Digits in No1";
      isValid = false;
    }

    if (!txt2) {
      temperr.txt2 = "Enter No2";
      isValid = false;
    } else if (isNaN(txt2)) {
      temperr.txt2 = "Enter Only Digits in No2";
      isValid = false;
    }

    this.setState({ errmsg: temperr });
    return isValid;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        <br />
        <input type="text" name="txt1" value={this.state.txt1 || ""} onChange={this.handleChange} placeholder="Enter No1"/>
        
        {this.state.errmsg && this.state.errmsg.txt1 && ( <span style={{ color: "red" }}>{this.state.errmsg.txt1}</span>)}
        <br />
        
        <input type="text" name="txt2" value={this.state.txt2 || ""} onChange={this.handleChange} placeholder="Enter No2" />
        
        {this.state.errmsg && this.state.errmsg.txt2 && ( <span style={{ color: "red" }}>{this.state.errmsg.txt2}</span>  )}
        
        <br />
        
        <input type='button' value="+" onClick={this.doSum.bind(this)} />
        
        <br />
        
        {this.state.ans}
      </>
    );
  }
}

export default Sumdemo;