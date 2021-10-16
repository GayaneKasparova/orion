import React from 'react'

import {graphql} from 'gatsby'

const VideoUpload = ({videoData: {videoFile}}) => {
    return (
        <video width="100%" height="500" controls={true}>
            <source src={`${videoFile?.url}`} type={`video/${videoFile?.format}`}/>
            {videoFile?.alt || ` Your browser does not support the video tag.`}
        </video>
    )
}

export default VideoUpload

export const query = graphql`
    fragment VideoUpload on DatoCmsVideoUpload {
        id
        model {
            apiKey
        }
        videoFile {
            alt
            url
            format
        }
    }
`
