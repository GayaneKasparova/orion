import React from "react"
import { ContainerBox } from "../components/common/ContainerBox/ContainerBox"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import Banner from "../components/Banner/Banner"
import RichText from "../components/Article/Content/RichText"

const DemoPage = ({
                    data: {
                      demoPage: {
                        seoSettings,
                        title,
                        description,
                        bannerBackgroundImage
                      }
                    }
                  }) => {

  return (
    <>
      <Seo {...seoSettings} />
      <Banner bgImage={bannerBackgroundImage} />
      <ContainerBox>
        <h1>{title}</h1>
        <RichText data={{ body: description }} />
      </ContainerBox>
    </>
  )
}

export default DemoPage

export const query = graphql`
    query DemoPage($locale: String!){
        demoPage: datoCmsDemoPage (locale: {eq: $locale}) {
            seoSettings {
                title
                description
                image {
                    fixed(width: 600) {
                        src
                    }
                }
            }
            title
            description
            bannerBackgroundImage {
                url
            }

        }
    }`
