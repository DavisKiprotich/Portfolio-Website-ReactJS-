import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function 
() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='cols'>
                    <div className="cols-icon">
                        <a href="#">
                            <i className='fa fa-facebook square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-instagram square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-twitter square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-linkedin-square '></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-github square'></i>
                        </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text highlighted-text'>
                        {" "}
                        Kiprotich Davis
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Front End Developer",
                                1000,
                                "React Developer",
                                1000,
                                "Electrical Engineer",
                                1000,
                                "Telecommunications Engineer",
                                1000,
                            ]}
                            />
                        </h1>
                    </span>
                    <span className='profile-details-tagline'>
                        <h2>Feel the Fear and Do it anyway</h2>
                    </span>
                    <span className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Hire Me {" "}
                        </button>
                        <a href="Kiprotich Davis Official.docx" download="Kiprotich Davis Official.docx">
                            <button className="btn highlighted-btn">My Resume</button>
                        </a>
                    </span>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}
