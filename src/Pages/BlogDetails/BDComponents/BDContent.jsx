import Container from '../../../Components/SharedComponents/Container'
import big_banner_img from '../../../assets/images/pages/blog_details/blog_big_img.jpg'
import review_line from '../../../assets/images/pages/blog_details/review_line.svg'
import quote_icon from '../../../assets/images/pages/blog_details/quote_icon.svg'
import blog_detail_img_1 from '../../../assets/images/pages/blog_details/blog_detail_img_1.jpg'
import blog_detail_img_2 from '../../../assets/images/pages/blog_details/blog_detail_img_2.jpg'
import check_icon from '../../../assets/images/pages/project_details/check_icon.svg'
const BDContent = () => {
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
            <section>
                    {/* Big Bannner Img Here */}
                    <div>
                        <img src={big_banner_img} alt="blog_big_img" className='w-full' />
                    </div>
                <Container>
                    <div className='max-w-330 mx-auto'>
                        <p className='py-15'>Turning ideas into tangible results is both an art and a science. At our agency, we believe that a vision is only as strong as the steps taken to realize it. how we transform 
                        creative concepts into impactful outcomes for our clients. Every successful project starts with a deep understanding of your goals, values, & audience. We take the time 
                        to listen, ask questions, and explore your ideas in detail. By identifying the core objectives & expectations, we ensure that the final result aligns perfectly with your vision 
                        This phase allows us to set a strong foundation for the entire project, avoiding guesswork and ensuring clarity</p>

                        {/* Blog details description goes here */}
                        <div>
                            <h2 className='max-w-200 text-4xl text-primary leading-11 font-bold underline mb-7.5'>Identify a Clear Value Proposition</h2>
                            <p>Our financial planning process is designed to help individuals and businesses achieve long-term financial stability and growth. We begin by understanding your current financial position, goals, and risk tolerance. Based on this analysis our experts develop a personalized strategy that includes investment planning, savings management and risk assessment. We focus creating sustainable financial solutions that align with your future objectives. Based on this in-depth analysis, our experienced financial experts develop a personalized strategy tailored specifically to your needs. </p>
                        </div>
                        {/* Blog Projecss Ponits Here */}
                        <div>
                        {/* Blog details Solutions goes here */}
                            <div className='pt-15'>
                                <h2 className='max-w-200 text-4xl text-primary leading-11 font-bold underline mb-7.5'>Develop Multiple Revenue Streams</h2>
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
                        {/* BDContent Reviews Here */}
                        <div className='mt-15 bg-white rounded-md p-9'>
                            <div className='flex gap-7.5'>
                                <div className='w-15'>
                                    <img src={review_line} alt="review_line" />
                                </div>
                                <div>
                                    <img src={quote_icon} alt="quote_icon" />
                                    <h3 className='text-primary text-2xl font-medium leading-8.5 pt-7.5'>Are you ready to craft a visual identity that captures your brand’s essence, tells a compelling story, & motivates your audience to engage? Let’s collaborate to transform your vision into a bold cohesive & unforgettable brand presence that inspires success</h3>
                                </div>
                            </div>
                        </div>
                        {/* Blog Details images here */}
                        <div className='flex flex-col sm:flex-row items-center gap-7.5 py-15'>
                            <div>
                                <img src={blog_detail_img_1} alt="blog_detail_img_1" className='w-full rounded-md' />
                            </div>
                            <div>
                                <img src={blog_detail_img_2} alt="blog_detail_img_2" className='w-full rounded-md' />
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2 className='max-w-200 text-4xl text-primary leading-11 font-bold underline mb-7.5'>Control Costs and Optimize Operations</h2>
                                <p>Turning ideas into tangible results is both an art and a science. At our agency, we believe that a vision is only as strong as the steps taken to realize it. how we transform creative concepts into impactful outcomes for our clients. Every successful project starts with a deep understanding of your goals, values, & audience. We take the time to listen, ask questions, and explore your ideas in detail. By identifying the core objectives & expectations, we ensure that the final result aligns perfectly with your vision This phase allows us to set a strong foundation for the entire project, avoiding guesswork and ensuring clarity </p>
                            </div>
                            <div className='pt-15'>
                                <h2 className='max-w-200 text-4xl text-primary leading-11 font-bold underline mb-7.5'>Focus on Long-Term Customer Relationships</h2>
                                <p>Our financial planning process is designed to help individuals and businesses achieve long-term financial stability and growth. We begin by understanding your current financial position, goals, and risk tolerance. Based on this analysis our experts develop a personalized strategy that includes investment planning, savings management and risk assessment. We focus creating sustainable financial solutions that align with your future objectives. Based on this in-depth analysis, our experienced financial experts develop a personalized strategy tailored specifically to your needs.</p>
                            </div>
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
                </Container>
            </section>
        </>
    )
}

export default BDContent