/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const urls = require('./src/urls')
const supportedLocales = require("./src/suportedLocales")

exports.createPages = async ({graphiql, actions}) => {
  const {createPage} = actions;
  const locales = supportedLocales.locales;

  for (const locale of locales) {
    createPage({
      path: urls.homeUrl(locale),
      component: path.resolve(`src/templates/home.js`),
      context: { locale: locale }
    })
  }
}