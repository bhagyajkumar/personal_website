import React from 'react'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'

function Skills() {
    return (
        <div>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                skills.map(({ skillName, progress }, index) => {
                    return (
                        <SkillCard key={index} skillName={skillName} progress={progress} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Skills
