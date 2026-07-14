import Breadcumb from "../../Components/Breadcumb/Breadcumb"
import ClientCard from "../../Components/SharedComponents/ClientCard"
import ReviewCard from "../../Components/SharedComponents/ReviewCard"
import TeamCard from "../../Components/SharedComponents/TeamCard"
import BannerText from "./TeamComponents/BannerText"

const Team = () => {
    return (
        <>
            <Breadcumb titleText={"Meet Our Experienced Professionals"} subText={"team members"}/>
            <TeamCard />
            <BannerText />
            <ReviewCard />
            <ClientCard />
        </>
    )
}

export default Team