import Container from './Container'
import service_img_1 from '../../assets/images/pages/servicepage/service_img_1.jpg'
import service_img_2 from '../../assets/images/pages/servicepage/service_img_2.jpg'
import service_img_3 from '../../assets/images/pages/servicepage/service_img_3.jpg'
import service_img_4 from '../../assets/images/pages/servicepage/service_img_4.jpg'
const ServiceCard = () => {
    const serviceData = [
        {
            id: 1,
            service_img: service_img_1,
            subTitle: "01 - Consultancy",
            title: "Business Consultancy",
            text: "Developing smarts, data-driven strategies & practical business plans that turn ideas into profitable scalable outcomes worldwide.",
            featureText_1: "Integrity & Support",
            featureText_2: "Data Entry",
            featureText_3: "Growth forecasting",
        },
        {
            id: 2,
            service_img: service_img_2,
            subTitle: "02 - Planning",
            title: "Financial Planning",
            text: "Developing smarts, data-driven strategies & practical business plans that turn ideas into profitable scalable outcomes worldwide.",
            featureText_1: "Integrity & Support",
            featureText_2: "Data Entry",
            featureText_3: "Growth forecasting",
        },
        {
            id: 3,
            service_img: service_img_3,
            subTitle: "03 - Tax & Vat",
            title: "Vat & Tax Consultancy",
            text: "Developing smarts, data-driven strategies & practical business plans that turn ideas into profitable scalable outcomes worldwide.",
            featureText_1: "Integrity & Support",
            featureText_2: "Data Entry",
            featureText_3: "Growth forecasting",
        },
        {
            id: 4,
            service_img: service_img_4,
            subTitle: "04 - Market Analysis",
            title: "Competitive Analysis",
            text: "Developing smarts, data-driven strategies & practical business plans that turn ideas into profitable scalable outcomes worldwide.",
            featureText_1: "Integrity & Support",
            featureText_2: "Data Entry",
            featureText_3: "Growth forecasting",
        }
    ]
    return (
        <>
            <section>
                <Container>
                    <div>
                        {
                            serviceData.map(({ id, service_img, subTitle, title, text, featureText_1, featureText_2, featureText_3 }) => (
                                <div key={id} className='flex flex-col md:flex-row items-center gap-20 bg-white hover:bg-secondary transition-all duration-300 group mb-7.5 last:mb-0'>
                                    <div className='w-full md:w-auto'>
                                        <img src={service_img} alt={title} className='w-full' />
                                    </div>
                                    <div className='w-full md:max-w-120 text-primary group-hover:text-white group-hover:transition-all group-hover:duration-300 p-3'>
                                        <h3 className='text-base font-medium'>{subTitle}</h3>
                                        <h2 className='text-2xl sm:text-4xl font-bold sm:leading-11 py-5 sm:py-7.5'>{title}</h2>
                                        <p className='text-paragraph group-hover:text-white group-hover:transition-all group-hover:duration-300'>{text}</p>
                                        <div className='flex flex-col gap-y-2.5 pt-7.5'>
                                            <div className='flex items-center gap-2.5 bg-white border border-[rgba(0,0,0,0.1)] rounded-full w-fit group-hover:bg-secondary group-hover:border-[rgba(255,255,255,0.1)] px-5 py-1 group-hover:transition-all group-hover:duration-300'>
                                                <span className="w-2.5 h-2.5 bg-primary rounded-full inline-block group-hover:bg-white group-hover:transition-all group-hover:duration-300"></span>   
                                                <p>{featureText_1}</p>
                                            </div>
                                            <div className='flex items-center gap-2.5 bg-white border border-[rgba(0,0,0,0.1)] rounded-full w-fit group-hover:bg-secondary group-hover:border-[rgba(255,255,255,0.1)] px-5 py-1 group-hover:transition-all group-hover:duration-300'>
                                                <span className="w-2.5 h-2.5 bg-primary rounded-full inline-block group-hover:bg-white group-hover:transition-all group-hover:duration-300"></span>   
                                                <p>{featureText_2}</p>
                                            </div>
                                            <div className='flex items-center gap-2.5 bg-white border border-[rgba(0,0,0,0.1)] rounded-full w-fit group-hover:bg-secondary group-hover:border-[rgba(255,255,255,0.1)] px-5 py-1 group-hover:transition-all group-hover:duration-300'>
                                                <span className="w-2.5 h-2.5 bg-primary rounded-full inline-block group-hover:bg-white group-hover:transition-all group-hover:duration-300"></span>   
                                                <p>{featureText_3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ServiceCard