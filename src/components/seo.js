import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'

/**
 * SEO component
 **/

const Seo = ({title, description, metaUrl, image}) => {
    const seoData = useStaticQuery(
        graphql`
            query SeoSettings {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                        author
                        language
                        color
                    }
                }
                datoCmsSite {
                    globalSeo {
                        siteName
                        twitterAccount
                        facebookPageUrl
                        fallbackSeo {
                            description
                            title
                            twitterCard
                            image {
                                fixed(width: 1246) {
                                    src
                                }
                            }
                        }
                    }
                    faviconMetaTags {
                        tags
                    }
                }
            }
        `
    )

    const {
        site: {siteMetadata},
        datoCmsSite: {
            globalSeo: {fallbackSeo, siteName},
            faviconMetaTags,
        },
    } = seoData

    const meta = {
        lang: siteMetadata.language,
        title: title || siteName || fallbackSeo.title,
        description: description || fallbackSeo.description,
        url: metaUrl || siteMetadata.url,
        image: image?.fixed?.src || fallbackSeo.image?.fixed.src,
        color: siteMetadata.color,
    }

    return (
        <Helmet title={meta.title} titleTemplate={`%s - ${siteMetadata.title}`}>
            <html lang={meta.lang}/>

            <meta name="description" content={meta.description}/>
            <meta name="image" content={meta.image}/>
            <meta name="theme-color" content={meta.color}/>
            <meta name="application-name" content={siteName}/>
            <link rel="canonical" href={meta.url}/>

            <meta property="og:url" content={meta.url}/>
            <meta property="og:title" content={meta.title}/>
            <meta property="og:description" content={meta.description}/>
            <meta property="og:image" content={meta.image}/>

            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-title" content={siteName}/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

            {faviconMetaTags.tags.length &&
            faviconMetaTags.tags.map(
                (tag, index) => {
                    const attributes = tag.attributes
                    attributes.key = index
                    return React.createElement(tag.tagName, attributes)
                }
            )}
        </Helmet>
    )
}

export default Seo

export const query = graphql`
    fragment SeoFields on DatoCmsSeoField {
        title
        description
        image {
            fixed(width: 600) {
                src
            }
        }
    }
`
