import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {db} from '../firebase/config'
import { collection, getDocs, query } from 'firebase/firestore'


function Blog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(
        ()=>{
            const getBlogs = async ()=>{
                const q = query(collection(db, 'blogs'))
                const qss = await getDocs(q)
                const blogList = qss.docs.map(doc=>Object.assign({}, {id: doc.id}, doc.data()))
                setBlogs(blogList)
            }
            getBlogs()
        }, []
    )
    return (
        <>
        <br/>
        {
            blogs.map(({id, title, description})=>{
                return(
                    <Card key={id} className='bg-dark'>
                        <Card.Header>
                            <Link to={"/blog/"+id}><h5 className='text-white'>{title}</h5></Link>
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
