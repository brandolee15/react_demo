import React, {useState} from 'react';

const Greeting = () => {
    const[readCount, setReadCount] = useState(0);
    
    const increaseReadCount = () => setReadCount(prevState => prevState + 1)
    // const[username, setUsername] = useState("futureproof");
    // consr [alert, setReadCount] = useState("")
    // const[readCount, setReadCount] = useState(0)
    // const[headlines, setHeadlines] = useState([{
    //     headline: "Distaster strikes", snippet: "some snipet"},
    //     {headline: "Sunny days ahead", snippet: "some snipet"},
    //     {headline: "Beware of the Tsunami", snippet: "some snipet"}
    //    ])

    return (
        // <h2 id="greeting">
        //     <h1>Hello, {username}!</h1>
        // </h2>
        <h2 id="greeting">
            <span>{readCount}</span>
            <button onClick = {increaseReadCount}>Click me!</button>
        </h2>

    )
}

export default Greeting;