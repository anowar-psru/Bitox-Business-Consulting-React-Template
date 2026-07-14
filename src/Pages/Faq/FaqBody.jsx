import Container from '../../Components/SharedComponents/Container'
import SectionTitleTwo from '../../Components/SectionTitle/SectionTitleTwo'
import shape_img from "../../assets/images/faq/shape_img.png"
import Faq from '../../Components/SharedComponents/Faq'
const FaqBody = () => {
    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    <div>
                        <div className="flex pb-15 ">
                            <div className='w-full lg:w-[60%]'>
                                <SectionTitleTwo titleBtn={"Frequently Asked Questions"} titleText={"Frequently Asked Questions: Clear, Concise Answers"}/>
                            </div>
                            <div className='hidden lg:flex justify-end w-[40%]'>
                                <img src={shape_img} alt="Shape_Image" />
                            </div>
                        </div>
                        <div>
                            <Faq />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default FaqBody