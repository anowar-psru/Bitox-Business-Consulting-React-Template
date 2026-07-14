import team_bg from '../../assets/images/pages/team/team_bg_img.jpg'
import author_1 from '../../assets/images/pages/team/author_1.png'
import author_2 from '../../assets/images/pages/team/author_2.png'
import author_3 from '../../assets/images/pages/team/author_3.png'
import author_4 from '../../assets/images/pages/team/author_4.png'
import { Link } from 'react-router'
import { RxArrowBottomRight } from 'react-icons/rx'
const ReviewCard = () => {
    const author_img = [author_1, author_2, author_3, author_4]
    return (
        <>
            <section>
                <div className='relative'>
                    <img src={team_bg} alt="Imgage" />
                    <div className='bg-white max-w-120 absolute bottom-0 right-10 xl:right-40 rounded-t-[10px] hidden md:block'>
                        <div className='xl:py-11 pl-5 py-5 xl:pl-9 xl:pr-15'>
                            <div className='flex items-center -space-x-5'>
                                {
                                    author_img.map((item, index) => (
                                        <div key={index} className='border-2 border-white rounded-full'>
                                            <img src={item} alt="Images" />
                                        </div>
                                    ))
                                }
                            </div>
                            <span className='text-primary text-5xl xl:text-7xl font-bold xl:leading-25'>2k+</span>
                            <p className='text-primary text-xl font-medium'>Serving happy customers worldwide with trusted excellence</p>
                        </div>
                        <Link to="/contact" className='bg-secondary flex items-center justify-between hover:bg-primary transition-all duration-300 p-5 xl:p-9'>
                            <h3 className='text-white text-xl font-medium'>Book your <br /> free consultation today</h3>
                            <RxArrowBottomRight className='text-white text-2xl'/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReviewCard