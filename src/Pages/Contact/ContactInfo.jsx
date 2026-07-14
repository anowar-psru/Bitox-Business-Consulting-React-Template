import Container from '../../Components/SharedComponents/Container'
import { Link } from 'react-router'
import logo from '../../assets/images/logo/contactpage_logo.svg'
import SecondaryBtn from '../../Components/Button/SecondaryBtn'
import map_img from '../../assets/images/contact/map_img.jpg'
const ContactInfo = () => {
    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    {/* Contact Form Here */}
                    <div className='flex flex-col lg:flex-row justify-between lg:gap-10 pb-20 lg:pb-30'>
                        <div className='lg:max-w-95 flex flex-col justify-between'>
                            <h2 className='text-primary text-3xl leading-11 sm:text-[49px] font-bold sm:leading-15'>Reach out for inquiries, collaborations, or just to say hello. We're eager to connect!</h2>
                            <Link to='/' className='hidden lg:block'>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className='mt-7.5'>
                            <form className='bg-white max-w-267 rounded-3.75 p-5 sm:p-15'>
                                {/* Name Field Here */}
                                <div className='flex flex-col md:flex-row items-center gap-7.5'>
                                    {/* First Name Filed Here */}
                                    <div className='w-full md:w-1/2'>
                                        <input type="text" placeholder='First Name*' className='bg-[#f5f5f5] font-light outline-0 rounded-md w-full border-transparent focus:text-primary focus:border-secondary focus:border py-5 px-6.25 '/>
                                    </div>
                                    {/* Last Name Filed Here */}
                                    <div className='w-full md:w-1/2'>
                                        <input type="text" placeholder='Last Name*' className='bg-[#f5f5f5] font-light outline-0 rounded-md w-full border-transparent focus:text-primary focus:border-secondary focus:border py-5 px-6.25 '/>
                                    </div>
                                </div>
                                {/* Your Email ID & Phone Field Here */}
                                <div className='flex flex-col md:flex-row items-center gap-7.5 mt-7.5'>
                                    {/* Your Email ID Filed Here */}
                                    <div className='w-full md:w-1/2'>
                                        <input type="email" placeholder='Your Email ID*' className='bg-[#f5f5f5] font-light outline-0 rounded-md w-full border-transparent focus:text-primary focus:border-secondary focus:border py-5 px-6.25 '/>
                                    </div>
                                    {/* Phone Number Filed Here */}
                                    <div className='w-full md:w-1/2'>
                                        <input type="tel" placeholder='Phone Number*' className='bg-[#f5f5f5] font-light outline-0 rounded-md w-full border-transparent focus:text-primary focus:border-secondary focus:border py-5 px-6.25 '/>
                                    </div>
                                </div>
                                {/* Textarea Field Here */}
                                <div className='w-full mt-7.5'>
                                    <textarea 
                                    placeholder='Write your message' 
                                    rows={5}
                                    className='bg-[#f5f5f5] font-light outline-0 rounded-md w-full border-transparent focus:text-primary focus:border-secondary focus:border py-5 px-6.25'>
                                    </textarea>
                                </div>
                                {/* Submit BTN Here */}
                                <div className='mt-7.5 mx-auto flex justify-center'>
                                    <SecondaryBtn btnText="Submit message" type="submit" />
                                </div>
                            </form>
                            {/* Contact Information Here */}
                            <div className='max-w-267 grid grid-cols-1 lg:grid-cols-3 gap-7.5 mt-7.5'>
                                {/* Contact Address Here */}
                                <div className='bg-white rounded-md p-9'>
                                    <h3 className='text-primary text-2xl leading-8.5 font-bold mb-5'>Address</h3>
                                    <p className='text-lg'>Valentin, Street Road 24, New York, USA – 67452</p>
                                </div>
                                {/* Contact Phone / Message Here */}
                                <div className='bg-white rounded-md p-9'>
                                    <h3 className='text-primary text-2xl leading-8.5 font-bold mb-5'>Phone / Message</h3>
                                    <a href="mailto:supportdomin@example.com" className='text-lg block'>supportdomin@example.com</a>
                                    <a href="tel:2518546308" className='text-lg block'>(251) 854-6308</a>
                                </div>
                                {/* Contact Working Hours Here */}
                                <div className='bg-white rounded-md p-9'>
                                    <h3 className='text-primary text-2xl leading-8.5 font-bold mb-5'>Working Hours</h3>
                                    <p className='text-lg'>Monday to Friday 09:00 to 18:30   Saturday 15:30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Location Map Img Here */}
                    <div>
                        <img src={map_img} alt="map_img" className='rounded-md w-full' />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactInfo