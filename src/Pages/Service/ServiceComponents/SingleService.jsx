import Container from '../../../Components/SharedComponents/Container'
import SectionTitleTwo from '../../../Components/SectionTitle/SectionTitleTwo'
import ServiceCard from '../../../Components/SharedComponents/ServiceCard'
const SingleService = () => {
    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    <div className='max-w-200 mx-auto text-center mb-15'>
                        <SectionTitleTwo titleBtn={"services"} titleText={"Innovative Solutions That Drive Business Forward"}/>
                    </div>
                    {/* Service Card Here */}
                    <div>
                        <ServiceCard />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default SingleService