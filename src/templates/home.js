import React, { useContext } from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Banner from "../components/Banner/Banner"
import Team from "../components/Team/Team"
import Contacts from "../components/Contacts/Contacts"
import TitledSection from "../components/common/TitledSection/TitledSection"
import { LocaleStateContext } from "../context/LocaleContextProvider"
import Card from "../components/common/Card"

const IndexPage = ({
                     data: {
                       home: {
                         seoSettings,
                         bannerBackgroundImage,
                         bannerTitle,
                         bannerSubtitle,
                         bannerBtnText,
                         bannerBtnLink,
                         facilitiesTitle,
                         facilities,
                         teamTitle,
                         team
                       }
                     }
                   }) => {

  const { locale } = useContext(LocaleStateContext)

  return (
    <div id={"home"}>
      <Seo {...seoSettings} />
      <Banner
        bgImage={bannerBackgroundImage}
        title={bannerTitle}
        subtitle={bannerSubtitle}
        bannerBtnText={bannerBtnText}
        bannerBtnLink={bannerBtnLink}
      />
      <TitledSection
        title={facilitiesTitle}
        id={'facilities'}
      >
        {facilities.map((facility, index) => (
            <Card
              key={facility.id}
              title={facility.title}
              description={facility.description}
              cover={facility.cover}
              link={`/${locale}/${facility.slug}`}
              reverse={(index + 1) % 2 === 0 ? 'true' : 'false'}
            />
          ))}
      </TitledSection>


      <Team
        teamTitle={teamTitle}
        team={team}
      />

      <Contacts />

    </div>
  )
}

export const query = graphql`
    query HomePage($locale: String!){
        home: datoCmsHomePage (locale: {eq: $locale}) {
            seoSettings {
                title
                description
                image {
                    fixed(width: 600) {
                        src
                    }
                }
            }

            bannerTitle
            bannerSubtitle
            bannerBackgroundImage {
                url
            }
            bannerBtnText
            bannerBtnLink

            facilitiesTitle
            facilities {
                ... on DatoCmsSportsClub {
                    id
                    title
                    cover {
                        gatsbyImageData(aspectRatio: 1.7)
                    }
                    description
                    slug
                }
                ... on DatoCmsBoxingSalon {
                    id
                    title
                    cover {
                        gatsbyImageData(aspectRatio: 1.7)
                    }
                    description
                    slug
                }
                ... on DatoCmsYogaStudio {
                    id
                    title
                    cover {
                        gatsbyImageData(aspectRatio: 1.7)
                    }
                    description
                    slug
                }
                ... on DatoCmsBar {
                    id
                    title
                    cover {
                        gatsbyImageData(aspectRatio: 1.7)
                    }
                    description
                    slug
                }
                ... on DatoCmsMeetingRoom {
                    id
                    title
                    cover {
                        gatsbyImageData(aspectRatio: 1.7)
                    }
                    description
                    slug
                }

            }
            teamTitle
            team {
                id
                firstName
                lastName
                slug
                photo {
                    gatsbyImageData(aspectRatio: 1, imgixParams: {w: "200", h: "200", fit: "crop"})
                }
                title
                bio
            }
        }
    }`

export default IndexPage

