import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { db } from '../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { documentId } from 'firebase/firestore';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'



function BlogView() {
    const params = useParams()
    const [data, setData] = useState("")
    
    useEffect(
        () => {
            const getData = async () => {
                const q = query(collection(db, 'blogs'), where(documentId(), '==', params.blogId))
                const qss = await getDocs(q)
                const blogList = qss.docs.map(doc => Object.assign({}, { id: doc.id }, doc.data()))
                fetch(blogList[0]["content_url"])
                .then((res) => {
                    res.text()
                    .then((data) => {
                        setData(data)
                    })
                })
            }
            getData()
        }
        )
        
        function Image(props) {
            return <img {...props} style={{maxWidth: '100%'}} alt="test" />
        }
    return (
        <ReactMarkdown renderers = {{image: Image}} components={{img: Image,
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={dark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                    />
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            }
        }}>
            {data}
        </ReactMarkdown>
        // <Gist id={params.blogId}/>
    )
}

export default BlogView;
