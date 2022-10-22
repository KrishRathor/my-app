import React, { useState, useSyncExternalStore } from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === "black") {
            setmyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
            })
            setbtnText("Enable Light Mode")
        } else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText("Enable Dark Mode")
        }
    }

    return (
        <div className='container'  style={myStyle}>

            <h1>About Us</h1>
            <h3>TextUtils is a utility which you can use to manipulate your text</h3>

        </div>
    )
}
