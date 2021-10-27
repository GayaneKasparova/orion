import { useStaticQuery, graphql } from "gatsby"
import { useContext } from "react"
import { LocaleStateContext } from "../context/LocaleContextProvider"

const useNavLinks = () => {
  const { locale } = useContext(LocaleStateContext)

  const { navLinks } = useStaticQuery(
    graphql`
        query navLinks {
            navLinks: allDatoCmsNavLink(sort: {fields: position}) {
                nodes {
                    id
                    url
                    title
                    locale
                    openInNewTab
                    originalId
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

  return navLinks.nodes.filter(navLink => navLink.locale === locale)
}

export default useNavLinks
