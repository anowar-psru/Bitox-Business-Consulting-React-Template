import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import faq_img from '../../assets/images/faq/h1_faq_img.png'
import { Link } from 'react-router'
import SectionTitleOne from '../SectionTitle/SectionTitleOne'
import Container from './Container'
import PrimaryBtn from '../Button/PrimaryBtn'

const Faq = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [activeId, setActiveId] = useState(1)

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    const tabBtns = [
        "General question",
        "Pricing & Plans",
        "Process & timeline",
        "Strategy & growth"
    ]

    const tabItems = [
        {
            id: 1,
            title: "What does a business consultant do?",
            text: "A business consultant analyzes your company’s challenges, identifies growth opportunities and provides strategic solutions to improve performance, profitability, and scalability."
        },
        {
            id: 2,
            title: "How can consulting help my business grow?",
            text: "A business consultant analyzes your company’s challenges, identifies growth opportunities and provides strategic solutions to improve performance, profitability, and scalability."
        },
        {
            id: 3,
            title: "Who should hire a business consultant?",
            text: "A business consultant analyzes your company’s challenges, identifies growth opportunities and provides strategic solutions to improve performance, profitability, and scalability."
        },
        {
            id: 4,
            title: "How long does a consulting project take?",
            text: "A business consultant analyzes your company’s challenges, identifies growth opportunities and provides strategic solutions to improve performance, profitability, and scalability."
        },
        {
            id: 5,
            title: "Do you offer customized business solutions?",
            text: "A business consultant analyzes your company’s challenges, identifies growth opportunities and provides strategic solutions to improve performance, profitability, and scalability."
        },
    ]

    return (
        <section>
            <Container>
                <div className='flex flex-col lg:flex-row gap-y-7.5'>
                    {/* Tabs */}
                    <div className='w-full h-fit lg:w-[30%] bg-[#E0DED7] rounded-l-[20px] rounded-b-[20px] flex flex-col gap-2.5 py-5 px-5 sm:px-9'>
                        {tabBtns.map((item, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-xl font-bold rounded-md px-9 py-7 text-left transition-all cursor-pointer
                                ${activeTab === index
                                        ? 'bg-secondary text-white'
                                        : 'bg-white text-heading hover:bg-secondary hover:text-white'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className='w-full lg:w-[70%] bg-[#E0DED7] rounded-r-[20px] rounded-b-[20px] flex flex-col gap-2.5 py-5 px-5'>

                        {/* General Question Here */}
                        {activeTab === 0 && (
                            <>
                                {tabItems.map((item) => {
                                    const isOpen = activeId === item.id

                                    return (
                                        <div key={item.id} className='bg-white rounded-[15px] sm:px-9 px-5 py-6'>
                                            <div
                                                onClick={() => toggleAccordion(item.id)}
                                                className='flex items-center gap-5 cursor-pointer'
                                            >
                                                <FaChevronDown
                                                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                                />
                                                <h3 className='text-primary text-xl sm:text-2xl font-medium'>
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-3' : 'max-h-0'
                                                    }`}
                                            >
                                                <p className='text-lg pl-8.5'>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}

                                {/* CTA */}
                                <div className='bg-white rounded-[15px] flex flex-col md:flex-row gap-y-7.5 justify-between px-9 py-5'>
                                    <div className='w-full md:w-[50%] 2xl:pr-25'>
                                        <h4 className='text-primary text-3xl leading-10 font-bold pb-5'>
                                            Have any questions? we’re here for you.
                                        </h4>
                                        <p>
                                            If you manage high transaction volumes, multiple entities, or require custom integrations, our team can tailor Makro to your needs.
                                        </p>
                                        <Link to="/contact" className="mt-7.5 flex">
                                            <PrimaryBtn customClass="bg-primary text-white" text="Get in touch" frontText={"Get in touch"} backText={"Get in touch"} />
                                        </Link>
                                    </div>

                                    <div className='w-full md:w-[50%] flex lg:justify-end'>
                                        <img src={faq_img} alt="faq_img" />
                                    </div>
                                </div>
                            </>
                        )}
                        {/* Pricing & plans here */}
                        {activeTab === 1 && 
                            <div className='bg-white p-9 rounded-[20px]'>
                                <h2 className='text-4xl text-primary font-bold pb-7.5'>Pricing & plans</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam aliquam illo dolorem numquam, provident molestias culpa vero quod assumenda totam quibusdam est ipsa porro ad nesciunt quaerat. Aut amet tempore atque animi vitae doloremque quos error fugit quisquam harum! Exercitationem ullam reiciendis repellat laboriosam quos modi, accusantium aliquid a eaque commodi autem vel possimus repellendus iure corrupti quaerat deserunt tenetur voluptatibus molestiae iste eius perspiciatis.</p>
                                <p className='pt-7.5'>Vero cupiditate amet ex corporis, quas vitae temporibus repudiandae libero sunt quod magnam voluptate debitis culpa! Magnam sunt ipsum adipisci, laboriosam minus totam impedit ut, omnis, temporibus obcaecati illo aliquid. Excepturi sit fugiat reiciendis.</p>
                            </div>
                        }
                        {/* Process & timeline here */}
                        {activeTab === 2 && 
                            <div className='bg-white p-9 rounded-[20px]'>
                                <h2 className='text-4xl text-primary font-bold pb-7.5'>Process & timeline</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam aliquam illo dolorem numquam, provident molestias culpa vero quod assumenda totam quibusdam est ipsa porro ad nesciunt quaerat. Aut amet tempore atque animi vitae doloremque quos error fugit quisquam harum! Exercitationem ullam reiciendis repellat laboriosam quos modi, accusantium aliquid a eaque commodi autem vel possimus repellendus iure corrupti quaerat deserunt tenetur voluptatibus molestiae iste eius perspiciatis.</p>
                                <p className='pt-7.5'>Vero cupiditate amet ex corporis, quas vitae temporibus repudiandae libero sunt quod magnam voluptate debitis culpa! Magnam sunt ipsum adipisci, laboriosam minus totam impedit ut, omnis, temporibus obcaecati illo aliquid. Excepturi sit fugiat reiciendis.</p>
                            </div>
                        }
                        {/* Strategy & growth here */}
                        {activeTab === 3 && 
                            <div className='bg-white p-9 rounded-[20px]'>
                                <h2 className='text-4xl text-primary font-bold pb-7.5'>Strategy & growth</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam aliquam illo dolorem numquam, provident molestias culpa vero quod assumenda totam quibusdam est ipsa porro ad nesciunt quaerat. Aut amet tempore atque animi vitae doloremque quos error fugit quisquam harum! Exercitationem ullam reiciendis repellat laboriosam quos modi, accusantium aliquid a eaque commodi autem vel possimus repellendus iure corrupti quaerat deserunt tenetur voluptatibus molestiae iste eius perspiciatis.</p>
                                <p className='pt-7.5'>Vero cupiditate amet ex corporis, quas vitae temporibus repudiandae libero sunt quod magnam voluptate debitis culpa! Magnam sunt ipsum adipisci, laboriosam minus totam impedit ut, omnis, temporibus obcaecati illo aliquid. Excepturi sit fugiat reiciendis.</p>
                            </div>
                        }

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Faq