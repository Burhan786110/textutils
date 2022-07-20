
import React, {useState} from 'react'



export default function TextForm(props) {

const handleDpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!", "success");
}

const handleLoClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("converted to lowercase!", "success");
}



const handleonchange = (event)=>{
    // console.log("onChange");
    setText(event.target.value);
}


    const [text, setText] = useState('Enter text here');
return (
  <>
<div className="container" >
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.Mode==='dark'?'grey':'white'}}id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleDpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
    {/* <button className="btn btn-primary mx-1" onClick={handletcclick}>Convert to title case</button> */}
</div>

<div className="container my-2" ></div>
  <h1> Your text summary</h1>
  <p> {text.split(" ").length} words and {text.length} char</p>
  <p> {0.008 * text.split(" ").length} Times to read</p>
  <h2>Preview</h2>
  <p>{text}</p>
    </>
  )
}
