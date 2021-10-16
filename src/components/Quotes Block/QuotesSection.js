import React from "react";
import styled from "styled-components";
import {GatsbyImage} from "gatsby-plugin-image";
import {useWindowSize} from "../../hooks/useWindowSize";
import {theme} from "../../styles/theme";
import {ContainerBox} from "../common/ContainerBox/ContainerBox";
import QuoteIcon from "../../images/Quotes.svg"

const QuotesSection = ({text, author, firstBanner, secondBanner}) => {
    const {width} = useWindowSize()
    console.log(theme.media.md)
    return (
        <SectionWrapper>
            <QuoteWrapper>
                <GatsbyImage alt={`${firstBanner.alt}`} image={firstBanner.gatsbyImageData}/>
                <blockquote>
                    <p>{text}
                        <span>{author}</span>
                    </p>
                </blockquote>
            </QuoteWrapper>
            {width > theme.breakpoints.md &&
            <GatsbyImage alt={`${secondBanner.alt}`} image={secondBanner.gatsbyImageData}/>}
        </SectionWrapper>
    )
}


export default QuotesSection


const SectionWrapper = styled(ContainerBox)`
  ${theme.media.md} {
    display: flex;
    gap: 24px;

    & > div:first-of-type {
      width: 60%;
    }

    & > div:last-of-type {
      width: 40%;
    }
  }

`
const QuoteWrapper = styled.div`
  font-size: 24px;
  blockquote {
    position: relative;
    margin-top: 24px;
    &::before {
      content: url(${QuoteIcon});
      position: absolute;
      left: -65px;
      top: -12px;
    }
  } span {
    color: ${theme.colors.red};
    font-size: 22px;
    font-weight: ${theme.fontWeights.semibold};
    padding-left: 16px;
  }
`




