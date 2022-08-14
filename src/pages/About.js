import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
const About = (props) => {
    const {openAbout, setOpenAbout} = props
  return (
    <div className={openAbout ? 'about__container--deactive' : 'about__container'}>
        <div className="about__content">
            <h2>About</h2>
            <p>
                Perfect4 and awesome template to present your future product or
                service. Hooking audience attention is all in the opener.
                Perfect and awesome template to present your future product or
                service. Hooking audience attention is all in the opener.
                Perfect and awesome template to present your future product or
                service. Hooking audience attention is all in the opener.
                Perfect and awesome template to present your future product or
                service. Hooking audience attention is all in the opener.
            </p>
            </div>
            <div className='closeBtn' onClick={() => setOpenAbout(true)}>
                <AiOutlineClose className='closeBtn__icon'/>
            </div>
    </div>
  )
}

export default About