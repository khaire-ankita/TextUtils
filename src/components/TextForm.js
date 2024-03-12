import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked." + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = () => {
    console.log("lowercase was clicked." + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleCcClick = () => {
    console.log("Capitalizedcase was clicked." + text)
    let newText = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    setText(newText);
    props.showAlert("Converted to capitalize!", "success");
  }
  const handleClClick = () => {
    console.log("clear was clicked." + text)
    let newText =(" ");
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }
  
  const handleOnChange = (event) => {
    // console.log("on Change.")
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (

    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3"  >
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary  mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
      <button className='btn btn-primary  mx-2' onClick={handleCcClick}>Convert to Capitalizedcase</button>
      <button className='btn btn-primary  mx-2' onClick={handleClClick}>Clear Text</button>

    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>your text summary</h1>
     <p>{text.split(" ").length} words and {text.length} Characters</p>
     <p>{0.008*text.trim().split(/\s+/).filter(word => word.length > 0).length} Minutes read</p>
     <h1>Preview</h1>
     <p>{text}</p>
    </div>
    </>
    
  )
}
