import React from 'react'

import {graphql} from 'gatsby'

const VideoExternal = ({
                           videoData: {
                               videoUrl: {
                                   title,
                                   url,
                                   provider,
                                   providerUid
                               }
                           }
                       }) => {

    const generateSrc = (provider) => {
        switch (provider) {
            case 'youtube':
                return `https://www.youtube.com/embed/`
            case 'vimeo':
                return `https://player.vimeo.com/video/`
            case 'facebook':
                return `https://www.facebook.com/video/embed?video_id=`
            default:
                return ''
        }
    }

    console.log(provider)
    console.log(providerUid)
    console.log(url)

    return (
        <iframe src={`${generateSrc(provider)}${providerUid}`}
                title={title}
                width={'100%'}
                height={500}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen={true}
        />
    )
}

export default VideoExternal

export const query = graphql`
    fragment VideoExternal on DatoCmsVideoExternal {
        id
        model {
            apiKey
        }
        videoUrl {
            title
            url
            provider
            providerUid
        }
    }
`
