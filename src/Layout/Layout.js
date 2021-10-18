import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {GlobalStyles} from "../styles/globalStyles";
import { supportedLanguages } from "../suportedLocales"
import { LocaleProvider } from "../context/localeContext"

const Layout = ({children}) => {
	let locale = "hy";
	const locales = supportedLanguages.locales;
	if (typeof window !== "undefined") {
		const pathLocaleName = window.location.pathname.split("/")[1];
		if (locales.includes(pathLocaleName)) {
			locale = pathLocaleName;
		}
	}
	return (
		<LocaleProvider locale={locale}>
			<GlobalStyles/>
			<Header/>
			<main style={{marginTop: 90}}>{children}</main>
			<Footer/>
		</LocaleProvider>
	)
};

export default Layout;
