import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {GlobalStyles} from "../styles/globalStyles";

const Layout = ({children}) => {
	return (
		<>
			<GlobalStyles/>
			<Header/>
			<main style={{marginTop: 90}}>{children}</main>
			<Footer/>
		</>
	)
};

export default Layout;
