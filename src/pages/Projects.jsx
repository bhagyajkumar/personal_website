import React from 'react'
import ProjectsCard from '../components/ProjectsCard'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
    return (
        <div>
            <br />
            <ProjectsCard>
                {
                    projects.map(({ name, description, githubLink, deployedLink, platform }, index) => {
                        return (
                            <>
                                <ProjectCard name={name} description={description} githubLink={githubLink} deployedLink={deployedLink} />
                                <br />
                            </>
                        )
                    })
                }
            </ProjectsCard>
        </div>
    )
}

export default Projects
