import project_img_1 from '../../../assets/images/portfolio/h1_portfolio_img_1.jpg'
import project_img_2 from '../../../assets/images/portfolio/h1_portfolio_img_2.jpg'
import project_img_3 from '../../../assets/images/portfolio/h1_portfolio_img_3.jpg'
import project_img_4 from '../../../assets/images/portfolio/h1_portfolio_img_4.jpg'
import project_img_5 from '../../../assets/images/portfolio/h1_portfolio_img_5.jpg'
import { Link } from 'react-router'
import { FaAngleRight } from 'react-icons/fa'
import Container from '../../../Components/SharedComponents/Container'
import SectionTitleOne from '../../../Components/SectionTitle/SectionTitleOne'
const Project = () => {
    const topProjects = [
        {
            id: 1,
            projectImg: project_img_1,
            title: "Digital Business",
            text: "Marketing",
            year: 2025,
        },
        {
            id: 2,
            projectImg: project_img_2,
            title: "Brand Identity",
            text: "Branding",
            year: 2025,
        },
    ]
    const bottomProjects = [
        {
            id: 1,
            projectImg: project_img_3,
            title: "Digital Business",
            text: "Marketing",
            year: 2025,
        },
        {
            id: 2,
            projectImg: project_img_4,
            title: "Brand Identity",
            text: "Branding",
            year: 2025,
        },
        {
            id: 5,
            projectImg: project_img_5,
            title: "E-Commerce",
            text: "Web Design",
            year: 2025,
        },
    ]
    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    {/* Section Title Here */}
                    <div className="sm:max-w-220 mx-auto pb-15">
                        <SectionTitleOne 
                        textColor="text-primary text-3xl leading-10 sm:text-6xl sm:leading-17 font-bold text-center"
                        text="Real Challenges. Real Solutions. Real Impact." 
                        />
                    </div>
                    {/* Top Project Here */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7.5 mb-7.5'>
                        {
                            topProjects.map((item) => (
                                <div key={item.id} className='relative group overflow-hidden'>
                                    <img className='rounded-md' src={item.projectImg} alt="ProjectImg" />
                                    <div className='bg-white rounded-md absolute left-0 sm:left-5 -bottom-full opacity-0 invisible p-5 sm:p-7.5 group-hover:bottom-0 sm:group-hover:bottom-10 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                                        <Link to="/project-details" className='text-primary text-[26px] leading-9 font-bold hover:text-secondary transition-all duration-300'>{item.title}</Link>
                                        <div className='flex items-center gap-2.5 text-heading font-medium mt-2.5'>
                                            <p>{item.text}</p>
                                            <div className='w-1.5 h-1.5 bg-primary rounded-full inline-block'></div>
                                            <span>({item.year})</span>
                                        </div>
                                    </div>
                                    {/* Arrow Here */}
                                    <div className='absolute -right-full top-0 sm:top-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:right-0 group-hover:top-0 sm:group-hover:top-5 sm:group-hover:right-5 transition-all duration-300 ease-in-out'>
                                        <Link to="/project-details" className='w-12.5 h-12.5 bg-white rounded-md flex items-center justify-center'>
                                            <FaAngleRight className='text-primary text-2xl' />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* Bottom Project Here */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5'>
                        {
                            bottomProjects.map((item) => (
                                <div key={item.id} className='relative group overflow-hidden'>
                                    <img className='rounded-md w-full' src={item.projectImg} alt="ProjectImg" />
                                    <div className='bg-white rounded-md absolute left-0 sm:left-5 -bottom-full opacity-0 invisible p-5 sm:p-7.5 group-hover:bottom-0 sm:group-hover:bottom-10 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                                        <Link to="/project-details" className='text-primary text-[26px] leading-9 font-bold hover:text-secondary transition-all duration-300'>{item.title}</Link>
                                        <div className='flex items-center gap-2.5 text-primary font-medium mt-2.5'>
                                            <p>{item.text}</p>
                                            <div className='w-1.5 h-1.5 bg-primary rounded-full inline-block'></div>
                                            <span>({item.year})</span>
                                        </div>
                                    </div>
                                    {/* Arrow Here */}
                                    <div className='absolute -right-full top-0 sm:top-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:right-0 group-hover:top-0 sm:group-hover:top-5 sm:group-hover:right-5 transition-all duration-300 ease-in-out'>
                                        <Link to="/project-details" className='w-12.5 h-12.5 bg-white rounded-md flex items-center justify-center'>
                                            <FaAngleRight className='text-primary text-2xl' />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* Project BTN Here */}
                    <div className='mt-15'>
                        <Link to="/project" className='border border-[rgba(0,0,0,0.1)] rounded-md text-primary font-medium flex items-center justify-center py-5'>
                            See all case studies
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Project