import { MdOutlineStar } from 'react-icons/md'
import testimonial_icon from '../../../assets/images/testimonial/quote.svg'
import author_img_1 from '../../../assets/images/testimonial/h1_testimonial_img_1.png'
import author_img_2 from '../../../assets/images/testimonial/h1_testimonial_img_2.png'
import author_img_3 from '../../../assets/images/testimonial/h1_testimonial_img_3.png'
const Testimonial = () => {
    const testimonialItems = [
        {
            id: 1,
            quote_icon: testimonial_icon,
            title: `From discovery to execution, every step was handled professionally. Their insights growth opportunities we hadn’t considered before & either strategic guidance`,
            author_img: author_img_1,
            name: "Cameron Diaz",
            designation: "Co-Founder",
            percentage_1: 85,
            text_1: "Process Improvement",
            percentage_2: 70,
            text_2: "Revenue Growth in 6 Months"
        },
        {
            id: 2,
            quote_icon: testimonial_icon,
            title: `From discovery to execution, every step was handled professionally. Their insights growth opportunities we hadn’t considered before & either strategic guidance`,
            author_img: author_img_2,
            name: "Taylor Brooks",
            designation: "Web Designer",
            percentage_1: 85,
            text_1: "Process Improvement",
            percentage_2: 70,
            text_2: "Revenue Growth in 6 Months"
        },
        {
            id: 3,
            quote_icon: testimonial_icon,
            title: `From discovery to execution, every step was handled professionally. Their insights growth opportunities we hadn’t considered before & either strategic guidance`,
            author_img: author_img_3,
            name: "Alex Morgan",
            designation: "Co-Founder",
            percentage_1: 85,
            text_1: "Process Improvement",
            percentage_2: 70,
            text_2: "Revenue Growth in 6 Months"
        },
    ]
    return (
        <>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    {/* Testimonial Rating Section Here */}
                    <div className='bg-secondary py-7.5'>
                        <div className=' px-5 sm:px-15 pb-10 lg:pb-24.5'>
                            <div className='flex flex-col'>
                                <h2 className='text-white text-9xl sm:text-[200px] sm:leading-40 font-bold text-center '>4.9</h2>
                                <div className='flex items-center justify-end pr-10 pt-2.5'>
                                    <MdOutlineStar className='text-white text-2xl'/>
                                    <MdOutlineStar className='text-white text-2xl'/>
                                    <MdOutlineStar className='text-white text-2xl'/>
                                    <MdOutlineStar className='text-white text-2xl'/>
                                    <MdOutlineStar className='text-white text-2xl'/>
                                </div>
                            </div>
                            <h3 className='text-white text-4xl sm:text-[46px] sm:leading-14 font-bold text-center mt-7.5 '>Real stories. Real impact.</h3>
                        </div>
                        {/* Company Percentage Rating Here */}
                        <div className='flex justify-between px-7.5 border-t border-t-[rgba(256,256,256,0.1)] pt-7.5'>
                            <div className='text-white'>
                                <span className='text-3xl leading-10 font-bold'>99%</span>
                                <p>Satisfaction Rate</p>
                            </div>
                            <div className='text-white'>
                                <span className='text-3xl leading-10 font-bold'>70%</span>
                                <p>companies automated</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial Items Here */}
                    {
                        testimonialItems.map((item, index) => (
                            <div key={item.id} className={`py-7.5 bg-white ${index !== testimonialItems.length - 1 ? 'border-r border-r-[rgba(0,0,0,0.1)]' : ''}`}>
                                <div className='px-7.5'>
                                    <img src={item.quote_icon} alt="Quote_icon" />
                                    <h2 className='text-primary text-xl leading-7 font-bold underline pt-7.5 pb-10'>{item.title}</h2>
                                </div>
                                {/* Author Here */}
                                <div className='flex items-center gap-4 pb-10 lg:pb-29 px-7.5'>
                                    <div>
                                        <img className='rounded-xs' src={item.author_img} alt="author_img" />
                                    </div>
                                    <div>
                                        <h3 className='text-lg text-primary font-medium'>{item.name}</h3>
                                        <p className='text-primary'>{item.designation}</p>
                                    </div>
                                </div>
                                {/* Percentage Here */}
                                <div className='flex justify-between border-t border-t-[rgba(0,0,0,0.1)] pt-7.5 px-7.5'>
                                    <div>
                                        <span className='text-primary text-3xl leading-10 font-bold'>{item.percentage_1}%</span>
                                        <p className='text-primary text-base'>{item.text_1}</p>
                                    </div>
                                    <div>
                                        <span className='text-primary text-3xl leading-10 font-bold'>{item.percentage_2}%</span>
                                        <p className='text-primary text-base'>{item.text_2}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Testimonial