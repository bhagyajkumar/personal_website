import React from 'react'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'

function Skills() {
    return (
        <div>
            {
                skills.map(({skillName, progress})=>{
                    return (
                        <SkillCard skillName={skillName} progress={progress}/>
                    )
                })
            }
        </div>
    )
}

export default Skills
