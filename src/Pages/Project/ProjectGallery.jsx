import Container from '../../Components/SharedComponents/Container'
import SectionTitleTwo from '../../Components/SectionTitle/SectionTitleTwo'
import ProjectCard from '../../Components/SharedComponents/ProjectCard'

const ProjectGallery = () => {
    return (
        <>
            <sectoin>
                <Container> 
                    <div className= 'py-20 lg:py-30'>

                        {/* Section Title Here */}
                        <div className="max-w-200 mx-auto text-center pb-15">
                            <SectionTitleTwo titleBtn={"bitox projects"} titleText={"Real Challenges. Real Solutions. Real Impact."}/>
                        </div>
                        {/* Project Card Here */}
                        <ProjectCard />
                    </div>
                </Container>
            </sectoin>
        </>
    )
}

export default ProjectGallery