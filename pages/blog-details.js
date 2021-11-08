import React from 'react'
import BlogDetailsBreadCrumb from '../Components/Elements/BlogDetails/BlogDetailsBreadCrumb'
import BlogDetailsCause from '../Components/Elements/BlogDetails/BlogDetailsCause'
import Layout2 from '../Components/Layout/Layout2'

export default function blogDetails() {
    return (
        <Layout2>
            <BlogDetailsBreadCrumb/>
            <BlogDetailsCause/>

        </Layout2>
    )
}
