import Container from '../../../Components/SharedComponents/Container'
import banner_bg from '../../../assets/images/pages/team/banner_bg.jpg'
import text_img from '../../../assets/images/pages/team/text_img.png'
const BannerText = () => {
    return (
        <>
            <section className='py-20 lg:py-30' style={{backgroundImage: `url(${banner_bg})`,}}>
                <Container>
                    <div className='max-w-240 mx-auto'>
                        <h2 className='text-white text-2xl leading-8 sm:text-4xl font-medium sm:leading-11 text-center underline'>Empowering your financial journey with expertise integrity 
                        and tailored solutions. The Consult Agency team provides 
                        continuous support to help your business with confidence 
                        and success your future growth.</h2>
                        {/* Img Here */}
                        <div className='pt-20 lg:pt-30 flex justify-center'>
                            <img src={text_img} alt="Imgage" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default BannerText