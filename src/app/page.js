"use client"
import AOS from 'aos';
import React, { useEffect } from 'react'
import "aos/dist/aos.css"


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Navbar from '@/components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Contact from '../components/Contact/Contact';
import BestCabs from '../components/BestCabs/BestCabs';
import About from '../components/About/About';
import Testimonial from '../components/Testimonial/Testimonial';
// import Footer from '@/components/Footer/Footer';

const Page = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      disable: 100
    });
    AOS.refresh();
  }, []);

  return (
    <div className='dark:bg-dark dark:text-white'>
      {/* <Navbar /> */}
      <Hero />
      <Contact />
      <BestCabs />
      <About />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  )
}

export default Page
