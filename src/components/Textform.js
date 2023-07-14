import React, {useState} from 'react'

export default function Textform(props) {
    const hadleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase","success");
    }
    const hadleLoClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success");
    }
    const hadleCapClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let lowerCaseText = text.toLowerCase();
        let newtext = lowerCaseText.replace(/(^\w)|\.\s+(\w)/gm, match => match.toUpperCase());
        setText(newtext);
    }
    const hadleClClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newtext = "";
        setText(newtext);
        props.showAlert("Text cleared","success");
    }
    //Download into text file function
    function downloadTextAsFile(text, filename) {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
      
        element.href = URL.createObjectURL(file);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
      
        // Clean up
        URL.revokeObjectURL(element.href);
        document.body.removeChild(element);
      }
    const hadleDownClick = ()=>{
        const newText = text;
        const filename = 'example.txt';
        downloadTextAsFile(newText, filename);
    }
    //copy to clipboard
    function useClipboard() {
        const [copied, setCopied] = useState(false);
      
        const copyToClipboard = (text) => {
          navigator.clipboard.writeText(text)
            .then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
            })
            .catch((error) => {
              console.error('Failed to copy:', error);
            });
        };
      
        return { copied, copyToClipboard };
      }
      
    const { copied, copyToClipboard } = useClipboard();
      
    const handleCopyClick = () => {
          const newtext = text;
          copyToClipboard(newtext);
        }

    const handleExtraSpace = () => {
          const newtext = text.split(/[ ]+/);
          setText(newtext.join(" "))
        }        
                        
    const handleOnChange = (event)=>{
        // console.log("Onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode ==='dark'?'gray':'white', color: props.mode ==='dark'?'white':'black'}} ></textarea>
        </div>
        <button className="btn btn-secondary btn-sm mx-1" onClick={hadleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-secondary btn-sm mx-1" onClick={hadleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-secondary btn-sm mx-1" onClick={hadleCapClick}>Capitalize Text</button>
        <button className="btn btn-secondary btn-sm mx-1" onClick={hadleDownClick}>Download Text</button>
        <button className="btn btn-secondary btn-sm mx-1" onClick={handleCopyClick}>Copy to Clipboard</button>
        {copied && <span>Copied!</span>}
        <button className="btn btn-secondary btn-sm mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-secondary btn-sm mx-1" onClick={hadleClClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the above textbox to preview here"}</p>
    </div>
    </>
  )
}
