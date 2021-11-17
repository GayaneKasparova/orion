require("dotenv").config()
//const {styles} = require("./src/components/Map/styles")

module.exports = {
  siteMetadata: {
    site: "Orion Club",
    title: process.env.PROJECT_NAME,
    description: "Orion Club web app",
    siteUrl: process.env.SITE_URL,
    language: "hy",
    color: "#00bfdf",
    author: "Gayane Kasparova"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Orion Sports Club`,
        short_name: `OrionClub`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#00bfdf`,
        display: `standalone`,
        lang: `hy`,
        icon: `src/assets/images/logo.png`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Orion Sports Club`,
            short_name: `OrionClub`
          },
          {
            start_url: `/ru/`,
            lang: `ru`,
            name: `Orion Sports Club`,
            short_name: `OrionClub`
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    }
  ]
}
