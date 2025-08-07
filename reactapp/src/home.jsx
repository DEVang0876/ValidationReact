import shlok from './images.jpeg'
function home() {
    var a=10;
    var b=20;
    var fire={color:"rgba(255, 162, 0, 0.5)",backgroundColor:"rgba(233, 233, 161, 0.5)",fontWeight:900,borderRadius:"10px",padding:"10px",border:"2px solid black"};
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      A value is {a} <br/>
      B value is {b}
      <p style={{color:"black",backgroundColor:"wheat", fontWeight:900}}>Legend</p>
      <p style={fire}>Legend</p>
      <img src="https://picsum.photos/200/300" alt="Random" /><br></br>
     <img src={shlok}></img> 
    </div>
  );
}

export default home;