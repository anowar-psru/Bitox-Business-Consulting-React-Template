import Breadcumb from '../../Components/Breadcumb/Breadcumb'
import PlanningProcess from './ServiceDetailComponets/PlanningProcess'
import PlanningSolution from './ServiceDetailComponets/PlanningSolution'

const ServiceDetails = () => {
    return (
        <>
            <Breadcumb titleText={"Trusted High Quality Services"} subText={"Service Details"}/>
            <PlanningSolution />
            <PlanningProcess />
        </>
    )
}

export default ServiceDetails