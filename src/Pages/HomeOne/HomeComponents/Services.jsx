import service_img_1 from '../../../assets/images/service/h1_service_img_1.jpg'
import service_img_2 from '../../../assets/images/service/h1_service_img_2.jpg'
import service_img_3 from '../../../assets/images/service/h1_service_img_3.jpg'
import service_img_4 from '../../../assets/images/service/h1_service_img_4.jpg'
import service_icon_1 from '../../../assets/images/service/h1_service_icon_1.svg'
import service_icon_2 from '../../../assets/images/service/h1_service_icon_2.svg'
import service_icon_3 from '../../../assets/images/service/h1_service_icon_3.svg'
import service_icon_4 from '../../../assets/images/service/h1_service_icon_4.svg'
import service_icon_5 from '../../../assets/images/service/h1_service_icon_5.svg'
import service_icon_6 from '../../../assets/images/service/h1_service_icon_6.png'
import big_banner_img from '../../../assets/images/service/big_banner_img.jpg'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router'
import SectionTitleOne from '../../../Components/SectionTitle/SectionTitleOne'
import Container from '../../../Components/SharedComponents/Container'

const Services = () => {
    const serviceItems = [
        {
            id:1, 
            icon: service_icon_1, 
            tittle: "Strategy & Planning", 
            arrow_icon: <GoArrowUpRight />, 
            text: "We’re a creative branding and communications company of creative thinkers, strategists, digital innovators,",
            icon_2: service_icon_6,
            text_1: "Strategic roadmapping",
            text_2: "Business model development",
            text_3: "Growth forecasting",
            text_4: "Competitive positioning",
            img: service_img_1,
        },
        {
            id:2, 
            icon: service_icon_3, 
            tittle: "Human Resource", 
            arrow_icon: <GoArrowUpRight />, 
            text: "We’re a creative branding and communications company of creative thinkers, strategists, digital innovators,",
            icon_2: service_icon_6,
            text_1: "Strategic roadmapping",
            text_2: "Business model development",
            text_3: "Growth forecasting",
            text_4: "Competitive positioning",
            img: service_img_3,
        },
        {
            id:3, 
            icon: service_icon_2, 
            tittle: "Research & Analysis", 
            arrow_icon: <GoArrowUpRight />, 
            text: "We’re a creative branding and communications company of creative thinkers, strategists, digital innovators,",
            icon_2: service_icon_6,
            text_1: "Strategic roadmapping",
            text_2: "Business model development",
            text_3: "Growth forecasting",
            text_4: "Competitive positioning",
            img: service_img_2,
        },
        {
            id:4, 
            icon: service_icon_4, 
            tittle: "Risk Management", 
            arrow_icon: <GoArrowUpRight />, 
            text: "We’re a creative branding and communications company of creative thinkers, strategists, digital innovators,",
            icon_2: service_icon_6,
            text_1: "Strategic roadmapping",
            text_2: "Business model development",
            text_3: "Growth forecasting",
            text_4: "Competitive positioning",
            img: service_img_4,
        },
    ]
    return (
        <>
            <section>
                <Container>
                    {/* Service Title Here */}
                    <div className="sm:max-w-220 mx-auto pb-15">
                        <SectionTitleOne 
                        textColor="text-primary text-3xl leading-10 sm:text-6xl sm:leading-17 font-bold text-center"
                        text="Get the most valuable expert service now"
                        />
                    </div>
                    {/* Service Items Here */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 relative before:absolute before:left-[50%] before:translate-x-[-50%] before:top-0 lg:before:w-px before:h-full before:bg-[rgba(0,0,0,0.1)]'>
                        {
                            serviceItems.map((item) => (
                                <div key={item.id} className='bg-white group'>
                                    {/* Service Title Here */}
                                    <Link to="/service" className='flex items-center justify-between border-b border-b-[rgba(0,0,0,0.1)]'>
                                        <div className='flex items-center gap-5 py-6 pl-5 sm:pl-9'>
                                            <img src={item.icon} alt="ServiceIcon" />
                                            <h3 className='text-primary text-xl sm:text-3xl sm:leading-10 font-bold hover:text-secondary transition-all duration-300'>{item.tittle}</h3>
                                        </div>
                                        <div>
                                            <Link className='w-21.5 h-21.5 bg-transparent flex items-center justify-center text-3xl text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300 ease-in-out' to="/service">{item.arrow_icon}</Link>
                                        </div>
                                    </Link>
                                    {/* Service Content Here */}
                                    <div className='flex flex-col sm:flex-row justify-between sm:gap-5 border-b border-b-[rgba(0,0,0,0.1)] px-9 py-6'>
                                        <div className='w-full sm:w-[58%]'>
                                            <p className='pb-6'>{item.text}</p>
                                            <div className='flex flex-col gap-3'>
                                                <div className='flex items-center gap-2.5'>
                                                    <img src={item.icon_2} alt="Sevice_icon" />
                                                    <p>{item.text_1}</p>
                                                </div>
                                                <div className='flex items-center gap-2.5'>
                                                    <img src={item.icon_2} alt="Sevice_icon" />
                                                    <p>{item.text_2}</p>
                                                </div>
                                                <div className='flex items-center gap-2.5'>
                                                    <img src={item.icon_2} alt="Sevice_icon" />
                                                    <p>{item.text_3}</p>
                                                </div>
                                                <div className='flex items-center gap-2.5'>
                                                    <img src={item.icon_2} alt="Sevice_icon" />
                                                    <p>{item.text_4}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full sm:w-[42%] mt-5'>
                                            <img className='rounded-md' src={item.img} alt="ServiceImg" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* Big Banner Img Here */}
                    <div className='pt-20 lg:pt-30'>
                        <img className='rounded-md' src={big_banner_img} alt="big_banner_img" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Services