import brand_img_1 from '../../../assets/images/brand/brand_img_1.png'
import brand_img_2 from '../../../assets/images/brand/brand_img_2.png'
import brand_img_3 from '../../../assets/images/brand/brand_img_3.png'
import brand_img_4 from '../../../assets/images/brand/brand_img_4.png'
import brand_img_5 from '../../../assets/images/brand/brand_img_5.png'
import brand_img_6 from '../../../assets/images/brand/brand_img_6.png'
import brand_img_7 from '../../../assets/images/brand/brand_img_7.png'
import brand_img_8 from '../../../assets/images/brand/brand_img_3.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const Brand = () => {

    const brandItems = [
        brand_img_1,
        brand_img_2,
        brand_img_3,
        brand_img_4,
        brand_img_5,
        brand_img_6,
        brand_img_7,
        brand_img_8,
    ]

    return (
        <>
            <section className='pt-15 pb-20 lg:pb-30 px-6.25'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 7,
                        },
                    }}

                    className="brand-slider"
                >

                    {brandItems.map((item, index) => (
                        <SwiperSlide key={index}>

                            <div className='bg-white rounded-md flex items-center justify-center py-15 border border-gray-200'>

                                <img
                                    src={item}
                                    alt="BrandImg"
                                />

                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>

            </section>
        </>
    )
}

export default Brand