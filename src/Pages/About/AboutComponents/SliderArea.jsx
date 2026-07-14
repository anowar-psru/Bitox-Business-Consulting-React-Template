import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Container from '../../../Components/SharedComponents/Container';
import SecondaryBtn from '../../../Components/Button/SecondaryBtn';
import { Link } from 'react-router';

const SliderArea = () => {
    const sliderData = [
        { id: 1, text: "Business" },
        { id: 2, text: "Business" },
        { id: 3, text: "Business" },
        { id: 4, text: "Business" },
    ];
    return (
        <>
            <section className='bg-white py-20 lg:py-30'>
                {/* Established Swiper js slider here */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        // 992: { slidesPerView: 3 },
                    }}
                    className="established-slider"
                >
                    {
                        sliderData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex items-center justify-center gap-7.5 2xl:gap-15 pt-5 pb-5">
                                    <div 
                                        className="text-primary text-7xl sm:text-[52px] md:text-[76px] 
                                        lg:text-[100px] xl:text-[128px] 
                                        2xl:text-[140px] 3xl:text-[160px] 4xl:text-[205px] 2xl:leading-40 font-extrabold">
                                        {item.text}
                                    </div>
                                    <div className="w-5.5 h-5.5 bg-primary rounded inline-block"></div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                    <Container>
                        <div className='max-w-200 mx-auto text-center pt-15'>
                            <h3 className='text-primary text-3xl sm:text-[50px] font-bold sm:leading-15 underline'>Have an idea in your mind? Let’s make something great together</h3>
                            {/* Button Center */}
                            <div className='flex justify-center mt-8'>
                                <Link to="/contact">
                                    <SecondaryBtn btnText={"Let’s build together"} />
                                </Link>
                            </div>
                        </div>
                    </Container>
            </section>
        </>
    )
}

export default SliderArea