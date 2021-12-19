import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

function Blog() {
    const [posts, setPosts] = useState([])
    useEffect(
        () => {
            axios.get("https://blogpostapi.deltawing.repl.co/")
                .then((res) => {
                    setPosts(res.data)
                })
        },
        []
    )

    return (
        <div>
            <br />
            {posts.map(({ id, title, content }) => {
                return (
                    <>
                        <Card className="bg-dark" key={id}>
                            <Card.Header>
                                <h1>{title}</h1>
                            </Card.Header>
                            <Card.Body>
                                <p>
                                    <ReactMarkdown>{content}</ReactMarkdown>
                                </p>
                            </Card.Body>
                        </Card>
                        <br />
                    </>
                )
            })}
        </div>
    )
}

export default Blog
