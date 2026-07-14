import { Link } from 'react-router'
import SecondaryBtn from '../../Components/Button/SecondaryBtn'
import Container from '../../Components/SharedComponents/Container'
import star_shape from "../../assets/images/pages/error/error_img.png"
const Error = () => {
    return (
        <>
            <section>
                <Container>
                    <div className='py-20 lg:py-30 mt-20'>
                        <img src={star_shape} alt="Star_Shape" className='mx-auto' />
                    </div>
                </Container>
                <div className='bg-secondary py-10 px-5'>
                    <h2 className='text-4xl leading-10 sm:text-5xl sm:leading-14 md:text-[68px] text-white font-bold text-center md:leading-20.5'>Sorry, we can’t find the page you’re looking for</h2>
                </div>
                <div className='max-w-200 mx-auto px-8 pt-15 pb-20 lg:pb-30'>
                    <p className='text-primary text-center text-2xl font-medium leading-8'>It looks like you’ve taken a wrong turn, but don’t worry we’re here to help! Head back to the homepage please</p>
                    <Link to="/" className='mt-7.5 flex justify-center'>
                        <SecondaryBtn btnText="Back to home page" />
                    </Link>
                </div>

            </section>
        </>
    )
}

export default Error