import * as React from "react";
import black from '../black.png';
import face from '../facebook.jpg';
import insta from '../insta.png'

const Words = () => {
    return(
        <div className='word'>
            <img className='b' src={black} alt='black flowers'/>
            <br></br>
            To set an appointment, please contact me at shmojohanson@gmail.com or 435-669-6959
            <div className='icon'>
                <a href='https://www.facebook.com/monicajohansondesign'><img src={face} className='icon1'/></a>
                <a href='https://www.instagram.com/monica_johanson/'><img src={insta} className='icon2'/></a>
            </div>
        </div>
    )
}

export default Words