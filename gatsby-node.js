/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const urls = require('./src/urls')

exports.createPages = async ({graphiql, actions}) => {
  const {createPage, createRedirect} = actions;
  const locales = urls.supportedLocales;

  for (const locale of locales) {
    createPage({
      path: urls.homeUrl(locale),
      component: path.resolve(`.src/templates/home.js`),
      content: { locale: locale }
    })
  }
}