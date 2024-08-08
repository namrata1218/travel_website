import React, { useEffect } from 'react'
import mainData from '../main.json';
import './main.css'
import { IoLocationOutline } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Main = () => { 
  useEffect(()=>{
    Aos.init({duration:2000})
    
  },[])
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">
            Most visted destinations
        </h3>
      </div>

      <div className="secContent grid">
          {
            mainData.map((data)=>{
              return(
                <div key={data.id} data-aos='fade-up' className="singleDestination">
                  <div className="imageDiv">
                    <img src={data.imgSrc} alt={data.destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">
                      {data.destTitle}
                    </h4>
                    <span className="continent flex"><IoLocationOutline className='icon' />
                    <span className="name">{data.location}</span></span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{data.grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{data.fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{data.description}</p>
                    </div>
                    <button className="btn flex">
                      DETAILS <FaClipboardCheck />
                    </button>
                  </div>

                </div>
              )
            })
          }

      </div>

    </section>
  )
}

export default Main;
