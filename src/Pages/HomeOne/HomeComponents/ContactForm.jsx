import bg_img from '../../../assets/images/contact/h1_contact_img.jpg'
import PrimaryBtn from '../../../Components/Button/PrimaryBtn'
import Container from '../../../Components/SharedComponents/Container'

const ContactForm = () => {
    return (
        <>
            <section>
                <Container>
                    <div className='bg-no-repeat p-9' style={{ backgroundImage: `url(${bg_img})`}}>
                        
                        <div className='w-full md:max-w-118 bg-white rounded-md p-4 md:p-9'>
                            <h2 className='text-primary text-2xl sm:text-[46px] sm:leading-14 font-bold pb-4 md:pb-7.5'>Start your project with bitox growth partners</h2>
                            <p>Regular updates ensure that readers have access to fresh perspectives, making Poster a must-read.</p>
                            {/* Contact Field Here */}
                            <form className=' pt-4 md:pt-15'>
                                <div className='flex flex-col sm:flex-row items-center gap-3.75'>
                                    <div className='w-full md:w-[50%]'>
                                        <input 
                                            type="text" 
                                            placeholder='Name'
                                            className='w-full border border-[rgba(0,0,0,0.1)] rounded-md outline-0 focus:border-heading focus:text-primary px-5 py-3'
                                            />
                                    </div>
                                    <div className='w-full md:w-[50%]'>
                                        <input 
                                            type="email" 
                                            placeholder='Email'
                                            className='w-full border border-[rgba(0,0,0,0.1)] rounded-md outline-0 focus:border-heading focus:text-primary px-5 py-3'
                                            />
                                    </div>
                                </div>
                                {/* SMS Field Here */}
                                <div className='w-full mt-2.5'>
                                    <textarea name="message" id="message"
                                    placeholder='Write your message'
                                    className='w-full border border-[rgba(0,0,0,0.1)] rounded-md outline-0 focus:border-heading focus:text-primary px-5 py-3'
                                    ></textarea>
                                </div>
                                {/* Submit BTN Here */}
                                <button type='submit' className="cursor-pointer mt-4 w-full">
                                    <PrimaryBtn customClass="bg-primary text-white" text={"Send message"} frontText={"Send message"} backText={"Send message"}/>
                                </button>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactForm