import Breadcumb from '../../Components/Breadcumb/Breadcumb'
import ProjectGallery from './ProjectGallery'

const ProjectPage = () => {
    return (
        <>
            <Breadcumb titleText={"What We’ve Achieved Together"} subText={"Projects"} />
            <ProjectGallery />
        </>
    )
}

export default ProjectPage