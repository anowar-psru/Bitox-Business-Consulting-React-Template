const PrimaryBtn = ({text, backText, frontText, customClass}) => {
    return (
        <>
            <div className={` font-bold rounded-md px-6.25 py-3.75 relative group overflow-hidden ${customClass}`}>
                <span className="opacity-0 flex items-center justify-center">{text}</span>
                <span 
                    className="
                        w-full text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                        group-hover:-top-full group-hover:translate-y-0
                        transition-all duration-300
                    ">
                        {backText}
                </span>
                <span 
                    className="
                        w-full text-center absolute left-1/2 -translate-x-1/2 top-full 
                        group-hover:top-1/2 group-hover:-translate-y-1/2
                        transition-all duration-300
                    ">
                        {frontText}
                </span>
            </div>
        </>
    )
}

export default PrimaryBtn