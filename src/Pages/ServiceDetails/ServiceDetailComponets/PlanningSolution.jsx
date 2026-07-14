import Container from '../../../Components/SharedComponents/Container'
import SectionTitleTwo from '../../../Components/SectionTitle/SectionTitleTwo'
import solution_img from '../../../assets/images/pages/servicepage/solution_img.jpg'
import check_icon from '../../../assets/images/pages/project_details/check_icon.svg'
const PlanningSolution = () => {
    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    <div className="flex flex-col lg:flex-row justify-between gap-14">
                        <div className="w-full lg:w-1/2">
                            <SectionTitleTwo titleText={"Professional Financial Planning Solutions for Long-Term Wealth and Security"}/>
                            <p className='pt-7.5'>Our financial planning process is designed to help individuals and businesses achieve financial stability and growth. We begin by understanding your current financial position, goals, and risk tolerance. Based on this analysis, our experts develop a personalized strategy that includes an investment planning, savings management and risk assessment. We focus creating sustainable that align with your future objectives.</p>
                            {/* Consult Offerings text goes here */}
                            <div className='mt-10'>
                                <h2 className='max-w-200 text-4xl text-primary leading-11 font-bold underline mb-7.5'>Consult Offerings</h2>
                                <div className='max-w-175 flex flex-col gap-y-5 mt-7.5'>
                                    <div className='flex gap-5'>
                                        <div className='w-[10%] sm:w-[5%]'><img src={check_icon} alt="Icon" /></div>
                                        <div className='w-[90%] sm:w-[95%]'>
                                            <p>We believe that effective financial planning requires continuous monitoring and adjustment. As market conditions </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className='w-[10%] sm:w-[5%]'><img src={check_icon} alt="Icon" /></div>
                                        <div className='w-[90%] sm:w-[95%]'>
                                            <p>We regularly review and refine your financial plan to ensure it remains aligned with your goals. </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className='w-[10%] sm:w-[5%]'><img src={check_icon} alt="Icon" /></div>
                                        <div className='w-[90%] sm:w-[95%]'>
                                            <p>By carefully evaluating these factors, we identify opportunities and potential challenges that may impact your financial future.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={solution_img} alt="solution_img" className='w-full rounded-md' />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default PlanningSolution