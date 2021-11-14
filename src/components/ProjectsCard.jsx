import React from 'react'
import { Card } from 'react-bootstrap'

function ProjectsCard(props) {
    return (
        <div>
            <Card style={{backgroundColor: "#333"}}>
                <Card.Header>
                    <h1>My Projects</h1>
                </Card.Header>
                <Card.Body>
                    { props.children }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectsCard
