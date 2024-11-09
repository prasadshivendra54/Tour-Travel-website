import React from 'react'
import { 
    FaAndroid,
    FaAppStoreIos,
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaMapMarker,
    FaMousePointer,
    FaTwitter,
    FaWhatsapp 
} from 'react-icons/fa'
import {MdEmail, MdCall} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
        {/* Upper Section Banner */}
        <div className="bg-primary">
            <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
              <p>WE ARE READY TO PICK UP YOU AND DRAP YOUR DESTINATION 24x7</p>
              <h1 className='text-3xl md:text-5xl font-bold '>+91 9876543210</h1>  
            </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="container grid grid-cols-1 sm:grid-cols-3 md-grid-cols-3 gap-10 md-gap-20 py-12 ">

            {/* First Col Section */}
            <div className="space-y-6">
                {/* Hedding */}
                <h1 className='text-2xl py-3 font-bold border-b-8 border-primary'>About Roshni Travel&apos;s</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, deserunt! Illo, neque! Tempora earum maiores vero! Aut pariatur eaque molestiae!
                </p>
                {/* social Links */}
                <div className="flex items-center text-primary gap-3 text-2xl cursor-pointer">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaGoogle/>
                    <FaTwitter/>
                    <FaWhatsapp/>
                </div>
            </div>

            {/* Second Col Section */}
            <div className="space-y-6">
                <h1 className='text-2xl py-3 font-bold border-b-8 border-primary'>Download</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero et esse in sit repellat, provident perspiciatis quo excepturi aliquid!
                </p>
                <h1 className='text-primary text-xl font-semibold flex items-center gap-4'>
                   Android user{" "}
                   <span>
                        <FaAndroid className='text-2xl text-black dark:text-white' />
                    </span> 
                </h1>
                <h1 className='text-primary text-xl font-semibold flex items-center gap-4'>
                   IOS user{" "}
                   <span>
                        <FaAppStoreIos className='text-2xl text-black dark:text-white' />
                    </span> 
                </h1>
            </div>

            {/* Third Col Section */}
            <div className='space-y-6'>
                <h1 className='text-2xl py-3 font-bold border-b-8 border-primary'>
                    Contact
                </h1>
                <div className="flex items-center gap-4">
                    <FaMapMarker/>
                    112 Airport Jabalpur, India
                </div>
                <div className="flex items-center gap-4">
                    <MdCall/>
                    +91 9876543210
                </div>
                <div className="flex items-center gap-4">
                    <MdEmail/>
                    roshnitravels@gmail.com
                </div>
                <div className="flex items-center gap-4">
                    <FaMousePointer/>
                    www.roshnitravels.in
                </div>
            </div>
        </div>
        <p className='text-center py-4 text-sm'>
            Copyright @ 2024. All rights reserved
        </p>
    </div>
  )
}

export default Footer