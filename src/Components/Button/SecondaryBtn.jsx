import { IoMdPlay } from 'react-icons/io'

const SecondaryBtn = ({ btnText}) => {
  return (
    <div
      className={`group w-fit text-primary flex items-center gap-2.5 border border-primary rounded-full py-5 px-7.5 relative overflow-hidden cursor-pointer`}
    >
      {/* Background */}
      <span className="absolute left-[50%] -translate-x-1/2 bottom-0 w-0 h-0 bg-primary rounded-full transition-all duration-300 ease-out group-hover:w-full group-hover:translate-x-0 group-hover:left-0 group-hover:h-full z-0"></span>

      {/* Content */}
      <span className="relative z-10 leading-5 font-bold transition duration-300 group-hover:text-white">
        {btnText}
      </span>

      <IoMdPlay className="relative z-10 text-lg transition duration-300 group-hover:text-white" />
    </div>
  )
}

export default SecondaryBtn