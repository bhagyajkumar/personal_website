import React from 'react'
import { Card } from 'react-bootstrap'


function ProjectCard(props) {
    return (
        <Card className="bg-black">
            <Card.Header>
                <Card.Title>{ props.name }</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.description}
                </Card.Text>
                {props.githubLink ? <a rel="noreferrer" target="_blank" className="btn btn-primary mx-2" href={props.githubLink}>Github</a> : null}
                {props.deployedLink ? <a rel="noreferrer" target="_blank" className="btn btn-success mx-2" href={props.deployedLink}>Live Link</a> : null}
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
