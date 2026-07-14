import SectionTitleTwo from '../SectionTitle/SectionTitleTwo'
import Container from './Container'
import line_shape_1 from '../../assets/images/pages/pricing/line_shape_1.png'
import line_shape_2 from '../../assets/images/pages/pricing/line_shape_2.png'
import PrimaryBtn from '../Button/PrimaryBtn'
import { Link } from 'react-router'
const PricingCard = () => {
    return (
        <>
            <section className='bg-white py-20 lg:py-30'>
                <Container>
                    <div className='max-w-220 mx-auto text-center'>
                        {/* Section Title Here */}
                        <SectionTitleTwo titleBtn={"pricing plan"} titleText={"Our transparent offer ensures clear, fair, and trusted solutions for clients"}/>
                    </div>
                    {/* Pricing Cards Here */}
                    <div className='flex flex-col md:flex-row gap-7.5 mt-15'>
                        {/* Pricing Card 1 */}
                        <div className='bg-[#faf7ef] rounded-md text-primary p-15 md:p-7 lg:p-15'>
                            <p className='text-xl font-medium leading-7.5 pb-3.75'>Pay Per project</p>
                            <span className='text-5xl sm:text-[90px] md:text-5xl lg:text-[90px]  font-bold sm:leading-25'>$3,399+</span>
                            <img className='mt-7.5' src={line_shape_1} alt="line_shape_1" />
                            <div>
                                <div className='flex items-center gap-2.5 mt-15'>
                                    <span className='w-2.5 h-2.5 bg-primary rounded-full inline-block'></span>
                                    <p className='text-lg'>All Analytics Features</p>
                                </div>
                                <div className='flex items-center gap-2.5 mt-5'>
                                    <span className='w-2.5 h-2.5 bg-primary rounded-full inline-block'></span>
                                    <p className='text-lg'> Upgrade Anytime Protection</p>
                                </div>
                                <div className='flex items-center gap-2.5 mt-5'>
                                    <span className='w-2.5 h-2.5 bg-primary rounded-full inline-block'></span>
                                    <p className='text-lg'>40 Days Product Testing</p>
                                </div>
                                <div className='flex items-center gap-2.5 mt-5'>
                                    <span className='w-2.5 h-2.5 bg-primary rounded-full inline-block'></span>
                                    <p className='text-lg'>500 Malware Removal</p>
                                </div>
                                <div className='flex items-center gap-2.5 mt-5'>
                                    <span className='w-2.5 h-2.5 bg-primary rounded-full inline-block'></span>
                                    <p className='text-lg'> 24/7 Live Assistance</p>
                                </div>
                                <p className='text-lg mt-15 mb-5'>Ideal for clear, scoped design needs</p>
                                <Link to="/contact">
                                    <PrimaryBtn customClass="bg-primary text-white" text="Choose your plan" backText={"Choose your plan"} frontText={"Choose your plan"}/>
                                </Link>
                            </div>
                        </div>
                        {/* Pricing Card 2 */}
                        <div className='bg-secondary rounded-md text-white p-15 md:p-7 lg:p-15'>
                            <p className='text-xl font-medium leading-7.5 pb-3.75'>Pay Per project</p>
                            <span className='text-5xl sm:text-[90px] md:text-5xl lg:text-[90px] font-bold sm:leading-25'>$3,399+</span>
                            <img className='mt-7.5' src={line_shape_2} alt="line_shape_2" />
                            <div>
                                <div className='flex items-center gap-2.5 mt-15'>
                                    <span className='w-2.5 h-2.5 bg-white rounded-full inline-block'></span>
                                    <p className='text-lg'>All Analytics Features</p>
                                </div>
                                <div className='flex items-center gap-2.5 mt-5'>
                                    <span className='w-2.5 h-2.5 bg-white rounded-full inline-block'></span>
                                    <p className='text-lg'> Upgrade Anytime Protection</p>
                                </div>
                                <div className='flex items-center gap-2.5 mt-5'>
                                    <span className='w-2.5 h-2.5 bg-white rounded-full inline-block'></span>
                                    <p className='text-lg'>40 Days Product Testing</p>
                                </div>
                                <div className='flex items-center gap-2.5 mt-5'>
                                    <span className='w-2.5 h-2.5 bg-white rounded-full inline-block'></span>
                                    <p className='text-lg'>500 Malware Removal</p>
                                </div>
                                <div className='flex items-center gap-2.5 mt-5'>
                                    <span className='w-2.5 h-2.5 bg-white rounded-full inline-block'></span>
                                    <p className='text-lg'> 24/7 Live Assistance</p>
                                </div>
                                <p className='text-lg mt-15 mb-5'>Ideal for clear, scoped design needs</p>
                                <Link to="/contact">
                                    <PrimaryBtn customClass="bg-white text-primary" text="Choose your plan" backText={"Choose your plan"} frontText={"Choose your plan"}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default PricingCard