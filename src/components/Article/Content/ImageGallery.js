import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import { graphql } from "gatsby"

const ImageGallery = ({ galleryData: { images } }) => {
  const [isLightBoxOpen, setLightBoxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const openLightbox = (index) => {
    setLightBoxOpen(true)
    setPhotoIndex(index)
  }

  const galleryThumbs = images.length > 3  ? images?.slice(0,4) : images
  return (
    <GalleryWrapper>
      <GalleryTiles>
        {
          galleryThumbs.map((image, index) => (
            <li key={`${image.fileName}${index}`}
                onClick={() => openLightbox(index)}
            >
              <GatsbyImage
                alt={"photo"}
                image={image.gatsbyImageData}
              />
            </li>
          ))
        }
      </GalleryTiles>

      {
        galleryThumbs.length < images.length && <SeeOthers onClick={() => openLightbox(galleryThumbs.length)}>+{images.length - galleryThumbs.length}</SeeOthers>
      }

      {isLightBoxOpen && (
        <Lightbox
          mainSrc={images[photoIndex].url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => setLightBoxOpen(false)}
          imageTitle={images[photoIndex].title}
          enableZoom={false}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}

    </GalleryWrapper>
  )
}

export default ImageGallery

const GalleryWrapper = styled.div`
  position: relative;
`

const GalleryTiles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    height: 200px;
    border: 1px solid #c3c3c3;
    overflow: hidden;
    cursor: pointer;
    
    &:first-of-type {
      width: 40%;
      margin-bottom: 6px;
    }
    &:nth-of-type(2) {
      width: 59%;
      margin-bottom: 6px;
    }
    &:nth-of-type(3) {
      width: 55%;
    }
    &:last-of-type {
      width: 44%;
    }
    img {
      transition: all .3s ease !important;
    }
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
`

const SeeOthers = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 35px;
  font-size: 24px;
  background-color: rgba(45, 42, 42, .93);
  transform: translate(-50%, -50%);
  border: 1px solid #c3c3c3;
  box-shadow: 1px 3px 13px 2px #818181;
  cursor: pointer;
  transition: transform .3s ease;
  &:hover {
    transform: scale(1.05) translate(-50%, -50%);
  }
`

export const query = graphql`
    fragment ImageGallery  on DatoCmsImageGallery {
        id
        model {
            apiKey
        }
        images {
            alt
            filename
            title
            gatsbyImageData(aspectRatio: 1.1, imgixParams: {fit: "crop"})
            url
        }
    }
`