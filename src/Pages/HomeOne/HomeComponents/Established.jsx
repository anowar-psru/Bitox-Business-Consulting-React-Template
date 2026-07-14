import { Link } from 'react-router'
import img_1 from '../../../assets/images/established/h1_established_img_1.png'
import img_2 from '../../../assets/images/established/h1_established_img_2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Container from '../../../Components/SharedComponents/Container';
import PrimaryBtn from '../../../Components/Button/PrimaryBtn';
const Established = () => {
    const sliderData = [
        { id: 1, text: "Since 1998" },
        { id: 2, text: "Since 1998" },
        { id: 3, text: "Since 1998" },
        { id: 4, text: "Since 1998" },
    ];
    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    <div className='mb-10 xl:mb-20'>
                        <div className='flex gap-5'>
                            <div className='lg:w-[17%] hidden md:block'>
                                <img src={img_1} alt="Image" />
                            </div>
                            <div className='w-full lg:w-[66%]'>
                                <h2 className='text-primary text-3xl sm:text-4xl md:text-2xl lg:text-4xl xl:text-6xl xl:leading-17 font-bold text-center'>We are a strategic consulting firm focused on delivering measurable strategy, growth.</h2>
                                {/* Established BTN Here */}
                                <Link to="/contact" className="flex items-center justify-center mt-11">
                                    <PrimaryBtn customClass={"text-white bg-primary"} text={"Learn about us"} frontText={"Learn about us"} backText={"Learn about us"}/>
                                </Link>
                            </div>
                            <div className='lg:w-[17%] hidden md:block'>
                                <img src={img_2} alt="Image" />
                            </div>
                        </div>
                    </div>
                </Container>
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
                                        className="text-primary text-6xl sm:text-[42px] md:text-[56px] 
                                        lg:text-[80px] xl:text-[108px] 2xl:text-[120px] 3xl:text-9xl 4xl:text-[165px] 2xl:leading-40 font-extrabold">
                                        {item.text}
                                    </div>
                                    <div className="w-5.5 h-5.5 bg-primary rounded inline-block"></div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </>
    )
}

export default Established