import breadcum_img from '../../assets/images/breadcumbs/breadcumbs_img.jpg'

const Breadcumb = ({titleText, subText}) => {
    return (
        <>
            <section className='relative bg-cover bg-no-repeat bg-center mt-23 pt-20 pb-100 xl:pt-37.5 xl:pb-128' style={{backgroundImage: `url(${breadcum_img})`,}}>
                <div className='max-w-152 absolute sm:left-[10%] xl:left-[25%] px-3 md:px-0'>
                    <h1 className='text-white text-4xl leading-12 sm:text-6xl sm:leading-17 font-bold'>{titleText}</h1>
                </div>
                <div className='max-w-120 absolute sm:left-[20%] xl:left-[50%] bottom-20 xl:bottom-37.5 bg-white/6 backdrop-blur-[15px] rounded-[10px] p-7.5 mx-5 md:mx-0'>
                    <div className='flex items-center gap-2.5'>
                        <h2 className='text-white text-sm leading-5 font-bold uppercase'>Home</h2>
                        <span className='text-white text-sm leading-5 font-bold uppercase'>//</span>
                        <h6 className='text-secondary text-sm leading-5 font-bold uppercase'>{subText}</h6>
                    </div>
                    <p className='text-white text-xl leading-7 font-bold pr-10 pt-5'>A reputed consultant agency we’ve spent 13+ year’s</p>
                </div>
            </section>
        </>
    )
}

export default Breadcumb