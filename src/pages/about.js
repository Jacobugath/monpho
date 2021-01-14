import * as React from "react";
import './index.css';
import { Link } from "gatsby";
import logo from '../../logo.png';
import {useState} from 'react';
import mon from '../../mon.jpg';







const IndexPage = () => {
  const [men, setMen] = useState(false);
  const changeMen = () =>{
    setMen(!men);
  }
  return (
    <div>
      <nav>
          <img src={logo} className='logo'  alt='logo'/>
          <div className='links'>
            <Link to='/'>Home</Link>
            <a href='https://proofing.monicajohanson.com/'>Galleries</a>
            <Link className='active' to='/about'>About Me</Link>
            <Link to='/contact'>Contact Me</Link>
          </div>
          <div class="container" onClick={changeMen}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
          </div>
      </nav>
      {men && 
        <div className='moblinks'>
          <Link to='/'>Home</Link>
            <a href='https://proofing.monicajohanson.com/'>Galleries</a>
            <Link className='active' to='/about'>About Me</Link>
            <Link to='/contact'>Contact Me</Link>

        </div>
      }
    <div className='about'>
      <div className='text'>

            <p>Monica, having an infatuation with superheroes, decided to have more interaction with them by trying to take over the tri state area. Having little success in that endeavor, she settled on marrying Captain America's doppelganger and frolicking in the mist, shooting people during vulnerable moments and capturing their memories on a protected disk.</p>

            <p>Prior to her attempt to rule the tri state area, Monica attended Dixie State University, where she took her first photography class. It was love at first snapshot. While pursuing her dream of training superheroes at local fitness centers, she continued to bring her love for photography out of the darkroom and into the light. This primarily included many (many) impromptu photoshoots of her many (many -- six, to be exact) children as well as practice sessions at local high school events. It was at a high school dance concert that her career as a photographer began to take off, and she has been known for her dance photography ever since.</p>

            <p>Monica specializes in portraits, particularly annual family portraits that are used for Christmas cards, and fast action photography -- a skill she has developed by lugging her camera and 3-foot lens to every event her children could possibly be involved in. When she isn’t out in the field or at target practice, she can usually be found in her secret lair, Netflix-binging, eating chocolate almonds, and editing photos on a tight deadline.</p>

            <p>*She is a member of the Church of Jesus Christ of Latter-day Saints and purchases her fitness apparel at Costco and Mulberry Drive and pretty much anywhere that sells yoga pants.</p>
      </div>
      <img src={mon} alt='Monica Johanson' className='apho'/>
    </div>
    </div>
  )
}

export default IndexPage
