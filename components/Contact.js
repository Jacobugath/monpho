import * as React from "react";

const Contact = () => {
    return(
        <div className='con'>
            Email
            <input type='text'></input>
            <br></br>
            Message
            <textarea/>
            <br></br>
            <button className='conBun'>Send Message</button>
        </div>
    )
}

export default Contact