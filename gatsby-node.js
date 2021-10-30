/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const urls = require('./src/urls')
const supportedLocales = require("./src/suportedLocales")

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const locales = supportedLocales.locales;

  const {data: {articles}} = await graphql(`
    {
      articles: allDatoCmsArticle {
        nodes {
          slug
          locale
          type: articleType
        }
      }
    }
  `)

  for (const locale of locales) {
    createPage({
      path: urls.homeUrl(locale),
      component: path.resolve(`src/templates/home.js`),
      context: {locale: locale}
    })

    createPage({
      path: urls.demoUrl(locale),
      component: path.resolve('src/templates/demo.js'),
      context: {locale: locale}
    })


    // Article pages
    articles.nodes.forEach((article) =>
      createPage({
        path: urls.articleUrl(article.locale, article.type, article.slug),
        component: path.resolve(`./src/templates/article.js`),
        context: {
          slug: article.slug,
          locale: locale
        },
      })
    )
  }
}