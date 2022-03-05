import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'


function Blog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(
        () => {
            fetch("https://www.googleapis.com/blogger/v3/blogs/3767182796654300486/posts?key=AIzaSyAEL7ORqPtS31-XAi-ZSlWLau36rN2TiVs&fields=items(id,title,published,url)")
                .then(res => {
                    res.json()
                        .then((data => {
                            setBlogs(data["items"])
                        }))
                })
        }, []
    )
    return (
        <>
            <br />
            {
                blogs.map(({ id, url, title }) => {
                    return (
                        <div key={id.toString()} >
                            <Card className='bg-dark'>
                                <Card.Header>
                                    <h3>{title}</h3>
                                </Card.Header>
                                <Card.Body>
                                    <a href={url} target="_blank" rel="noreferrer">{url}</a>
                                </Card.Body>
                            </Card>
                            <br />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Blog
