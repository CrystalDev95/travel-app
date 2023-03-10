import React from 'react'
import './Footer.css'
import video from '../../Assests/video.mp4'
import './Footer.css'
import {FiSend} from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'


const Footer = () => {
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type='text' placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
              SEND
              <FiSend className='icon' />
            </button>
          </div>
        </div>


        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
            <a href="#" className='logo flex'>
              <MdOutlineTravelExplore className='icon' />
              Travel.
            </a>
            </div>
          

          <div className="footerParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat corrupti quidem et neque optio impedit. Libero veniam iusto temporibus rerum quaerat molestiae tempore quae dolor, deleniti nam autem commodi.
          </div>

          <div className="footerSocials flex">
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
            <FaTripadvisor className='icon'/>
          </div>
          </div>

          <div className="footerLinks grid">

          {/* {group one} */}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>

            </div>


           {/* {group two } */}
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rental cars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trip Advisor
              </li>

            </div>

              {/* {group Three} */}
              <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>

            </div>



          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer