import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { LocaleDispatchContext, LocaleStateContext } from "../../../context/LocaleContextProvider"
import { supportedLanguages, locales, defaultLocale } from "../../../suportedLocales"

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

  const getTargetPath = useCallback( (targetLocale) => {
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
      console.log('aha')
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
      <div
        onClick={() => toggleHandler}
        onKeyDown={() => toggleHandler}
        role="button"
        tabIndex="0"
      >
        <span>{supportedLanguages.find(langItem => langItem.locale === locale).lang}</span>
      </div>

      <ul>
        {
          supportedLanguages
            .filter(langItem => langItem.locale !== locale)
            .map(langItem => (
              <li key={langItem.locale}>
                <Link
                  to={getTargetPath(langItem.locale)}
                  onClick={() => handleLocaleChange(langItem.locale)}
                >
                  {langItem.lang}
                </Link>
              </li>
            ))
        }
      </ul>
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

export default LocaleControl