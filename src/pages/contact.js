import * as React from "react";
import './index.css';
import { Link } from "gatsby";
import logo from '../../logo.png';
import {useState} from 'react';
import mon from '../../mon.jpg';
import Contact from '../../components/Contact';
import Words from '../../components/Words';







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
            <Link to='/about'>About Me</Link>
            <Link to='/contact' className='active'>Contact Me</Link>
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
            <Link to='/about'>About Me</Link>
            <Link className='active' to='/contact'>Contact Me</Link>

        </div>
      }
    <div className='contact'>
        
        <Contact/>
        <Words/>
        
      
    </div>
    </div>
  )
}

export default IndexPage
