import { Link } from 'react-router'
import about_img_1 from '../../../assets/images/about/h1_about_img_1.jpg'
import about_img_2 from '../../../assets/images/about/h1_about_img_2.jpg'
import { useEffect, useState } from 'react';
import Container from '../../../Components/SharedComponents/Container';
import PrimaryBtn from '../../../Components/Button/PrimaryBtn';
import CounterUp from '../../../Hooks/Counterup';

const About = () => {
    const progressData = [
        { title: "Analysis", value: 52 },
        { title: "User Experience", value: 82 },
        { title: "Development", value: 92 },
    ];

    const [counts, setCounts] = useState(progressData.map(() => 0));

    useEffect(() => {
        const duration = 1000; // 1s (same as progress bar)
        const startTime = Date.now();

        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            const newCounts = progressData.map(item =>
                Math.floor(item.value * progress)
            );

            setCounts(newCounts);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, []);
    return (
        <>
            <section className='bg-secondary xl:px-10 py-7.5 4xl:py-15'>
                <Container >
                    <div className="relative before:absolute before:left-[50%] before:translate-x-[-50%] before:top-0 before:w-px before:h-full lg:before:bg-[rgba(0,0,0,0.1)] ">
                        <div className='bg-white rounded-md p-5 sm:p-9'>
                            {/* Top About Section Here */}
                            <div className='flex flex-col lg:flex-row  gap-y-7.5'>
                                <div className='w-full h-fit lg:w-[50%] lg:pr-5 xl:pr-9'>
                                    <img className='rounded-md w-full' src={about_img_1} alt="About Img" />
                                </div>
                                {/* About Text Here */}
                                <div className='w-full lg:w-[50%] md:pl-15 lg:pl-5 2xl:pl-15 md:pr-35 lg:pr-0 3xl:pr-35'>
                                    <h2 className='text-primary text-3xl sm:text-[44px] sm:leading-14 lg:text-[26px] lg:leading-9 xl:text-[40px] xl:leading-12 3xl:text-[46px] 3xl:leading-14 font-bold'>Achieve goals and coach fast with strategic clarity and focus.</h2>
                                    <p className='py-7.5 lg:py-3 2xl:py-7.5'>We help businesses move forward with confidence by turning complex challenges into clear action plans through structured guidance, analysis and targeted coaching, </p>
                                    {/* BTN Here */}
                                    <Link to="/contact" className='flex'>
                                        <PrimaryBtn customClass="bg-primary text-white" text={"Get in touch"} frontText={"Get in touch"} backText={"Get in touch"}/>
                                    </Link>
                                    {/* Progressbar Here */}
                                    <div className='flex flex-col gap-y-7.5 lg:gap-y-3 xl:gap-y-5 2xl:gap-y-7.5 3xl:gap-y-10 mt-15 lg:mt-7.5 2xl:mt-15'>
                                        {progressData.map((item, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between text-heading text-base leading-6 font-medium mb-2.5">
                                                    <span className='text-primary'>{item.title}</span>
                                                    <span className='text-primary'>{counts[index]}%</span>
                                                </div>
                                                <div className="w-full bg-[#D9D9D9] rounded-full h-1">
                                                    <div
                                                        className="bg-primary h-1 rounded-full animate_progress"
                                                        style={{
                                                            "--target-width": `${item.value}%`,
                                                            "--delay": `${index * 0.2}s`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Bottom About Section Here */}
                            <div className='flex flex-col lg:flex-row gap-y-7.5'>
                                {/* About Text Here */}
                                <div className='w-full lg:w-[50%] md:pl-15 lg:pl-5 2xl:pl-15'>
                                    <div className='pt-15 lg:pt-5 3xl:pt-15  md:pr-35 lg:pr-0 2xl:pr-10 3xl:pr-35'>
                                        <h2 className='text-primary text-3xl sm:text-[44px] sm:leading-14 lg:text-[26px] lg:leading-9 xl:text-[40px] xl:leading-12 3xl:text-[46px] 3xl:leading-14 font-bold'>Creating one of the fastest way to grow your business successfully</h2>
                                        <p className='pt-7.5 lg:pt-5 xl:pt-7.5 pb-15 lg:pb-5 2xl:pb-10 3xl:pb-15'>We help businesses move forward with confidence by turning complex challenges into clear action plans through structured guidance, analysis and targeted coaching, </p>
                                    </div>
                                    {/* Counter Facts Here */}
                                    <div className='border-t border-t-[rgba(0,0,0,0.1)] flex flex-col sm:flex-row items-center gap-10 lg:gap-5 xl:gap-10 pt-15 lg:pt-5 2xl:pt-10 3xl:pt-15'>
                                        <div className='w-full sm:w-[50%]'>
                                            <span className=' text-primary text-6xl leading-17 font-bold'>
                                                <CounterUp end={68} suffix='+' duration={3000}/>
                                            </span>
                                            <h3 className='text-primary text-xl font-bold leading-7 pt-7 pb-2'>Completed Projects</h3>
                                            <p>Include a simple sentence about completed work.</p>
                                        </div>
                                        <div className='w-full sm:w-[50%]'>
                                            <span className=' text-primary text-6xl leading-17 font-bold'>
                                                <CounterUp end={98} suffix='+' duration={3000}/>
                                            </span>
                                            <h3 className='text-primary text-xl font-bold leading-7 pt-7 pb-2'>Satisfied Clients</h3>
                                            <p>Include a simple sentence about completed work.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full lg:w-[50%] lg:pl-5 xl:pl-9 lg:pt-5 3xl:pt-0'>
                                    <img className='rounded-md w-full' src={about_img_2} alt="About Img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default About