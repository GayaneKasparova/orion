import React  from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import ArticleContent from "../components/Article/ArticleContent"
import { ContainerBox } from "../components/common/ContainerBox/ContainerBox"
import styled from "styled-components"
import { theme } from "../styles/theme"

const Article = ({
                   data: {
                     article: {
                       seoSettings,
                       title,
                       locale,
                       coverImage,
                       content
                     }
                   }
                 }) => {

  return (
    <ContainerBox>
      <Seo {...seoSettings} />
      {coverImage && <CoverImage image={coverImage?.gatsbyImageData} alt={coverImage?.alt || title} />}
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContent contentData={content} />
    </ContainerBox>
  )
}

export const query = graphql`
    query Article($slug: String!, $locale: String!) {
        article: datoCmsArticle(slug: { eq: $slug }, locale: {eq: $locale}) {
            seoSettings {
                title
                description
                image {
                    fixed(width: 600) {
                        src
                    }
                }
            }
            locale
            title
            coverImage {
                gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.7)
                alt
            }
            content {
                ...RichText
                ...ImageBlock
                ...VideoUpload
                ...VideoExternal
                ...FileList
            }
        }
    }
`
const CoverImage = styled(GatsbyImage)`
  max-height: calc(100vh - 90px);
`

const ArticleTitle = styled.h1`
  margin: ${theme.space.m}px 0;
  color: ${theme.colors.red};

  ${theme.media.md} {
    margin: ${theme.space.l}px 0;
  }

  ${theme.media.lg} {
    margin: ${theme.space.xl}px 0;
  }
`

export default Article