import React from 'react'
import Banner from './HomeComponents/Banner'
import Hero from './HomeComponents/Hero'
import About from './HomeComponents/About'
import Established from './HomeComponents/Established'
import Brand from './HomeComponents/Brand'
import Services from './HomeComponents/Services'
import Testimonial from './HomeComponents/Testimonial'
import Project from './HomeComponents/Project'
import Step from './HomeComponents/Step'
import Blog from './HomeComponents/Blog'
import ContactForm from './HomeComponents/ContactForm'
import HomeFaq from './HomeComponents/HomeFaq'

const Home = () => {
    return (
        <>
            <Banner />
            <Hero />
            <Established />
            <About />
            <Brand />
            <Services />
            <Testimonial />
            <Project />
            <Step />
            <Blog />
            <ContactForm />
            <HomeFaq />
        </>
    )
}

export default Home