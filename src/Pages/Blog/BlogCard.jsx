import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router'
import Container from '../../Components/SharedComponents/Container'
import blog_img_1 from '../../assets/images/pages/blogpage/blogpage_img_1.jpg'
import blog_img_2 from '../../assets/images/pages/blogpage/blogpage_img_2.jpg'
import blog_img_3 from '../../assets/images/pages/blogpage/blogpage_img_3.jpg'
import blog_img_4 from '../../assets/images/pages/blogpage/blogpage_img_4.jpg'
import blog_img_5 from '../../assets/images/pages/blogpage/blogpage_img_5.jpg'
import blog_img_6 from '../../assets/images/pages/blogpage/blogpage_img_6.jpg'
import blog_icon from '../../assets/images/blog/blog_icon.png'
import SectionTitleTwo from '../../Components/SectionTitle/SectionTitleTwo'
const BlogCard = () => {

        const blogItems = [
            {
                id: 1,
                icon: blog_icon,
                text: "Business",
                blog_img: blog_img_1,
                blog_minutes: "6 min read",
                blog_date: "Mar 12, 2026",
                blog_title: "Craft a fulfilling career and enjoy the comfort you truly deserve",
            },
            {
                id: 2,
                icon: blog_icon,
                text: "Business",
                blog_img: blog_img_2,
                blog_minutes: "6 min read",
                blog_date: "Mar 12, 2026",
                blog_title: "Building a profitable and sustainable business model",
            },
            {
                id: 3,
                icon: blog_icon,
                text: "Business",
                blog_img: blog_img_3,
                blog_minutes: "6 min read",
                blog_date: "Mar 12, 2026",
                blog_title: "Improving operational efficiency for higher profitability",
            },
            {
                id: 4,
                icon: blog_icon,
                text: "Business",
                blog_img: blog_img_4,
                blog_minutes: "6 min read",
                blog_date: "Mar 12, 2026",
                blog_title: "Craft a fulfilling career and enjoy the comfort you truly deserve",
            },
            {
                id: 5,
                icon: blog_icon,
                text: "Business",
                blog_img: blog_img_5,
                blog_minutes: "6 min read",
                blog_date: "Mar 12, 2026",
                blog_title: "Building a profitable and sustainable business model",
            },
            {
                id: 6,
                icon: blog_icon,
                text: "Business",
                blog_img: blog_img_6,
                blog_minutes: "6 min read",
                blog_date: "Mar 12, 2026",
                blog_title: "Improving operational efficiency for higher profitability",
            },
        ]

    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    {/* Section Title Two Here */}
                    <div className='max-w-150 mx-auto text-center mb-15'>
                        <SectionTitleTwo titleBtn={"Latest Posts"} titleText={"Insights & Updates: Driving Your Success"}/>
                    </div>
                    {/* Blog Items Here */}
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7.5'>
                        {
                            blogItems.map((item) => (
                                <div key={item.id} className='relative group overflow-hidden'>
                                    <div className='relative'>
                                        <img className='rounded-md w-full' src={item.blog_img} alt="blog_img" />
                                        {/* Blog Arrow Here */}
                                        <div className='absolute -right-full bottom-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:right-5 group-hover:bottom-5 transition-all duration-300'>
                                            <Link to="/blog-details" className='w-12.5 h-12.5 bg-white rounded-md flex items-center justify-center'>
                                                <FaAngleRight className='text-primary text-2xl' />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Blog Text Here */}
                                    <div className='bg-white w-fit flex items-center gap-2.5 py-2 px-4 text-primary font-medium rounded-md absolute left-5 top-5'>
                                        <img src={item.icon} alt="blog_icon" />
                                        <p>{item.text}</p>
                                    </div>
                                    {/* Blog Contents Here */}
                                    <div className='pt-6.25 px-5 xl:px-0'>
                                        <div className='flex items-center gap-4 text-primary font-medium'>
                                            <p>{item.blog_minutes}</p>
                                            <span>//</span>
                                            <p>{item.blog_date}</p>
                                        </div>
                                        <Link to="/blog-details" className='text-primary text-2xl sm:text-3xl leading-10 font-medium pt-5 inline-block hover:text-secondary transition-all duration-300'>{item.blog_title}</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* Blog BTN Here */}
                    <div className='mt-15'>
                        <Link to="/blog" className='border border-[rgba(0,0,0,0.1)] rounded-md text-primary font-medium flex items-center justify-center py-5'>
                            View all articles
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default BlogCard