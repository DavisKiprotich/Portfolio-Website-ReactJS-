import React from 'react'
import Typical from 'react-typical'

export default function 
() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href="#">
                        <i className='fa fa-facebook square'></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-linked'></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-github'></i>
                    </a>
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
                </div>
            </div>
        </div>
    </div>
  )
}
