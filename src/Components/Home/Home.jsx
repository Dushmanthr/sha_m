import React, {useEffect} from 'react'
import './home.scss'
import video from '../../assets/videos/video5.mp4'


import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
//Lets create a react hook to add a scroll animation

useEffect(()=>{
     Aos.init({duration:2000})
}, [])

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} autoPlay loop type = "video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos = "fade-up" className="smallText">
            My Wishes
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            To MY Favourite Girl
          </h1>
        </div> 
      
        

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon' />
            <AiOutlineInstagram className='icon' />
            <SiTripadvisor className='icon' />
          </div>

          <div className="leftIcons">
          <BsListTask className='icon' />
          <TbApps className='icon' />
          </div>
        </div>
      </div>


    </section>
  )
}

export default Home
