import React, { useContext, useEffect, useRef, useState } from "react"
import { Link } from "gatsby";
import LocaleContext from "../../../context/localeContext";
import AlternateContext from "../../../context/AlternateContext";


const targetLangPath = (alternates, lang) => {
  for (let alternate of alternates) {
    if (alternate.lang === lang) return alternate.url;
  }
  return lang === "en" ? "/" : "/de/";
};

const CurrentLanguage = ({locale}) =>
  locale === "en" ? (
    <div className={${styles.locale} ${styles.localeEn}}>
      <span>English</span>
    </div>
  ) : (
    <div className={${styles.locale} ${styles.localeDe}}>
      <span>German</span>
    </div>
  );

const LanguageToggle = () => {
  const {locale} = useContext(LocaleContext);
  const {alternates} = useContext(AlternateContext);
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const innerRef = useRef(null);
  useOuterClickNotifier((e) => (toggle ? toggleHandler() : null), innerRef);

  return (
    <div ref={innerRef}
    >
      <div onClick={toggleHandler}>
        <CurrentLanguage locale={locale} />
      </div>
      <ul>
        <li onClick={toggleHandler}>
          <Link
            to={targetLangPath(alternates, "en")}
            className={${styles.locale} ${styles.localeEn}}
          >
            English
          </Link>
        </li>

        <li onClick={toggleHandler}>
          <Link
            to={targetLangPath(alternates, "de")}
            className={${styles.locale} ${styles.localeDe}}
          >
            German
          </Link>
        </li>
      </ul>
    </div>
  );

  function useOuterClickNotifier(onOuterClick, innerRef) {
    useEffect(
      () => {
        // only add listener, if the element exists
        if (innerRef.current) {
          document.addEventListener("click", handleClick);
        }

        // unmount previous first in case input have changed
        return () => document.removeEventListener("click", handleClick);

        function handleClick(e) {
          innerRef.current &&
          !innerRef.current.contains(e.target) &&
          onOuterClick(e);
        }
      },
      [onOuterClick, innerRef], // invoke again, if inputs have changed
    );
  }
};

export default LanguageToggle;