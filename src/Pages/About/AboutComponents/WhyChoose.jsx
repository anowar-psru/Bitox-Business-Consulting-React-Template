import Container from '../../../Components/SharedComponents/Container'
import SectionTitleTwo from '../../../Components/SectionTitle/SectionTitleTwo'
import why_line_shape from '../../../assets/images/pages/aboutpage/why_line_shape.svg'
import arrow_shape from '../../../assets/images/pages/aboutpage/arrow_shape.svg'
const WhyChoose = () => {
    const whyData = [
        {
            number: "01",
            line: arrow_shape,
            title: "Industry Expertise",
            text: "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success.",
        },
        {
            number: "02",
            line: arrow_shape,
            title: "Trusted Solutions",
            text: "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success.",
        },
        {
            number: "03",
            line: arrow_shape,
            title: "Business Growth",
            text: "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success.",
        },
        {
            number: "04",
            line: arrow_shape,
            title: "Quality Service",
            text: "Enterprise partnerships, built on clarity and craft, are the foundation of sustainable and long-term success.",
        }
    ]
    return (
        <>
            <section className='pb-20 lg:pb-30'>
                <Container>
                    <div className='max-w-180 text-center mx-auto'>
                        <SectionTitleTwo titleText={"Why Businesses Choose Us With Confidence"}/>
                    </div>
                    <div className='py-15'>
                        <img src={why_line_shape} alt="shape_img" />
                    </div>
                    <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-7.5 xl:gap-15'>
                        {
                            whyData.map((data, index) => (
                                <div key={index}>
                                    <span className='text-primary text-[26px] leading-9 font-bold'>{data.number}</span>
                                    <div className='flex items-center gap-4 pb-5'>
                                        <img src={data.line} alt="shapeImg" />
                                        <h2 className='text-primary text-[20px] sm:text-[26px] leading-9 font-bold'>{data.title}</h2>
                                    </div>
                                    <p>{data.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}

export default WhyChoose