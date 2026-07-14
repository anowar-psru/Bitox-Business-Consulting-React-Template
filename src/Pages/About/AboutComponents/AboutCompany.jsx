import SectionTitleTwo from '../../../Components/SectionTitle/SectionTitleTwo'
import SecondaryBtn from '../../../Components/Button/SecondaryBtn'
import video_img from '../../../assets/images/pages/aboutpage/video_img.jpg'
const AboutCompany = () => {
    return (
        <>
            <section className='relative'>
                <div className='lg:absolute lg:left-0 lg:top-[50%] lg:-translate-y-1/2 lg:w-[40%] 2xl:w-[55%]'>
                    <img src={video_img} alt="video_img" />
                </div>
                <div className='bg-white lg:ml-[37%] py-15 px-5 lg:px-0 sm:px-10 2xl:py-50 lg:pl-20 2xl:pl-80'>
                    <div className='lg:max-w-133'>
                        {/* Section Title Here */}
                        <div>
                            <SectionTitleTwo titleBtn={"about company"} titleText={"Creating trust through creativity and powerful business analytics"} />
                        </div>
                        <p className='py-8'>Enterprise partnerships, built on clarity & craft, are the foundation 
                        of sustainable growth and long term success. By aligning strategic 
                        goals & thoughtful executionscan create meaningful collaborations 
                        that drives innovation</p>
                        {/* Btn Here */}
                        <div>
                            <SecondaryBtn btnText={"Get started now"}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCompany