import { useStaticQuery, graphql } from "gatsby"
import { useContext } from "react"
import { LocaleStateContext } from "../context/LocaleContextProvider"

const useDictionary = (key) => {
  const { locale } = useContext(LocaleStateContext)

  const { dictionary } = useStaticQuery(
    graphql`
        query dictionary {
            dictionary: allDatoCmsDictionary {
                nodes {
                    seeMore
                    locale
                }
            }
        }`
  )
  return dictionary.nodes.filter(entry => entry.locale === locale )[0][key]
}

export default useDictionary
