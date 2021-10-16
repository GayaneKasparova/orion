import React from "react";
import styled from "styled-components";
import {ContainerBox} from "../../components/common/ContainerBox/ContainerBox";
import useNavLinks from "../../hooks/use-nav-links"
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import {theme} from "../../styles/theme";


const Footer = () => {
    const links = useNavLinks();

    return (
        <StyledFooter>
            <FooterContainerBox>
                <LogoWrapper to={'/'}>
                    <StaticImage
                        src={"../../images/WhiteLogo.svg"}
                        alt={'Logo'}
                        layout="fixed"
                        width={42}
                        height={54}
                        style={{marginRight: 16}}
                    />
                    Կառուցապատողների <br/> Ասոցիացիա
                </LogoWrapper>

                <NavLinks>
                    <ul>
                        {links.map(link => (
                                <li key={link.id}>
                                    <a href={link.url}>{link.title}</a>
                                </li>
                            )
                        )}
                    </ul>
                </NavLinks>

            </FooterContainerBox>
        </StyledFooter>
    )
}


const StyledFooter = styled.footer`
  background-color: #16232C;
`

const FooterContainerBox = styled(ContainerBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
   ${theme.media.md} {
     flex-direction: row;
     align-items: flex-start;
     justify-content: space-between;
   }

  a {
    color: #FFFFFF;
  }
`
const LogoWrapper = styled(Link)`
  display: inline-flex;
  padding-top: 40px;
  
`

const NavLinks = styled.div`
  li{
    padding-bottom: 15px;
  }
  
  padding-top: 40px;
  padding-bottom: 40px;
`





export default Footer

