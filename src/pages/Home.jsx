import React from 'react'

import pfp from "../assets/images/pfp.png"
import { Card, Button } from 'react-bootstrap'
import { logos } from '../data/logos.js'

function Home() {
    return (
        <>
            <br />
            <Card style={{ backgroundColor: "#222" }}>
                <Card.Body>
                    <div className="home">
                        <div className="d-flex info">
                            <img width="250px" height="250px" src={pfp}
                                className="rounded-circle" alt="Cinque Terre"
                                style={{ margin: "20px", border: "5px solid #666" }} />
                            <div style={{ "margin": 0, transform: "translateY(40%)" }}>
                                <h1>BHAGYAJ KUMAR B</h1>
                                <Button variant="outline-primary" href='mailto: mail@bhagyaj.ingit'>Get in touch with me</Button>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div>

                            {logos.map(({ alt, url }, index) => {
                                return (
                                    <img key={index} style={{ marginLeft: 5 }} height="70px" src={url} alt={alt} />
                                )
                            })}
                        </div>

                        <div className="education">
                            <br />
                            <br />
                            <Card className="bg-black">
                                <Card.Header><h2>About me</h2></Card.Header>
                                <Card.Body>
                                    <Card.Text>

                                        My name is Bhagyaj. I am passionate about programming and I am a Full Stack Developer.
                                        I am currently learning flutter.
                                        I am good with python, django, react, nodejs, mongodb, mysql, sqlite,
                                        golang, bootstrap, heroku, fastapi, postgresql.

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                            <br />
                            <Card className="bg-black">
                                <Card.Header><h2>Connect me on</h2></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <Button target="_blank" href="https://www.linkedin.com/in/bhagyajkumar-b-61a47621b/" variant="primary">LinkedIn</Button>
                                        <Button target="_blank" href="https://www.instagram.com/deltawing.0700/" style={{ backgroundColor: "#8a3ab9", borderColor: "purple", marginLeft: "5px" }}>Instagram</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Home
