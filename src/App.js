import React, { useState } from 'react';
import './App.css';
import 'fontsource-roboto';
import useWebAnimations, { bounceInDown, fadeInDown, fadeInRight } from '@wellyshen/use-web-animations';
import Logo from './images/Logo.svg';
import President from './images/president.png';
import PanacloudLogo from './images/panacloudLogo.svg';
import Psx2 from './images/psx2.png';
import SaylaniLogo from './images/saylaniLogo.png';
import FooterIcon from './images/panacloudfootericon.png';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import Youtube from 'react-youtube';

function App() {

  const { keyframes, timing } = bounceInDown;
  const { ref: nav } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      duration: timing.duration * 2
    }
  })
  const { ref: pres_img } = useWebAnimations({
    keyframes: [{ transform: "none", opacity: 1, offset: 0 },
    { transform: "scale3d(1.05, 1.05, 1.05)", opacity: 1, offset: 0.5 },
    { transform: "none", opacity: 1, offset: 1 }
    ],
    timing: {
      easing: 'ease-in-out',
      duration: 15000,
      fill: "both"
    }
  })
  const { keyframes: keyframes_text, timing: timing_text } = fadeInDown;
  const { keyframes: keyframes_h2, timing: timing_h2 } = fadeInRight;

  const { ref: text } = useWebAnimations({
    keyframes: keyframes_text,
    timing: {
      ...timing_text,
      duration: 2000,
    }
  })
  const { ref: h2 } = useWebAnimations({
    keyframes: keyframes_h2,
    timing: {
      ...timing_h2,
      duration: 1500,
      delay: 1000
    }
  })
  const [show, setShow] = useState({
    course1: false, course2: false, course3: false, course4: false,
  })

  return (

    <div>
      <div id='navbar' ref={nav} >
        <img src={Logo} alt='PIAIC logo' />
      </div>

      <div id='about' ref={pres_img} >
        <div id='about_img'>
          <img src={President} id='president' alt='President' />
        </div>
        <div id='about_text'>
          <h1 ref={text}>
            Presidential Initiative
              </h1>
          <h2 ref={h2}>
            for Artificial Intelligence & Computing (PIAIC)
              </h2>
          <ScrollAnimation animateIn='animate__fadeInUp' animateOnce={true}>
            <p>
              The mission of PIAIC is to reshape Pakistan by revolutionizing education, research,
              and business by adopting latest, cutting-edge technologies. Experts are calling this
              the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science,
              cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
            </p>
          </ScrollAnimation>

        </div>
      </div >

      <div id='available_programs'>

        <ScrollAnimation animateIn='animate__slideInDown' animateOnce={true}>
          <h2 id='courses_head'>
            Available Programs
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn='animate__slideInUp' animateOnce={true}>

          <Grid container spacing={2} id='courses_div'>

            <Grid item className='course_grid' xs={12} sm={6} md={3}>
              <Paper onMouseEnter={() => setShow(state => ({ ...state, course1: true }))} onMouseLeave={() => setShow(state => ({ ...state, course1: false }))} className='courses' id={!show.course1 ? 'ai' : 'ai_d'} elevation={3}>
                {!show.course1 && <h3 className='course_heading'>
                  Artificial Intelligence
                </h3>}
                {show.course1 &&
                  <ScrollAnimation animateIn='animate__zoomIn'>
                    <p className='detail'>
                      <b className='bold'>  Artificial Intelligence</b><br />
              A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
              GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.
            </p>
                  </ScrollAnimation>
                }
              </Paper>
            </Grid>

            <Grid item className='course_grid' xs={12} sm={6} md={3}>
              <Paper className='courses' id={!show.course2 ? 'cnc' : 'cnc_d'} onMouseEnter={() => setShow(state => ({ ...state, course2: true }))} onMouseLeave={() => setShow(state => ({ ...state, course2: false }))} elevation={3}>
                {!show.course2 && <h3 className='course_heading'>
                  Cloud Native and Mobile Web
            </h3>}
                {show.course2 &&
                  <ScrollAnimation animateIn='animate__zoomIn'>
                    <p className='detail'>
                      <b className='bold'>Cloud Native and Mobile Web Computing Specialist</b><br />
              A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
              GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.
            </p>
                  </ScrollAnimation>
                }
              </Paper>
            </Grid>

            <Grid item className='course_grid' xs={12} sm={6} md={3}>
              <Paper className='courses' id={!show.course3 ? 'blockchain' : 'blockchain_d'} onMouseEnter={() => setShow(state => ({ ...state, course3: true }))} onMouseLeave={() => setShow(state => ({ ...state, course3: false }))} elevation={3}>
                {!show.course3 && <h3 className='course_heading'>
                  Blockchain
            </h3>}
                {show.course3 &&
                  <ScrollAnimation animateIn='animate__zoomIn'>
                    <p className='detail'>
                      <b className='bold'>Blockchain Specialist</b><br />
              A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN,
            FINTECH AND SMART CONTRACTS</p>
                  </ScrollAnimation>
                }
              </Paper>
            </Grid>

            <Grid item className='course_grid' xs={12} sm={6} md={3}>
              <Paper className='courses' id={!show.course4 ? 'iot' : 'iot_d'} onMouseEnter={() => setShow(state => ({ ...state, course4: true }))} onMouseLeave={() => setShow(state => ({ ...state, course4: false }))} elevation={3}>
                {!show.course4 &&
                  <h3 className='course_heading'>
                    Internet of Things and AI
                    </h3>}
                {show.course4 &&
                  <ScrollAnimation animateIn='animate__zoomIn'>
                    <p className='detail'>
                      <b className='bold'>Internet of Things and AI Specialist</b><br />
              A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS
              GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI
            </p>
                  </ScrollAnimation>
                }
              </Paper>
            </Grid>

          </Grid>
        </ScrollAnimation>
      </div>
      <div id='video_div'>
        <ScrollAnimation duration={2} animateIn='animate__fadeInRight' animateOnce={true}>
          <h1>
            VIDEOS
          </h1>
        </ScrollAnimation>
        <ScrollAnimation duration={2} animateIn='animate__fadeIn' animateOnce={true}>
          <Youtube
            id='video' videoId='m4g0zd4E_bo' opts={{ height: '450', width: '700' }}
          />
        </ScrollAnimation>
        <ScrollAnimation duration={2} animateIn='animate__fadeInLeft' animateOnce={true}>
          <h2>
            PIAIC Offering Free First Quarter Classes Online
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={1000} duration={2} animateIn='animate__fadeInLeft' animateOnce={true}>
          <p>
            The mission of PIAIC is to reshape Pakistan by revolutionizing education, research,
            <br />
            and business by adopting latest, cutting-edge technologies.
          </p>
        </ScrollAnimation>
      </div>

      <div id='partners_div'>
        <ScrollAnimation duration={2} animateIn='animate__bounceInDown' animateOnce={true}>
          <h2 id='partners'>Strategic Partners</h2>
        </ScrollAnimation>
        <div id='logos_div'>
          <ScrollAnimation className='logos' delay={200} duration={2} animateIn='animate__bounceInUp' animateOnce={true}>
            <a href='https://www.panacloud.ai/'>
              <img id='panacloud' src={PanacloudLogo} alt='Panacloud Logo' />
            </a>
          </ScrollAnimation>
          <ScrollAnimation className='logos' delay={600} duration={2} animateIn='animate__bounceInUp' animateOnce={true}>
            <a href='https://www.psx.com.pk/'>
              <img id='psx' src={Psx2} alt='Psx Logo' />
            </a>
          </ScrollAnimation>
          <ScrollAnimation className='logos' delay={1000} duration={2} animateIn='animate__bounceInUp' animateOnce={true}>
            <a href='http://www.saylaniwelfare.com/'>
              <img id='saylani' src={SaylaniLogo} alt='Saylani Logo' />
            </a>
          </ScrollAnimation>
        </div>
      </div>

      <div id='contacts'>
        <div>
          <p>PIAIC Headquarters</p>
          <LocationOnIcon className='icons' />
          <span>Plot 245/2 M, Block 6 PECHS, Karachi, Sindh 75100, Pakistan</span>
          <br /><PhoneIcon className='icons' />
          <span>+92-308-2220203 (WhatsApp as well)</span>
        </div>
        <div>
          <p>PIAIC Helpline</p>
          <PhoneIcon className='icons' />
          <span>+92-308-2220203 (WhatsApp as well)</span>
        </div>
        <div>
          <p>Connect with us</p>
          <a href='https://www.facebook.com/groups/piaic/'>
            <FacebookIcon className='icons' id='fb' />
          </a>
          <a href='https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg'>
            <YouTubeIcon className='icons' id='yt' />
          </a>
        </div>
      </div>
      <div id='foot'>
        <p>Powered by</p>
        <a href='https://www.panacloud.ai/'>
          <img src={FooterIcon} alt='Panacloud Icon' />
        </a>
      </div>

    </div >
  );
}

export default App;