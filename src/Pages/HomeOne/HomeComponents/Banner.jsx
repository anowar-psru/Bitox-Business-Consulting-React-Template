import React from 'react'
import { Link } from 'react-router'
import Container from '../../../Components/SharedComponents/Container'
import banner_shape from '../../../assets/images/banner/banner_shape.svg'
const Banner = () => {
    return (
        <>
            <section className='py-10 lg:py-22.5'>
                <Container>
                    <div className='flex flex-col items-center lg:items-start pt-20'>
                        <div className='flex flex-col lg:flex-row items-center gap-7.5 mb-6'>
                            <h1 
                                className='
                                text-primary text-6xl leading-10 sm:text-7xl md:text-9xl md:leading-20 xl:text-[200px] font-bold xl:leading-40 uppercase
                                '>
                                    Business
                            </h1>
                            <img className='' src={banner_shape} alt="Banner Shape" />
                        </div>
                        <div className='lg:w-full lg:text-end'>
                            <h1 
                                className='
                                text-primary text-6xl leading-10 sm:text-7xl md:text-9xl md:leading-20 xl:text-[200px] xl:leading-40 font-medium uppercase
                                '>
                                    Strategy
                            </h1>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner