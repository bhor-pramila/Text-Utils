// import React, {useState} from 'react'
import React from 'react'

export default function About(props) {
    // const[myStyle, setmyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    let myStyle ={
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'black':'white'
    }
        
  return (
    <div className="container" style={myStyle}>
        <h2 className="my-3">About us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" style={myStyle}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                   <strong>Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports that number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
            </div>
        </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as a chrome, Firefox, Internet explorer, safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                </div>
                </div>
        </div>
        </div>
        {/* <div className="container">
            <button type="button" onClick={toggleStyle} className="btn btn-primary btn-sm my-2">{btntext}</button>
        </div> */}
    </div>
  )
}
