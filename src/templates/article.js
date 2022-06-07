import React  from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import ArticleContent from "../components/Article/ArticleContent"
import { theme } from "../styles/theme"
import Cover from "../components/Cover/Cover"

const Article = ({
                   data: {
                     article: {
                       seoSettings,
                       title,
                       coverImage,
                       content
                     }
                   }
                 }) => {

  return (
    <div>
      <Seo {...seoSettings} />
      {coverImage && <Cover image={coverImage}
                            title={title}
                            styles={{marginBottom: theme.space.l}}
      />}
      <ArticleContent contentData={content} />
    </div>
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
                ...ImageGallery
                ...VideoUpload
                ...VideoExternal
                ...FileList
            }
        }
    }
`

export default Article