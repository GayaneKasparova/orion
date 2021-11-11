import React from "react"
import { graphql } from "gatsby"

const SportsClub = ({
                      data: {
                        title
                      }
                    }) => {

  return (
    <>
      <h1>{title}</h1>
      <iframe width="640"
              height="360"
              src="https://roundme.com/embed/730484/2300890"
              frameBorder="0"
              webkitallowfullscreen={"true"}
              mozallowfullscreen={"true"}
              allowFullScreen={"true"}
      />
    </>
  )
}

export const query = graphql`
    query SportsClubPage($locale: String!){
        home: datoCmsSportsClub (locale: {eq: $locale}) {
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
        }
    }`


export default SportsClub