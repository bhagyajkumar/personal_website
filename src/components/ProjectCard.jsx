import React from 'react'
import { ButtonGroup, Card } from 'react-bootstrap'


function ProjectCard(props) {
    return (
        <Card className="bg-black">
            <Card.Header>
                <Card.Title>{props.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <ButtonGroup size='sm'>
                    {props.githubLink ? <a rel="noreferrer" target="_blank" className="btn btn-primary" href={props.githubLink}>Github</a> : null}
                    {props.deployedLink ? <a rel="noreferrer" target="_blank" className="btn btn-success" href={props.deployedLink}>Live Link</a> : null}
                    {props.deployToHerokuLink ? <a rel="noreferrer" target="_blank" className="btn btn-warning" href={props.deployToHerokuLink}>Deploy to Heroku</a> : null}
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
