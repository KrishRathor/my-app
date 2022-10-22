import React, { useState } from 'react'

export default function Textform(props) {

    const punc = '!"#$%&()*+, -./:;<=>?@[\]^_`{|}~'

    const handleUpClick = () => {
        let upText = text.toUpperCase()
        setText(upText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLowClick = () => {
        let lowText = text.toLowerCase()
        setText(lowText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleRemoveSpace = () => {
        let removedText = text.split(/[ ]+/)
        setText(removedText.join(' '))
        props.showAlert("Removed all extra spaces!", "success")
    }

    const handleCopy = () => {
        let copyText = document.getElementById('myBox')
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        props.showAlert("Text copied!", "success")
    }

    const handleClearText = () => {
        setText('')
        props.showAlert("Text cleared!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    return (
        <>

            <div style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode==='light'?'white':'#222831', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="10"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mt-2">Convert to Uppercase</button>
                <button onClick={handleLowClick} className="btn btn-primary ms-2 mt-2">Convert to Lowercase</button>
                <button onClick={handleRemoveSpace} className="btn btn-primary ms-2 mt-2">Remove Extra Space</button>
                <button onClick={handleCopy} className="btn btn-primary ms-2 mt-2">Copy Text</button>
                <button onClick={handleClearText} className="btn btn-primary ms-2 mt-2">Clear Text</button>
            </div>

            <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text===""?"0":text.trim().split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.replace("  ", " ").split(' ').length} minutes to read</p>
                <h1>Preview</h1>
                <p>{text.length>0?text:'Enter something to preview here...'}</p>
            </div>

        </>
    )
}
