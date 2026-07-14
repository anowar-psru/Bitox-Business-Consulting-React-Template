import Breadcumb from '../../Components/Breadcumb/Breadcumb'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <>
            <Breadcumb titleText={"The Business Consulting Journal"} subText={"our blog"}/>
            <BlogCard />
        </>
    )
}

export default Blog