import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'

function SkillCard(props) {
    return (
        <div>
            <br />
            <Card className="bg-dark">
                <Card.Header>
                    <Card.Title>{ props.skillName }</Card.Title>
                </Card.Header>
                <Card.Body>
                    <ProgressBar variant="success" now={props.progress}></ProgressBar>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SkillCard
