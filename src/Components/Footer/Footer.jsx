import React, { useEffect } from 'react'
import './footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import video from '../../videos/video3.mp4'
import footdata from "../../footer.json"
import Aos from 'aos';
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
    
  },[])

  const currentYear=new Date().getFullYear();
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted typeof='video/mp4'></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text"  placeholder='Enter Email Address'/>
            <button data-aos='fade-up' className='btn flex' type='submit'>SEND<FiSend className='icon' /></button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href='#' className="logo flex">
                <MdOutlineTravelExplore className='icon'/>  Travel
              </a>
            </div>
            <div data-aos='fade-up' className="footerParagraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At facilis quo ullam.
            </div>
            <div data-aos='fade-up' className="footerSocials">
            <FaTwitter  className='icon'/>
            <FaYoutube  className='icon'/>
            <FaInstagram className='icon'/>
            <FaTripadvisor className='icon'/>

            </div>
          </div>
         
          <div className="footerLinks grid">
              {
               footdata.map((data)=>{

                return(
                  <>
                   
                   <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                   <span key={data.id} className="groupTitle">
               {data.title}
              </span>
              <li className='footerList flex'>
              <FaChevronRight className='icon' />
              {data.option1}
              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon' />
             {data.option2}
              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon' />
             {data.option3}
              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon' />
              {data.option4}
              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon' />
              {data.option5}
              </li>
              </div>
            
            
                  </>
                )
               })
              }
             
             </div>
             <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE</small>
              <small>COPYRIGHTS RESERVED</small>
              <small>{currentYear}</small>
             </div>
           
        </div>
      </div>
      
    </section>
  )
}

export default Footer;
