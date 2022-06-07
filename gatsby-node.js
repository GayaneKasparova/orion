/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const urls = require("./src/urls")
const supportedLocales = require("./src/suportedLocales")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const locales = supportedLocales.locales

  const {
    data: {
      articles,
      team
    }
  } = await graphql(`
    {
      articles: allDatoCmsArticle {
        nodes {
          slug
          locale
          type: articleType
        }
      }
      team: allDatoCmsTeam {
        nodes {
          locale
          slug
        }
      }
    }
  `)


  for (const locale of locales) {
    createPage({
      path: urls.homeUrl(locale),
      component: path.resolve(`src/templates/home.js`),
      context: { locale: locale }
    })

    createPage({
      path: urls.demoPageUrl(locale),
      component: path.resolve(`src/templates/demoPage.js`),
      context: { locale: locale }
    })

    createPage({
      path: urls.sportsClubUrl(locale),
      component: path.resolve("src/templates/sportsClub.js"),
      context: { locale: locale }
    })

    createPage({
      path: urls.boxingSalonUrl(locale),
      component: path.resolve("src/templates/boxingSalon.js"),
      context: { locale: locale }
    })

    createPage({
      path: urls.yogaStudioUrl(locale),
      component: path.resolve("src/templates/yogaStudio.js"),
      context: { locale: locale }
    })

    createPage({
      path: urls.barUrl(locale),
      component: path.resolve("src/templates/bar.js"),
      context: { locale: locale }
    })

    createPage({
      path: urls.meetingRoomUrl(locale),
      component: path.resolve("src/templates/meetingRoom.js"),
      context: { locale: locale }
    })


    // Article pages
    articles.nodes.forEach((article) => {
        createPage({
          path: urls.articleUrl(article.locale, article.type, article.slug),
          component: path.resolve(`./src/templates/article.js`),
          context: {
            slug: article.slug,
            locale: article.locale
          }
        })
      }
    )

    // Team pages
    team.nodes.forEach((teamMember) => {
        createPage({
          path: urls.teamMemberUrl(teamMember.locale, teamMember.slug),
          component: path.resolve(`./src/templates/teamMember.js`),
          context: {
            slug: teamMember.slug,
            locale: teamMember.locale
          }
        })
      }
    )
  }
}