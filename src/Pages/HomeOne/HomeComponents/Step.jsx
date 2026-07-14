import React, { useState } from 'react'
import portfolio_icon from '../../../assets/images/step/portfolio_icon.png'
import portfolio_shape from '../../../assets/images/step/shape.png'
import portfolio_img_1 from '../../../assets/images/step/h1_step_img_1.jpg'
import portfolio_img_2 from '../../../assets/images/step/h1_step_img_2.jpg'
import portfolio_img_3 from '../../../assets/images/step/h1_step_img_3.jpg'
import Container from '../../../Components/SharedComponents/Container'
import SectionTitleOne from '../../../Components/SectionTitle/SectionTitleOne'

const Step = () => {

    const [activeTab, setActiveTab] = useState(0)

    const tabBtns = [
        "01. Discovery & Insights",
        "02. Strategic Planning",
        "03. Execution & Optimization"
    ]

    const tabItems = [
        {
            step: "Step 01",
            title: "Understanding your business",
            icon: portfolio_icon,
            text_1: "Analyze your goals, challenges, & long-term vision",
            text_2: "Review current operations and performance",
            text_3: "This helps us align our services with exact needs",
            portfolio_shape,
            portfolio_img: portfolio_img_1
        },
        {
            step: "Step 02",
            title: "Strategic planning",
            icon: portfolio_icon,
            text_1: "Create roadmap for growth",
            text_2: "Identify key opportunities",
            text_3: "Set measurable goals",
            portfolio_shape,
            portfolio_img: portfolio_img_2
        },
        {
            step: "Step 03",
            title: "Execution & optimization",
            icon: portfolio_icon,
            text_1: "Implement strategies effectively",
            text_2: "Track performance",
            text_3: "Continuously improve results",
            portfolio_shape,
            portfolio_img: portfolio_img_3
        },
    ]

    return (
        <section className='bg-primary py-20 lg:py-30'>
            <Container className="container">

                {/* Title */}
                <div className="sm:max-w-240 mx-auto pb-15">
                    <SectionTitleOne
                        textColor="text-white text-3xl sm:text-6xl font-bold text-center"
                        text="3 Simple Steps to Accelerate Your Business Growth"
                    />
                </div>

                {/* Tabs */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-15'>
                    {tabBtns.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`border rounded-md py-4 transition-all duration-300 cursor-pointer
                            ${activeTab === index
                                    ? 'bg-secondary text-white'
                                    : 'text-white border-white/20 hover:bg-secondary/70'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className='relative'>
                    {tabItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row lg:items-center justify-between gap-10 transition-all duration-500
                            ${activeTab === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 hidden'}
                            `}
                        >
                            {/* Content */}
                            <div className='w-full md:w-[50%] xl:w-[35%] 2xl:w-[30%]'>
                                <span className='text-white'>{item.step}</span>
                                <h3 className='text-white text-4xl font-bold py-6'>
                                    {item.title}
                                </h3>

                                <div className='space-y-4'>
                                    {[item.text_1, item.text_2, item.text_3].map((text, i) => (
                                        <div key={i} className='flex items-center gap-3'>
                                            <img src={item.icon} alt="icon" />
                                            <p className='text-gray-400'>{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className='w-full md:w-[50%] xl:w-[65%] 2xl:w-[70%] flex flex-col md:flex-row items-center gap-4'>
                                <img className='w-full md:hidden xl:block' src={item.portfolio_shape} alt="" />
                                <img className='w-full rounded-md border border-white/20 p-3' src={item.portfolio_img} alt="Img"/>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Step