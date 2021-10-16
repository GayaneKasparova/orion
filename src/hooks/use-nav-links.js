import {useStaticQuery, graphql} from "gatsby";

const useNavLinks = () => {
   const {navLinks} = useStaticQuery(
        graphql`
        query navLinks {
          navLinks: allDatoCmsNavLink(sort: {fields: position}) {
            nodes {
              id
              url
              title
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

    return navLinks.nodes
}

export default useNavLinks
