import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import SecondaryBtn from '../../../Components/Button/SecondaryBtn'

const LeaveComents = () => {
    return (
        <>
            <section>
                <div className='max-w-330 mx-auto my-15'>
                    <div className='flex flex-col sm:flex-row justify-between border-b border-b-[rgba(75,66,66,0.1)] border-t border-t-[rgba(0,0,0,0.1)] px-10 py-7.5'>
                        {/* Tags Here */}
                        <div className='flex items-center'>
                            <div className='mr-5'>
                                <h3 className='text-primary text-3xl font-bold leading-7.5'>Tags:</h3>
                            </div>
                            <div className='bg-white border border-[rgba(0,0,0,0.1)] rounded-full px-5 py-1 w-fit mr-3'>
                                <p className='text-primary text-base font-medium'>Creative</p>
                            </div>
                            <div className='bg-white border border-[rgba(0,0,0,0.1)] rounded-full px-5 py-1 w-fit'>
                                <p className='text-primary text-base font-medium'>Business</p>
                            </div>
                        </div>
                        {/* Social Media Goes Here */}
                        <div className='flex items-center'>
                            <div className='mr-5'>
                                <h3 className='text-primary text-3xl font-bold leading-7.5'>Share:</h3>
                            </div>
                            <div className='w-9 h-9 bg-white border border-[rgba(0,0,0,0.1)] rounded-full flex items-center justify-center hover:bg-secondary group cursor-pointer transition-all duration-300 mr-2.5'>
                                <FaFacebookF className='text-primary group-hover:text-white' />
                            </div>
                            <div className='w-9 h-9 bg-white border border-[rgba(0,0,0,0.1)] rounded-full flex items-center justify-center hover:bg-secondary group cursor-pointer transition-all duration-300 mr-2.5'>
                                <FaXTwitter className='text-primary group-hover:text-white' />
                            </div>
                            <div className='w-9 h-9 bg-white border border-[rgba(0,0,0,0.1)] rounded-full flex items-center justify-center hover:bg-secondary group cursor-pointer transition-all duration-300'>
                                <FaLinkedinIn className='text-primary group-hover:text-white' />
                            </div>
                        </div>
                    </div>
                    {/* Comments Form Here */}
                    <form className='bg-white rounded-md mt-15 p-15'>
                        <h2 className='text-primary text-4xl font-bold leading-11 underline'>Leave A Comment</h2>
                        <div className='pt-7.5'>
                            <div className='flex flex-col sm:flex-row gap-7.5'>
                                <div className='w-full sm:w-1/2'>
                                    <input type='text' placeholder='Name' className='bg-[#F5F5F5] outline-0 rounded-md w-full py-3 px-4' />
                                </div>
                                <div className='w-full sm:w-1/2'>
                                    <input type='email' placeholder='Email' className='bg-[#F5F5F5] outline-0 rounded-md w-full py-3 px-4' />
                                </div>
                            </div>
                            <div className='w-full mt-7.5'>
                            <textarea type='email' rows={6} placeholder='Write your message' className='bg-[#F5F5F5] outline-0 rounded-md w-full py-3 px-4'></textarea>
                            </div>
                        </div>
                        {/* Submit BTN Here */}
                        <div className='mt-7.5'>
                            <SecondaryBtn type="submit" btnText={"Submit comment"}/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default LeaveComents