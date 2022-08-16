import React from 'react'
import { fb, insta, linkedin } from '../../images'

import "./Footer.css"
const Footer = ({theme}) => {
  return (
    <div className="footer" style={{background:`${theme}`}}>
      <div className='leftFooter'>
        <h5>About Me</h5>
        <p>
          Hey, My name is <span>Gaurav Kumar</span>. I am a full-stack Developer and a tutor on youtube channel called <b> tier3wale</b>
        </p>

        <h3>	&#169; Copyright | All rights reserved by <span>Gaurav</span></h3>

      </div>

      <div className='rightFooter'>
        <h6>Social Media</h6>

        <div className="socialMedia">
          <a href="https://github.com/Gaurav-r-a-j" target="blank">
            <img src={fb} alt="" />
          </a>
          {/* <a href="https://www.youtube.com/channel/UCe7sES5WF8gSE0rX_lHSL4A/featured" target="blank">
            <img src={insta} alt="" />
          </a> */}
          <a href="https://www.instagram.com/gaurav_r_a_j/" target="blank">
            <img src={insta} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/gaurav2raj/" target="blank">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
