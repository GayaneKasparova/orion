import React from 'react'

import {GatsbyImage} from 'gatsby-plugin-image'
import {graphql} from 'gatsby'

const ImageBlock = ({imageData: {image}}) => {
    return (
        <GatsbyImage alt={`${image?.alt || image?.filename?.split('.')[0]}`} image={image?.gatsbyImageData}
                     style={{display: 'block'}}/>
    )
}

export default ImageBlock

export const query = graphql`
    fragment ImageBlock  on DatoCmsImage {
        id
        model {
            apiKey
        }
        image {
            alt
            filename
            gatsbyImageData
        }
    }
`
