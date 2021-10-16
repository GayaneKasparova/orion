import React, {useState} from "react";
import useNavLinks from "../../hooks/use-nav-links";
import Navbar from "./NavBar/NavBar";
import {Link} from "gatsby";
import styled from "styled-components";
import {ContainerBox} from "../../components/common/ContainerBox/ContainerBox";
import {StaticImage} from "gatsby-plugin-image";
import {theme} from "../../styles/theme";
import {useWindowSize} from "../../hooks/useWindowSize";
import MenuBtn from "./MenuBtn";


const Header = () => {
    const links = useNavLinks();
    const {width} = useWindowSize()
    const [menuIsOpen, setMenuOpen] = useState(false)

    return (

        <StyledHeader>
            <HeaderContainerBox>
                <LogoWrapper
                    to={'/'}
                    onClick={() => setMenuOpen(false)}
                >
                    <StaticImage
                        src={"../../images/Logo.svg"}
                        alt={'Logo'}
                        layout="fixed"
                        width={42}
                        height={54}
                        style={{marginRight: 16}}
                    />
                    Կառուցապատողների <br/> Ասոցիացիա
                </LogoWrapper>

                {width > 991 ? <Navbar links={links}/> :
                    <MenuBtn onClick={() => setMenuOpen(!menuIsOpen)} isOpen={menuIsOpen}/>}
            </HeaderContainerBox>

            {width <= 991 && menuIsOpen && <ContainerBox><Navbar links={links} className={'mobileMenu'}
                                                                 onClick={() => setMenuOpen(false)}/></ContainerBox>}

        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 9999;
  box-shadow: 3px -5px 8px 2px ${theme.colors.red};
`

const HeaderContainerBox = styled(ContainerBox)`
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

 const LogoWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 52px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
  color: #0E2B56;

  ${theme.media.xl} {
    font-size: 16px;
  }
`


export default Header

