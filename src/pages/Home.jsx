import React from 'react'

import pfp from "../assets/images/pfp.png"
import { Card, Button } from 'react-bootstrap'

function Home() {
    return (
        <div className="home">
            <div className="d-flex">
                <img height="250px" src={pfp} class="rounded-circle" alt="Cinque Terre" style={{ margin: "20px" }} />
                <div style={{ "margin": 0, transform: "translateY(40%)" }}>
                    <h1>BHAGYAJ KUMAR B</h1>
                    <h4>Full Stack Developer</h4>
                </div>
            </div>
            <br />
            <br />
            <div>
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="python" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="react" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" alt="FastAPI" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/flutter.svg" alt="flutter" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="postgresql" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/dart.svg" alt="dart" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/nodejs-2.svg" alt="nodejs" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg" alt="mysql" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="mongodb" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/sqlite.svg" alt="sqlite" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/golang-1.svg" alt="golang" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt="bootstrap" />
                <img style={{ marginLeft: 5 }} height="70px" src="https://cdn.worldvectorlogo.com/logos/heroku-4.svg" alt="heroku" />

            </div>

            <div className="education">
                <br />
                <br />
                <Card className="bg-dark">
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
                <Card className="bg-dark">
                    <Card.Header><h2>Connect me on</h2></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Button target="_blank" href="https://www.linkedin.com/in/bhagyajkumar-b-61a47621b/" variant="primary">LinkedIn</Button>
                            <Button target="_blank" href="https://www.instagram.com/deltawing.0700/" style={{backgroundColor: "#8a3ab9", borderColor: "purple", marginLeft: "5px"}}>Instagram</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                </div>

        </div>
    )
}

export default Home
