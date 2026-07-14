import Breadcumb from '../../Components/Breadcumb/Breadcumb'
import FaqBody from './FaqBody'

const FaqPage = () => {
    return (
        <>
            <Breadcumb titleText={"Frequently Asked Questions"} subText={"faqs"} />
            <FaqBody />
        </>
    )
}

export default FaqPage