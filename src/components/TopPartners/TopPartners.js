import React from "react";
import PartnerTile from "./PartnerTile";
import ContentGrid from "../common/ContentGrid/ContentGrid";

const TopPartners = ({topPartners}) => {

    return (
        <ContentGrid cols={4}>
            {
                topPartners.map(partner => (
                    <PartnerTile {...partner} key={partner.id}/>
                ))
            }
        </ContentGrid>
    )
}

export default TopPartners;