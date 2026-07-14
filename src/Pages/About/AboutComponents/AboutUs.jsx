import React from 'react'
import Container from '../../../Components/SharedComponents/Container'
import CounterUp from '../../../Hooks/Counterup'
const MissionData = [
    {
        number: 36,
        icon: "+",
        icon_2: "%",
        title: "Conversion",
        text: "Conversion after redesign (90 days)"
    },
    {
        number: 41,
        icon: "+",
        icon_2: "%",
        title: "Sign-ups",
        text: "Increase in registrations from organic/paid."
    }
]
const AboutUs = () => {
    return (
        <>
            <section>
                <Container>
                    <h1 className='text-primary text-4xl sm:text-6xl md:text-8xl 2xl:text-[160px] 2xl:leading-40 font-bold uppercase py-15'>Established in 2013</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-10'>
                        <h2 className='text-primary text-3xl sm:text-4xl md:text-[50px] lg:text-5xl md:leading-15 font-bold underline'>A reputed consultant agency with 15+ years helping businesses grow worldwide.</h2>
                        <div className='flex flex-col sm:flex-row gap-5 lg:justify-end mt-10'>
                            {
                                MissionData.map((data, index) => (
                                    <div
                                        key={index}
                                        className='w-72.5 border-2 border-white rounded-[10px] py-5 text-end'
                                    >

                                        <div className='text-primary text-[70px] leading-14.5 font-medium flex items-center justify-end px-6.25'>

                                            <span>{data.icon}</span>
                                            <CounterUp end={data.number} />
                                            <span>{data.icon_2}</span>

                                        </div>

                                        <h3 className='text-primary text-xl font-bold uppercase px-6.25 pt-2.5 pb-5'>
                                            {data.title}
                                        </h3>

                                        <p className='text-primary text-base font-medium leading-6 border-t-2 border-t-white px-8 pt-5'>
                                            {data.text}
                                        </p>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutUs