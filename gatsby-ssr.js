const React = require("react")
const Layout = require("./src/Layout/Layout").default
const LocaleContextProvider = require("./src/context/LocaleContextProvider").default

exports.wrapRootElement = ({ element }) => {
  return (
    <LocaleContextProvider>
      {element}
    </LocaleContextProvider>
  )
}

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>
    {element}
  </Layout>
)
