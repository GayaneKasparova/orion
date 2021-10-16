import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";
import SeeMore from "../SeeMore/SeeMore";
import styled from "styled-components";
import {articleUrl} from "../../urls";
import {theme} from "../../styles/theme";
import Link from "gatsby-link";

const ArticleTile = ({title, description, slug, coverImage}) => (
    <ArticleCard>
        {coverImage &&
        <Link to={articleUrl(slug)}>
            <GatsbyImage image={coverImage.gatsbyImageData} alt={`${coverImage.alt}`} style={{maxHeight: 200}}/>
        </Link>}
        <CardContent>
            <HeaderLink to={`/${slug}`}>
                <h3 title={title}> {title}</h3>
            </HeaderLink>
            <p title={description}>{description}</p>
            <SeeMore link={articleUrl(slug)} text={'Տեսնել ավելին'}/>
        </CardContent>
    </ArticleCard>
)

export default ArticleTile

const ArticleCard = styled.div`
  overflow: hidden;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  color: #444444;
  border-radius: 3px;
  box-shadow: 0 2px 7px 1px #e1e1e1;


  img {
    transition: transform .3s ease !important;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 16px;
  font-size: 16px;

  p {
    margin: 16px 0 24px;
    display: -webkit-box;
    width: 100%;
    height: 48px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
const HeaderLink = styled(Link)`
width: 100%;
  h3 {
    font-size: 20px;
    color: ${theme.colors.red};
    line-height: 1.3;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
