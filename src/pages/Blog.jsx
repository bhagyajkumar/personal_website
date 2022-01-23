import React from 'react'
import { Card } from 'react-bootstrap'
import Gist from "react-gist"
import { posts } from '../data/blog'
import { Link } from 'react-router-dom'

function Blog() {

    return (
        <>
        <br/>
        {
            posts.map(({id, title, description})=>{
                return(
                    <Card className='bg-dark' key={id}>
                        <Card.Header>
                            <Link to={id}><h5 className='text-white'>{title}</h5></Link>
                        </Card.Header>
                        <Card.Body>
                            {description}
                        </Card.Body>
                    </Card>
                )
            })
        }
        </>
    )
}

export default Blog
