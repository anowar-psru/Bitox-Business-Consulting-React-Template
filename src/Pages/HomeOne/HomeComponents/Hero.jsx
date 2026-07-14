import React, { useState } from 'react'
import { Link } from 'react-router'

import slider_img_1 from '../../../assets/images/banner/h1_banner_img_1.jpg'
import slider_img_2 from '../../../assets/images/banner/h1_banner_img_2.jpg'
import slider_img_3 from '../../../assets/images/banner/h1_banner_img_3.jpg'

import slider_thumb_1 from '../../../assets/images/banner/h1_banner_thumb_1.jpg'
import slider_thumb_2 from '../../../assets/images/banner/h1_banner_thumb_2.jpg'
import slider_thumb_3 from '../../../assets/images/banner/h1_banner_thumb_3.jpg'

import { IoMdPlay } from 'react-icons/io'

// Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// Swiper Modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules'

const Hero = () => {
    const bannerPoints = ["Financial Planning", "Human Resource", "Organisations", "Research & Analysis", "Risk Management"]
    // Main Slider Images
    const sliderImages = [
        slider_img_1,
        slider_img_2,
        slider_img_3,
    ]

    // Thumbnail Images
    const sliderThumbs = [
        slider_thumb_1,
        slider_thumb_2,
        slider_thumb_3,
    ]

    // Thumbs State
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    return (
        <>
            <section>
                <div className='relative'>
                    <div className='max-w-120 lg:max-w-85 2xl:max-w-120 bg-white mx-auto rounded-md p-9 lg:absolute lg:left-[4%] lg:-top-35 2xl:left-[8%] 2xl:-top-48 z-50'>
                        <h2 className='text-4xl sm:text-[46px] lg:text-3xl lg:leading-9 sm:leading-14 2xl:text-[46px] 2xl:leading-14 font-bold text-primary'>Building the right foundation of your business</h2>
                        <p className='text-lg py-7.5 lg:pb-20 xl:pb-43'>We are <span className='text-primary font-semibold'>dedicated to guiding</span> you on your financial journey with expertise integrity and a personalized approach, always.</p>
                        {/* Banner BTN Here */}
                        <div className='bg-primary rounded-md text-white flex justify-between items-center p-1.25'>
                            <Link className='font-medium pl-6' to="/contact">Get Consultation</Link>
                            <Link className='w-12.5 h-12.5 rounded-md bg-secondary text-xl flex items-center justify-center'>
                                <IoMdPlay />
                            </Link>
                        </div>
                    </div>
                    <Swiper
                        loop={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                        className="mySwiper2"
                    >
                        {
                            sliderImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={image}
                                        alt={`Slider ${index + 1}`}
                                        className='w-full object-cover'
                                    />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                     {/* Thumbnail Slider */}
                    <div className='absolute right-5 bottom-5 z-40 w-70 lg:w-90'>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {
                                sliderThumbs.map((thumb, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={thumb}
                                            alt={`Thumbnail ${index + 1}`}
                                            className='rounded-md cursor-pointer'
                                        />
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </div>
                </div>
                {/* Banner Points BTN Here */}
                <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 items-center gap-5 mx-5 mt-5'>
                    {
                        bannerPoints.map((item, index) => (
                            <div key={index}>
                                <span className='text-heading font-medium border border-[rgba(0,0,0,0.1)] rounded-md flex items-center justify-center py-5'>{item}</span>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Hero