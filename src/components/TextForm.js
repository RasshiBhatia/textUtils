import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState ('');

  const handleOnChange = (event) => {
    console.log("changing...");
    setText(event.target.value);
  }

  const handleUPcase = () => {
    let UPcase = text.toUpperCase();
    setText(UPcase);
    props.showAlert('Text is in Upper Case','success')
  }

  const handleLOWcase = () => {
    let loCase = text.toLowerCase();
    setText(loCase);
    props.showAlert('Text is in Lower Case','success')
  }

  const handleCopyCase = () => {
    var text = document.getElementById('mybox');
    text.select();
    text.selectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text is Copied to Clipboard','success')
  }

  const handleExtraSpaceCase = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra Spaces are removed from Text','success')
  }

  const handleCLEARcase = () => {
    setText("");
    props.showAlert('Text is Cleared','success')
  }

  return (
    <>
    <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h1>{props.header}</h1>
      <div className="my-3">
        <textarea className="form-control" placeholder='Enter Text Here' value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? '#0b7242' : 'white', color: props.mode === 'light' ? 'black' : 'white'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-success mx-2" onClick={handleUPcase}>UPPER CASE</button>
      <button className="btn btn-success mx-2" onClick={handleLOWcase}>lower case</button>
      <button className="btn btn-success mx-2" onClick={handleCopyCase}>Copy Text</button>
      <button className="btn btn-success mx-2" onClick={handleExtraSpaceCase}>Remove Extra Spaces</button>
      <button className="btn btn-danger mx-2" onClick={handleCLEARcase}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h2>Text Details</h2>
      <ul>
        <li>
          <a>Your Text has <b>{text.split(" ").filter((element) => {return element.length!=0}).length}</b> Words and <b>{text.length}</b> Characters</a>
        </li>
        <li>
          <a>Time taken to Read your Text is <b>{0.08 * text.split(" ").length}</b> Minutes</a>
        </li>
      </ul>
    </div>
    </>
  )
}
