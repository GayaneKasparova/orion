import React from "react"
import TitledSection from "../common/TitledSection/TitledSection"
import useDictionary from "../../hooks/use-dictionary"
import SocialLinks from "./SocialLinks"

const Contacts = () => {

  return (
    <TitledSection
      id={"contacts"}
      title={useDictionary("contacts")}
    >
      <SocialLinks />
    </TitledSection>
  )
}

export default Contacts