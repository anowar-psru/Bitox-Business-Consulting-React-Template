import SectionTitleTwo from '../SectionTitle/SectionTitleTwo'
import client_img_1 from '../../assets/images/client/client_img_1.png'
import client_img_2 from '../../assets/images/client/client_img_2.png'
import client_img_3 from '../../assets/images/client/client_img_3.png'
import client_img_4 from '../../assets/images/client/client_img_4.png'
import client_img_5 from '../../assets/images/client/client_img_5.png'
import client_img_6 from '../../assets/images/client/client_img_6.png'
import client_img_7 from '../../assets/images/client/client_img_7.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const ClientCard = () => {
    const clientData = [
        {id: 1, number: "(01)", client_img: client_img_1, title: "Loreipsum", text: "Lorem ipsum dolor sit amet, consectetur."},
        {id: 2, number: "(02)", client_img: client_img_2, title: "Loreipsum", text: "Lorem ipsum dolor sit amet, consectetur."},
        {id: 3, number: "(03)", client_img: client_img_3, title: "Loreipsum", text: "Lorem ipsum dolor sit amet, consectetur."},
        {id: 4, number: "(04)", client_img: client_img_4, title: "Loreipsum", text: "Lorem ipsum dolor sit amet, consectetur."},
        {id: 5, number: "(05)", client_img: client_img_5, title: "Loreipsum", text: "Lorem ipsum dolor sit amet, consectetur."},
        {id: 6, number: "(06)", client_img: client_img_6, title: "Loreipsum", text: "Lorem ipsum dolor sit amet, consectetur."},
        {id: 7, number: "(07)", client_img: client_img_7, title: "Loreipsum", text: "Lorem ipsum dolor sit amet, consectetur."},
        {id: 8, number: "(07)", client_img: client_img_7, title: "Loreipsum", text: "Lorem ipsum dolor sit amet, consectetur."},
    ]
    return (
        <>
            <section className='pb-20 lg:pb-30 px-7.5'>
                <div className='max-w-290 ml-auto xl:pr-20 py-20 lg:py-30'>
                    <SectionTitleTwo titleBtn={"our clients"} titleText={"Enterprise partnerships, built on clarity and craft, driving scalable growth and long-term strategic success"}/>
                </div>
                <div>
                    <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={7}
                    loop={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 },
                        1400: { slidesPerView: 6 },
                        1600: { slidesPerView: 7 },
                    }}
                    className="established-slider"
                >
                    {
                        clientData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='bg-white flex flex-col items-center justify-center rounded-[10px] pt-5 pb-25'>
                                    <span className='text-primary text-sm pb-15'>{item.number}</span>
                                    <img src={item.client_img} alt="client_img" />
                                </div>
                                <div className='flex flex-col items-center justify-center text-center mt-2.5'>
                                    <h3 className='text-lg font-bold text-primary leading-6.5 mb-2'>{item.title}</h3>
                                    <p className='text-sm'>{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                </div>
            </section>
        </>
    )
}

export default ClientCard