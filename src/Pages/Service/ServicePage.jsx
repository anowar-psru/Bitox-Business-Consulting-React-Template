import Breadcumb from '../../Components/Breadcumb/Breadcumb'
import SingleService from './ServiceComponents/SingleService'
import Step from '../HomeOne/HomeComponents/Step'
import PricingCard from '../../Components/SharedComponents/PricingCard'
const ServicePage = () => {
    return (
        <>
            <Breadcumb titleText={"Trusted High Quality Services"} subText={"service all"} />
            <SingleService />
            <Step />
            <PricingCard />
        </>
    )
}

export default ServicePage