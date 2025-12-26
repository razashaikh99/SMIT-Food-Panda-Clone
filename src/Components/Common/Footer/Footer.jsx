import React from 'react'
import Logo from '../../../assets/logo/logo.svg'
import FacebookIcon from '../../../assets/icons/facebook.svg'
import InstaIcon from '../../../assets/icons/insta.svg'
import LinkedinIcon from '../../../assets/icons/linkedin.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img className='mb-8' src={Logo} alt="" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Navigate</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-primary">Home</a></li>
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Newsroom</a></li>
                <li><a href="#" className="hover:text-primary">Partners</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Collaborate</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-primary">Explore careers</a></li>
                <li><a href="#" className="hover:text-primary">Become a rider</a></li>
                <li><a href="#" className="hover:text-primary">Partner with us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Follow us on</h3>
              <div className="flex gap-4 text-gray-400">
                <img src={FacebookIcon} alt="" />
                <img src={LinkedinIcon} alt="" />
                <img src={InstaIcon} alt="" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>Copyright © 2025 foodpanda</p>
            <Link to="/" className="hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
