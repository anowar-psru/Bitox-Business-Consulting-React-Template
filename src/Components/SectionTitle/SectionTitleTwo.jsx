const SectionTitleTwo = ({ titleBtn, titleText }) => {
    return (
        <>
            <div>
                {
                    titleBtn && (
                        <span className="text-primary text-sm uppercase leading-5 font-bold px-4 py-1.5 border border-[rgba(0,0,0,0.1)] rounded mb-7 inline-block">
                            {titleBtn}
                        </span>
                    )
                }
                <h2 className='text-primary text-3xl leading-12 md:text-[50px] md:leading-15 font-bold underline'>
                    {titleText}
                </h2>
            </div>
        </>
    )
}

export default SectionTitleTwo