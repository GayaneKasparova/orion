import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { LocaleDispatchContext, LocaleStateContext } from "../../../context/LocaleContextProvider"
import { supportedLanguages, locales, defaultLocale } from "../../../suportedLocales"
import styled from "styled-components"
import { theme } from "../../../styles/theme"
import { GradientBorder } from "../../../styles/globalStyles"

const LocaleControl = () => {
  const [firstVisit, setFirstVisit] = useState(true)
  const { locale } = useContext(LocaleStateContext)
  const dispatch = useContext(LocaleDispatchContext)

  const setLocale = useCallback((locale) => {
      dispatch({ type: "CHANGE_LOCALE", value: locale })
    }, [dispatch]
  )
  const [toggle, setToggle] = useState(false)
  const toggleHandler = () => {
    setToggle(!toggle)
  }

  const innerRef = useRef(null)
  useOuterClickNotifier((e) => (toggle ? toggleHandler() : null), innerRef)
  const pathName = window.location.pathname
  const pathLocaleName = pathName.split("/")[1]

  const getTargetPath = useCallback((targetLocale) => {
    if (!pathName.split("/")[2] && targetLocale === defaultLocale) {
      return "/"
    } else {
      const pathNameStart = pathName.slice(0, pathName.indexOf(`${pathLocaleName}`))
      const pathNameEnd = pathName.slice(pathName.indexOf(`${pathLocaleName}`) + 2, pathName.length)

      return pathNameStart + targetLocale + pathNameEnd
    }
  }, [pathName, pathLocaleName])


  useEffect(() => {
    if (!pathLocaleName && firstVisit) {
      const targetLocale = window.navigator?.language.slice(0, 2) || defaultLocale
      setLocale(targetLocale)
      window.location.replace(getTargetPath(targetLocale))
    } else {
      setLocale(locales.includes(pathLocaleName) ? pathLocaleName : defaultLocale)
    }
  }, [setLocale, pathLocaleName, firstVisit, getTargetPath])


  const handleLocaleChange = (newLocale) => {
    if (firstVisit) {
      setFirstVisit(false)
    }
    setLocale(newLocale)
  }


  return (
    <div ref={innerRef}
    >
      <LocaleList>
        {
          supportedLanguages
            .map(langItem => (
              <LangItem key={langItem.locale} active={langItem.locale === locale} scale={`${langItem.locale !== locale}`}>
                <Link
                  to={getTargetPath(langItem.locale)}
                  onClick={() => handleLocaleChange(langItem.locale)}
                  title={langItem.lang}
                >
                  <Flag> {langItem.code}</Flag>
                </Link>
              </LangItem>
            ))
        }
      </LocaleList>
    </div>
  )

  function useOuterClickNotifier(onOuterClick, innerRef) {
    useEffect(
      () => {
        // only add listener, if the element exists
        if (innerRef.current) {
          document.addEventListener("click", handleClick)
        }

        // unmount previous first in case input have changed
        return () => document.removeEventListener("click", handleClick)

        function handleClick(e) {
          innerRef.current &&
          !innerRef.current.contains(e.target) &&
          onOuterClick(e)
        }
      },
      [onOuterClick, innerRef] // invoke again, if inputs have changed
    )
  }
}


const LocaleList = styled.ul`
  display: flex;
`

const LangItem = styled.li`
  ${GradientBorder};
  padding: 1px;
  border: 1px;
  margin-right: 6px;


  ${props => props.active && `
    padding: 2px;
    border: 2px;
    margin-right: 4px;
  `
  }
`

const Flag = styled.div`
  position: relative;
  background-color: ${theme.colors.black};
  height: 100%;
  width: 100%;
  border-radius: 50%;
  font-size: 18px;
  text-align: center;
  margin-right: 10px;
  transition: transform .3s ease;
`
export default LocaleControl