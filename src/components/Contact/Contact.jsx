
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-primary text-black sm:min-h-[600px] sm:grid sm:place-items-center duration-300 pt-24 pb-10 sm:pb-0'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                {/* left containt section  */}

                <div className='space-y-5 sm:p-16 pb-6'>
                    <h1 data-aos="fade-up" className='text-2xl sm:text-3xl font-bold'>Best In City</h1>
                    <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Multipal Car Options In Your Place</h1>
                    <p
                        data-aos="fade-up" 
                        className='leading-8 tracking-wide'
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nulla vel architecto, soluta alias assumenda distinctio facilis magnam deserunt illo eius voluptates tenetur, fugit unde porro quis explicabo ullam a?
                    </p>
                    <button 
                        data-aos="fade-up"
                        data-aos-offset="0"
                        className='bg-black text-white px-4 py-2 rounded-lg'>Book Now</button>
                </div> 

                {/* right containt section  */}
                <div data-aos="fade">
                    <div className='w-full md:max-w-[350px] mx-auto'>
                        <h1 className='uppercase text-2xl text-white bg-black px-5 py-3'>Book A Cab</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-5'>
                            <input 
                                className='px-5 py-1 mb-4 border-b-2 border-gray-300 ring-0 focus:ring-0 focus:outline-none'
                                type='text'
                                name=''
                                id=''
                                placeholder='Name'
                            />
                            <input 
                                className='px-5 py-1 mb-4 border-b-2 border-gray-300 ring-0 focus:ring-0 focus:outline-none'
                                type='text'
                                name=''
                                id=''
                                placeholder='Phone'
                            />
                            <input 
                                className='px-5 py-1 mb-4 border-b-2 border-gray-300 ring-0 focus:ring-0 focus:outline-none'
                                type='text'
                                name=''
                                id=''
                                placeholder='Start'
                            />
                            <input 
                                className='px-5 py-1 mb-4 border-b-2 border-gray-300 ring-0 focus:ring-0 focus:outline-none'
                                type='text'
                                name=''
                                id=''
                                placeholder='End'
                            />
                            <textarea 
                                className='px-5 py-1 mb-4 border-b-2 border-gray-300 ring-0 focus:ring-0 focus:outline-none'
                                type='text'
                                name=''
                                id=''
                                placeholder='Message'
                            />
                            <button className='col-span-2 bg-black w-full mt-6 text-white py-2 px-4 rounded-lg'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact