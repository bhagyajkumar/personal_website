import React from 'react';
import { useParams } from 'react-router-dom';
import Gist from 'react-gist';

function BlogView() {
    const params = useParams()
    console.log("test")
    return(
        <Gist id={params.blogId}/>
    )
}

export default BlogView;
