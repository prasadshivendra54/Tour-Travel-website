import React from 'react'
import Slider from 'react-slick'
import BgImage from '../../Assets/testimonial.png'
import Image from 'next/image';
// import {shivendra} from './Images/Shivendra.png'
// import {aman} from './Images/Aman.png'
// import {vivek} from './Images/Vivek.png'
// import {amit} from './Images/Amit.png'
// import {aniket} from './Images/Aniket.png'

const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat'
}

const TestimonialData = [
    {
        id: 1,
        name: "Shivendra",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, atque",
        img: "https://picsum.photos/101/101"
        // img: {shivendra}
    },
    {
        id: 2,
        name: "Aman",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, atque",
        img: "https://picsum.photos/102/102"
        // img: {aman}
    },
    {
        id: 3,
        name: "Vivek",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, atque",
        img: "https://picsum.photos/103/103"
        // img: {vivek}
    },
    {
        id: 4,
        name: "Amit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, atque",
        img: "https://picsum.photos/104/104"
        // img: {amit}
    },
    {
        id: 5,
        name: "Aniket",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, atque",
        img: "https://picsum.photos/105/105"
        // img: {aniket}
    }
]

const Testimonial = () => {

    // slider config
    const Settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

  return (
    <div style={bgStyle}>
        <div className="bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white">
            <div className="container">
                {/* Header Section */}
                <div className='text-center mb-10'>
                    <h1 data-aos='fade-up' className='text-4xl font-bold '>Testimonials</h1>
                </div>

                {/* Testimonial Card Section */}
                <div data-aos='zoom-in' className="">
                    <Slider {...Settings} >
                        {
                            TestimonialData.map(({ id, name, text, img }) =>{
                                return (
                                    <div key={id} className="my-6">
                                        <div className="flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark relative">
                                            {/* content section  */}
                                            <div className="flex flex-col items-center gap-4">
                                                <p className='text-xs'>{text}</p>
                                            </div>
                                            {/* image section */}
                                            <div className="flex items-center gap-4">
                                                <Image
                                                src={img}
                                                alt={name}
                                                width={102}
                                                height={102}
                                                className='rounded-full'
                                                />
                                                <div className="space-y-2">
                                                    <h1 className='text-xl font-bold text-black/60 dark:text-primary font-curcive'>
                                                        {name}
                                                    </h1>
                                                    <p className='text-sm font-bold text-black/45 dark:text-white'>
                                                        Developer
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial