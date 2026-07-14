import React from 'react'
import Faq from '../../../Components/SharedComponents/Faq'
import Container from '../../../Components/SharedComponents/Container'
import SectionTitleOne from '../../../Components/SectionTitle/SectionTitleOne'

const HomeFaq = () => {
    return (
        <>
            <section className='py-20 lg:py-30'>
                <Container>
                    <div className='text-center max-w-200 mx-auto'>
                        <SectionTitleOne text={"Frequently Asked Questions: Clear, Concise Answers"}/>
                    </div>
                    <Faq />
                </Container>
            </section>
        </>
    )
}

export default HomeFaq