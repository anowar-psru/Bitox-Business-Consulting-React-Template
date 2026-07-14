import Breadcumb from '../../Components/Breadcumb/Breadcumb'
import Facts from '../../Components/SharedComponents/Facts'
import AboutUs from './AboutComponents/AboutUs'
import Mission from './AboutComponents/Mission'
import WhyChoose from './AboutComponents/WhyChoose'
import AboutCompany from './AboutComponents/AboutCompany'
import TeamMembers from './AboutComponents/TeamMembers'
import SliderArea from './AboutComponents/SliderArea'

const AboutPage = () => {
    return (
        <>
            <Breadcumb titleText={"Empowering Growth & Success"} subText={"about us"}/>
            <Facts/>
            <AboutUs />
            <Mission />
            <WhyChoose />
            <AboutCompany />
            <TeamMembers />
            <SliderArea />
        </>
    )
}

export default AboutPage