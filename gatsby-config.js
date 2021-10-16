require('dotenv').config()

module.exports = {
    siteMetadata: {
        site: 'Orion Club',
        title: process.env.PROJECT_NAME,
        description: 'Orion Club web app',
        siteUrl: process.env.SITE_URL,
        language: 'de',
        color: '#0E2B56',
        author: 'Gayane Kasparova',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-anchor-links`,
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: process.env.DATO_API_TOKEN,
            },
        },
    ],
}
