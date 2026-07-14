import Container from '../../../Components/SharedComponents/Container'
import line_shape from '../../../assets/images/pages/aboutpage/line_shape.svg'
import about_banner_img from '../../../assets/images/pages/aboutpage/about_page_img.jpg'
const Mission = () => {
    return (
        <>
            <section className='py-10 lg:py-30'>
                <Container>
                    <div className='hidden md:block'>
                        <img src={line_shape} alt="line_shape" />
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-10 py-15 relative'>
                        <div className='w-full lg:w-163'>
                            <h2 className='text-primary text-4xl leading-11 font-bold pb-6.25'>Our Mission</h2>
                            <p>Enterprise partnerships, built on clarity and craft, are the foundation of sustainable 
                            growth and long term success. By aligning strategic goals & thoughtful executions
                            can create meaningful collaborations that drives innovation & measurable value of 
                            strong partnerships enable business to leverage shared expertise expand market 
                            opportunities, and respond effectively</p>
                        </div>
                        <span className='md:absolute md:left-[50%] md:-top-0.5 md:h-full md:w-px md:bg-primary'></span>
                        <div className='w-full lg:w-163 md:text-end'>
                            <h2 className='text-primary text-4xl leading-11 font-bold pb-6.25'>Our Vision</h2>
                            <p>Enterprise partnerships, built on clarity and craft, are the foundation of sustainable 
                            growth and long term success. By aligning strategic goals & thoughtful executions
                            can create meaningful collaborations that drives innovation & measurable value of 
                            strong partnerships enable business to leverage shared expertise expand market 
                            opportunities, and respond effectively</p>
                        </div>
                    </div>
                    {/* About Big Banner Img Here */}
                    <div>
                        <img className='rounded-md' src={about_banner_img} alt="about_banner_img" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Mission