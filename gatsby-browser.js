const React = require('react')
const Layout = require('./src/Layout/Layout').default

exports.wrapPageElement = ({ element, props }) => (
    <Layout {...props} location={props.location}>
        {element}
    </Layout>
)
