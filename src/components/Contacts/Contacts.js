import React from "react"
import TitledSection from "../common/TitledSection/TitledSection"
import useDictionary from "../../hooks/use-dictionary"
import SocialLinks from "./SocialLinks"
import Map from "../Map/Map"
import { theme } from "../../styles/theme"

const Contacts = () => {

  return (
    <TitledSection
      id={"contacts"}
      title={useDictionary("contacts")}
    >
      <SocialLinks />
      <Map styles={{marginTop: theme.space.m}}/>
    </TitledSection>
  )
}

export default Contacts