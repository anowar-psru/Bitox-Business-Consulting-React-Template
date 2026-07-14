import Container from './Container'
import SectionTitleTwo from '../SectionTitle/SectionTitleTwo'
import CounterUp from '../../Hooks/CounterUp'
import team_shape from '../../assets/images/team/line_shape.png'
import team_img_1 from '../../assets/images/team/h2_team_img_1.jpg'
import team_img_2 from '../../assets/images/team/h2_team_img_2.jpg'
import team_img_3 from '../../assets/images/team/h2_team_img_3.jpg'
import team_img_4 from '../../assets/images/team/team_img_4.jpg'
import team_img_5 from '../../assets/images/team/team_img_5.jpg'
import team_img_6 from '../../assets/images/team/team_img_6.jpg'
import { Link } from 'react-router'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const TeamCard = ({limit}) => {
    const TeamData = [
        {
            id: 1,
            team_img: team_img_1,
            name: "Julian Hayes", path: "/team",
            socialMedia: [
                {media: "Facebook", path: "/"},
                {media: "Twitter", path: "/"},
                {media: "Linkdedin", path: "/"},
            ]
        },
        {
            id: 2,
            team_img: team_img_2,
            name: "Jamie Rivers", path: "/team",
            socialMedia: [
                {media: "Facebook", path: "/"},
                {media: "Twitter", path: "/"},
                {media: "Linkdedin", path: "/"},
            ]
        },
        {
            id: 3,
            team_img: team_img_3,
            name: "Avery Blake", path: "/team",
            socialMedia: [
                {media: "Facebook", path: "/"},
                {media: "Twitter", path: "/"},
                {media: "Linkdedin", path: "/"},
            ]
        },
        {
            id: 4,
            team_img: team_img_4,
            name: "Warren Buffett", path: "/team",
            socialMedia: [
                {media: "Facebook", path: "/"},
                {media: "Twitter", path: "/"},
                {media: "Linkdedin", path: "/"},
            ]
        },
        {
            id: 5,
            team_img: team_img_5,
            name: "Elon Musk", path: "/team",
            socialMedia: [
                {media: "Facebook", path: "/"},
                {media: "Twitter", path: "/"},
                {media: "Linkdedin", path: "/"},
            ]
        },
        {
            id: 6,
            team_img: team_img_6,
            name: "Richard Branson", path: "/team",
            socialMedia: [
                {media: "Facebook", path: "/"},
                {media: "Twitter", path: "/"},
                {media: "Linkdedin", path: "/"},
            ]
        },
    ]
    // limit থাকলে ওই পর্যন্ত show করবে
    const displayedTeam = limit
        ? TeamData.slice(0, limit)
        : TeamData
    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    {/* Section Title Here */}
                    <div className='flex flex-col lg:flex-row justify-between items-end mb-15'>
                        <div className='w-full lg:w-[50%]'>
                            <SectionTitleTwo titleBtn={"meet our experts"} titleText={"Global business experts on stage worldwide today live"}/>
                        </div>
                        <div className='w-full lg:w-[50%] flex lg:justify-end mt-20 lg:mt-0'>
                            <div className='relative'>
                                <img src={team_shape} alt="team_shape" />
                                <div className='flex flex-col md:max-w-101 absolute left-6 bottom-5 '>
                                    <span className='text-primary text-[70px] leading-14.5 font-medium pb-5'>
                                        <CounterUp end={99} suffix='%'/>
                                    </span>
                                    <p className='text-primary text-xl font-medium'>Worldwide client satisfaction through lasting partnerships</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Members Here */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {displayedTeam.map((data) => (
                            <SwiperSlide key={data.id}>
                                <div>
                                    <img
                                        className='rounded-md w-full'
                                        src={data.team_img}
                                        alt='MemberImg'
                                    />

                                    <div className='bg-white rounded-md py-7.5 mt-5'>
                                        <Link
                                            to={data.path}
                                            className='text-primary text-[26px] text-center font-bold leading-9 block hover:text-secondary transition-all duration-300'
                                        >
                                            {data.name}
                                        </Link>

                                        <div className='flex items-center justify-center gap-2.5 pt-5 flex-wrap'>
                                            {data.socialMedia.map((item, index) => (
                                                <Link
                                                    to={item.path}
                                                    key={index}
                                                    className='text-[14px] font-medium leading-5.5 uppercase border border-[rgba(0,0,0,0.1)] rounded-full hover:text-primary py-1 px-2 sm:px-5'
                                                >
                                                    {item.media}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default TeamCard