import { useStaticQuery, graphql } from "gatsby"
import { useContext } from "react"
import { LocaleStateContext } from "../context/LocaleContextProvider"

const useNavLinks = (showIn) => {
  const { locale } = useContext(LocaleStateContext)

  const { navLinks } = useStaticQuery(
    graphql`
        query navLinks {
            navLinks: allDatoCmsNavLink(sort: {fields: position}, filter: {hide: {eq: false}}) {
                nodes {
                    id
                    url
                    title
                    locale
                    openInNewTab
                    originalId
                    hide
                    showIn
                    treeChildren {
                        id
                        title
                        url
                        openInNewTab
                        originalId
                    }
                }
            }
        }`
  )

  return navLinks.nodes.filter(navLink => navLink.locale === locale && (navLink.showIn === showIn || navLink.showIn === "both" ) )
}

export default useNavLinks
