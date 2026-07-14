import Container from '../../../Components/SharedComponents/Container'
import line_shape from '../../../assets/images/pages/servicepage/line_shape.svg'
import item_icon_1 from '../../../assets/images/pages/servicepage/step_shape_1.svg'
import item_icon_2 from '../../../assets/images/pages/servicepage/step_shape_2.svg'
import item_icon_3 from '../../../assets/images/pages/servicepage/step_shape_3.svg'
import item_icon_4 from '../../../assets/images/pages/servicepage/step_shape_4.svg'
import bannerImage from '../../../assets/images/pages/servicepage/big_img.jpg'
import Faq from '../../../Components/SharedComponents/Faq'
const PlanningProcess = () => {
    const stepsData =[
        {
            id: 1, 
            step: "Step - 1", 
            item_icon: item_icon_1,
            title: "Understand Your Financial Goals", 
            description: "Our experts design a personalized financial strategy including savings, and risk management."
        },
        {
            id: 2, 
            step: "Step - 2", 
            item_icon: item_icon_2,
            title: "Create a Strategic Financial Plan", 
            description: "Our experts design a personalized financial strategy including savings, and risk management."
        },
        {
            id: 3, 
            step: "Step - 3", 
            item_icon: item_icon_3,
            title: "Create a Strategic Financial Plan", 
            description: "Our experts design a personalized financial strategy including savings, and risk management."
        },
        {
            id: 4, 
            step: "Step - 4", 
            item_icon: item_icon_4,
            title: "Create a Strategic Financial Plan", 
            description: "Our experts design a personalized financial strategy including savings, and risk management."
        },
    ]
    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    <div>
                        <h2 className='max-w-200 text-4xl text-primary leading-11 font-bold underline mb-7.5'>Our Financial Planning Process</h2>
                        <p>Our financial planning process is designed to help individuals and businesses achieve long-term financial stability and growth. We begin by understanding your current financial position, goals, and risk tolerance. Based on this analysis, our experts develop a personalized strategy that includes investment planning, savings management, and risk assessment. We focus on creating sustainable financial solutions that align with your future objectives. Based on this in-depth analysis, our experienced financial experts develop a personalized strategy tailored specifically to your needs. This strategy may include investment planning, savings and wealth management, retirement planning, tax efficiency strategies, and risk management solutions. Our goal is to create a well-balanced financial roadmap that supports both your short-term priorities and long-term ambitions.</p>
                        <div className='mt-20'>
                            {/* line_shape img here */}
                            <div className='mt-6.25'>
                                <img src={line_shape} alt="line_shape" />
                            </div>
                            {/* steps items here */}
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-15 gap-y-15'>
                                {
                                    stepsData.map((step) => (
                                        <div key={step.id} className='group'>
                                            <p className='text-primary font-semibold -mt-15'>{step.step}</p>
                                            <div className='relative before:absolute before:w-7.5 before:h-7.5 before:bg-white before:rounded-full before:shadow-lg before:-top-7 before:left-1/2 before:-translate-x-1/2 
                                            after:absolute after:w-2.5 after:h-2.5 after:bg-primary after:rounded-full after:shadow-lg after:-top-4.5 after:left-1/2 after:-translate-x-1/2
                                            group-hover:after:bg-secondary transition-all duration-300
                                            '>
                                                
                                                <img src={step.item_icon} alt={step.title} className='mx-auto mb-5 mt-10' />
                                            </div>
                                            {/* Steps Items Here */}
                                            <div className='bg-white rounded-[10px] py-7.5 px-9.5 mb-10 sm:mb-0'>
                                                <h3 className='text-primary text-2xl leading-8 font-bold pb-5'>{step.title}</h3>
                                                <p>{step.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Big Banner Image Here */}
                        <div className='mt-20 lg:mt-30'>
                            <img src={bannerImage} alt="Banner" className='w-full' />
                        </div>
                        {/* FAQ Here */}
                        <div className='mt-20 lg:mt-30'>
                            <Faq />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default PlanningProcess