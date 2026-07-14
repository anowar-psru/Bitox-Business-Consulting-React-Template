import Container from '../../../Components/SharedComponents/Container'
import project_details_img_1 from '../../../assets/images/pages/project_details/project_details_1.jpg'
import project_details_img_2 from '../../../assets/images/pages/project_details/project_details_2.jpg'
import check_icon from '../../../assets/images/pages/project_details/check_icon.svg'
const ProjectDetailsBody = () => {
    const project_details_info = [
        {
            id: 1,
            title: "Service",
            text: "Visual Identity, Branding"
        },
        {
            id: 2,
            title: "Client",
            text: "Nicolas Digital Agency"
        },
        {
            id: 3,
            title: "Date",
            text: "November 12, 2025"
        },
        {
            id: 4,
            title: "Location",
            text: "752 Ocean Drive, FL 33139"
        },
    ]
    const processPoints = [
        {
            id: 1,
            pointTitle: "Business & Digital Assessment",
            text: "We believe that effective financial planning requires continuous monitoring and adjustment. As market conditions and personal circumstances change, we regularly review and refine your financial plan to ensure it remains aligned with your goals."
        },
        {
            id: 2,
            pointTitle: "Strategic Digital Planning",
            text: "We believe that effective financial planning requires continuous monitoring and adjustment. As market conditions and personal circumstances change, we regularly review and refine your financial plan to ensure it remains aligned with your goals."
        },
        {
            id: 3,
            pointTitle: "Technology Integration & Execution",
            text: "We believe that effective financial planning requires continuous monitoring and adjustment. As market conditions and personal circumstances change, we regularly review and refine your financial plan to ensure it remains aligned with your goals."
        },
        {
            id: 4,
            pointTitle: "Monitoring, Optimization & Growth",
            text: "We believe that effective financial planning requires continuous monitoring and adjustment. As market conditions and personal circumstances change, we regularly review and refine your financial plan to ensure it remains aligned with your goals."
        },
    ]
    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    {/* Project details Img goes here */}
                    <div className='flex flex-col sm:flex-row items-center gap-7.5'>
                        <img src={project_details_img_1} alt="project details img" className='w-full rounded-md' />
                        <img src={project_details_img_2} alt="project details img" className='w-full rounded-md' />
                    </div>
                    {/* Project details info goes here */}
                    <div className='bg-white  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7.5 rounded-md p-7.5 mt-7.5'>
                        {
                            project_details_info.map(info => (
                                <div key={info.id} className='flex flex-col'>
                                    <h4 className='text-xl leading-7.5'>{info.title}</h4>
                                    <p className='text-primary text-xl leading-7.5 font-medium mt-2'>{info.text}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* Project Content goes here */}
                    <div className='max-w-330 mx-auto'>
                        {/* Project details description goes here */}
                        <div className='py-15'>
                            <h2 className='max-w-200 text-4xl text-primary leading-11 font-bold underline mb-7.5'>Innovative Digital Business Strategies for Modern Growth</h2>
                            <p>Turning ideas into tangible results is both an art and a science. At our agency, we believe that a vision is only as strong as the steps taken to realize it. how we transform creative concepts into impactful outcomes for our clients. Every successful project starts with a deep understanding of your goals, values, & audience. We take the time to listen, ask questions, and explore your ideas in detail. By identifying the core objectives & expectations, we ensure that the final result aligns perfectly with your vision 
                            This phase allows us to set a strong foundation for the entire project, avoiding guesswork and ensuring clarity </p>
                        </div>
                        {/* Project Projecss Ponits Here */}
                        <div>
                        {/* Project details Solutions goes here */}
                            <div>
                                <h2 className='max-w-200 text-4xl text-primary leading-11 font-bold underline mb-7.5'>Our Digital Strategy Implementation Process</h2>
                                <p>Our financial planning process is designed to help individuals and businesses achieve long-term financial stability and growth. We begin by understanding your current financial position, goals, and risk tolerance. Based on this analysis, our experts develop a personalized strategy that includes investment planning, savings management and risk assessment. We focus creating sustainable financial solutions that align with your future objectives. </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-7.5 mt-7.5'>
                            {
                                processPoints.map((item) => (
                                    <div key={item.id}>
                                        <div className='flex items-center gap-4 mb-3'>
                                            <span className='w-2.5 h-2.5 rounded-full bg-primary inline-block'></span>
                                            <h3 className='text-primary text-xl leading-7.5 font-bold'>{item.pointTitle}</h3>
                                        </div>
                                        <p>{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                        {/* Project details Solutions goes here */}
                        <div className='mt-15'>
                            <h2 className='max-w-200 text-4xl text-primary leading-11 font-bold underline mb-7.5'>Our Solution</h2>
                            <p>Our financial planning process is designed to help individuals and businesses achieve long-term financial stability and growth. We begin by understanding your current 
                            financial position, goals, and risk tolerance. Based on this analysis our experts develop a personalized strategy that includes investment planning, savings management
                            and risk assessment. We focus creating sustainable financial solutions that align with your future objectives. Based on this in-depth analysis, our experienced financial 
                            experts develop a personalized strategy tailored specifically to your needs.</p>
                        </div>
                        {/* Project Measurable Results goes here */}
                        <div className='mt-15'>
                            <h2 className='max-w-200 text-4xl text-primary leading-11 font-bold underline mb-7.5'>Measurable Results</h2>
                            <p>Our financial planning process is designed to help individuals and businesses achieve long-term financial stability and growth. We begin by understanding your current financial position, goals, and risk tolerance. Based on this analysis our experts develop a personalized strategy that includes investment planning, savings management and risk assessment. We focus creating sustainable financial solutions that align with your future objectives. Based on this in-depth analysis, our experienced financial experts develop a personalized strategy tailored specifically to your needs.</p>
                            <div className='max-w-175 flex flex-col gap-y-5 mt-7.5'>
                                <div className='flex gap-5'>
                                    <div className='w-[10%] sm:w-[5%]'><img src={check_icon} alt="Icon" /></div>
                                    <div className='w-[90%] sm:w-[95%]'>
                                        <p>Our digital strategies streamline business processes, helping organizations reduce inefficiencies and improve overall productivity. </p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='w-[10%] sm:w-[5%]'><img src={check_icon} alt="Icon" /></div>
                                    <div className='w-[90%] sm:w-[95%]'>
                                        <p>We help businesses build a powerful online presence that increases brand visibility and attracts the right audience.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='w-[10%] sm:w-[5%]'><img src={check_icon} alt="Icon" /></div>
                                    <div className='w-[90%] sm:w-[95%]'>
                                        <p>By implementing modern digital tools, enable businesses to connect with customers more effectively and build lasting relationships.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProjectDetailsBody