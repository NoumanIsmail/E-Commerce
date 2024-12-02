import React from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { instagram, twitter, whatsapp, youtube } from '../../assets/images'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
 '../../assets/images'
const Footer = () => {
  return (
    <footer className='border rounded-lg w-full flex flex-wrap  justify-between ' >
      <div className='w-3/12 flex flex-col justify-around'>
      <img src={logo} alt="" className='w-2/3 object-contain'/>
      <div className='text-xl font-light'>Certified &copy;</div>
      <div className='text-xl font-light'>Since 2024</div>
      </div>
      <div className='w-2/6'>
      <h1 className="text-3xl text-center p-2  border-spacing-4 font-thin mb-5">
        Quick Links
      </h1>
        <ul className='flex items-center justify-center'>
          <li className='px-[2px] text-sm'><NavLink to={'/'}>Home</NavLink></li>
          <li className='px-[2px] text-sm'><NavLink to={'/'}>About</NavLink></li>
          <li className='px-[2px] text-sm'><NavLink to={'/'}>SignUp</NavLink></li>
          <li className='px-[2px] text-sm'><NavLink to={'/'}>Login</NavLink></li>
        </ul>
        <h1 className="text-3xl text-center p-1  border-spacing-4 font-thin mb-2">
        Socials
      </h1>
      <ul className='flex items-center justify-evenly '>
          <li className='text-2xl '><NavLink to={'/'}> <FaYoutube /> </NavLink></li>
          <li className='text-2xl mb-2'><NavLink to={'/'}> <FaLinkedin /></NavLink></li>
          <li className='text-2xl mb-2'><NavLink to={'/'}> <FaFacebook/> </NavLink></li>
          <li className='text-2xl mb-2'><NavLink to={'/'}><FaLinkedin /> </NavLink></li>
        </ul>
      </div>
      <div className='w-2/6'>
      <h1 className="text-3xl text-center p-1  border-spacing-4 font-thin mb-2">
        Location
      </h1>
      <div className='w-full mb-2 overflow-hidden'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.181511804674!2d66.93404614999997!3d24.956063100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36b11ed7e8a95%3A0xfa7bf82d0bd4fa1f!2sYusuf%20Goth%20Keamari%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1733141057524!5m2!1sen!2s" width={250} height={200} style={{border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>
      </div>
    </footer>
  )
}

export default Footer