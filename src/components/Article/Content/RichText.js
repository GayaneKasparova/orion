import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {theme} from "../../../styles/theme";

const RichText = ({ data: { title, body } } ) => {
    return (
        <div>
            <RichTextHeading>{title}</RichTextHeading>
            <RichTextBody dangerouslySetInnerHTML={{__html: body ?? '' }}/>
        </div>
    )
}

export default RichText

export const query = graphql`
    fragment RichText  on DatoCmsRichText {
        id
        title
        body
        model {
            apiKey
        }
    }
`

const RichTextHeading = styled.h2`
    margin-bottom: ${theme.space.m}px;
`

const RichTextBody = styled.div`
  font-size: 18px;
  line-height: 1.6;
  a {
    color: ${theme.colors.red};
    font-weight: 500;
    text-decoration: underline;
  }
`
