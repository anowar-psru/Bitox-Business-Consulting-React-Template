const SectionTitleOne = ({text, textColor}) => {
    return (
        <>
            <div>
                <h2 className={`text-primary text-3xl leading-12 md:text-[50px] md:leading-15 font-bold pb-15 ${textColor}`}>{text}</h2>
            </div>
        </>
    )
}

export default SectionTitleOne