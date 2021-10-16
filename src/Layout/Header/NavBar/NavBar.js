import React from "react";
import SubMenu from "./SubMenu/SubMenu";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import styled from "styled-components";
import {theme} from "../../../styles/theme";

const NavBar = ({links, className, onClick}) => {

    return (
        <StyledNav className={className}>
            <ul>
                {
                    links.map(link => (
                        <li key={link.id}>

                            <AnchorLink to={link.url} title={link.title} onClick={onClick}/>
                            {
                                link.treeChildren.length > 0 && <SubMenu subMenuItems={link.treeChildren}/>
                            }
                        </li>
                    ))
                }
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
  min-height: 0;
  transition: min-height .3s ease .5s;

  &.mobileMenu {
    min-height: calc(100vh - 90px);

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      li {
        padding-left: 0;

        &::after {
          left: 0;
        }

        a {
          padding: 16px 0 8px;

        }
      }
    }
  }

  li {
    position: relative;
    display: inline-block;
    padding: 0 8px;
    list-style: none;

    &::after {
      content: "";

      position: absolute;
      left: 16px;
      width: 0;
      bottom: 0;
      height: 2px;
      transition: width .3s ease;
      background-color: ${theme.colors.red};
    }

    &:hover {
      &::after {
        width: calc(100% - 32px);
      }
    }
  }

  a {
    display: inline-block;
    padding: 32px 8px;

    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeights.semibold};
    line-height: 27px;
    font-style: ${theme.fontWeights.regular};
    text-decoration: none;

    color: ${theme.colors.blue};

    ${theme.media.xl} {
      font-size: ${theme.fontSizes.l};
    }
  }
`;

export default NavBar