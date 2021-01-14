import * as React from "react";
import './index.css';
import { Link } from "gatsby";
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';
import seven from '../images/7.jpg';
import eight from '../images/8.jpg';
import nine from '../images/9.jpg';
import ten from '../images/10.jpg';
import eleven from '../images/11.jpg';
import twelve from '../images/12.jpg';
import thirteen from '../images/13.jpg';
import fourteen from '../images/14.jpg';
import fifteen from '../images/15.jpg';
import sixteen from '../images/16.jpg';
import seventeen from '../images/17.jpg';
import eighteen from '../images/18.jpg';
import nineteen from '../images/19.jpg';
import twenty from '../images/20.jpg';
import twentyone from '../images/21.jpg';
import twentytwo from '../images/22.jpg';
import twentythree from '../images/23.jpg';
import twentyfour from '../images/24.jpg';
import twentyfive from '../images/25.jpg';
import twentysix from '../images/26.jpg';
import twentyseven from '../images/27.jpg';
import twentyeight from '../images/28.jpg';
import twentynine from '../images/29.jpg';
import thirty from '../images/30.jpg';
import thirtyone from '../images/31.jpg';
import thirtytwo from '../images/32.jpg';
import thirtythree from '../images/33.jpg';
import thirtyfour from '../images/34.jpg';
import thirtyfive from '../images/35.jpg';
import thirtysix from '../images/36.jpg';
import thirtyseven from '../images/37.jpg';
import thirtyeight from '../images/38.jpg';
import thirtynine from '../images/39.jpg';
import fourty from '../images/40.jpg';
import logo from '../../logo.png';
import {useState} from 'react';








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
            <Link to='/'className='active'>Home</Link>
            <a href='https://proofing.monicajohanson.com/'>Galleries</a>
            <Link to='about'>About Me</Link>
            <Link to='contact'>Contact Me</Link>
          </div>
          <div class="container" onClick={changeMen}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
          </div>
      </nav>
      {men && 
        <div className='moblinks'>
          <Link to='/'className='active'>Home</Link>
            <a href='https://proofing.monicajohanson.com/'>Galleries</a>
            <Link to='about'>About Me</Link>
            <Link to='contact'>Contact Me</Link>

        </div>
      }
    <main>
    
      <img src={one}  alt='photo'/>
      <img src={two} alt='photo'/>
      <img src={three} alt='photo'/>
      <img src={four} alt='photo'/>
      <img src={five} alt='photo'/>
      <img src={six} alt='photo'/>
      <img src={seven} alt='photo'/>
      <img src={eight} alt='photo'/>
      <img src={nine} alt='photo'/>
      <img src={ten} alt='photo'/>
      <img src={eleven} alt='photo'/>
      <img src={twelve} alt='photo'/>
      <img src={thirteen} alt='photo'/>
      <img src={fourteen} alt='photo'/>
      <img src={fifteen} alt='photo'/>
      <img src={sixteen} alt='photo'/>
      <img src={seventeen} alt='photo'/>
      <img src={eighteen} alt='photo'/>
      <img src={nineteen} alt='photo'/>
      <img src={twenty} alt='photo'/>
      <img src={twentyone} alt='photo'/>
      <img src={twentytwo} alt='photo'/>
      <img src={twentythree} alt='photo'/>
      <img src={twentyfour} alt='photo'/>
      <img src={twentyfive} alt='photo'/>
      <img src={twentysix} alt='photo'/>
      <img src={twentyseven} alt='photo'/>
      <img src={twentyeight} alt='photo'/>
      <img src={twentynine} alt='photo'/>
      <img src={thirty} alt='photo'/>
      <img src={thirtyone} alt='photo'/>
      <img src={thirtytwo} alt='photo'/>
      <img src={thirtythree} alt='photo'/>
      <img src={thirtyfour} alt='photo'/>
      <img src={thirtyfive} alt='photo'/>
      <img src={thirtysix} alt='photo'/>
      <img src={thirtyseven} alt='photo'/>
      <img src={thirtyeight} alt='photo'/>
      <img src={thirtynine} alt='photo'/>
      <img src={fourty} alt='photo'/> 
    </main>
    </div>
  )
}

export default IndexPage
