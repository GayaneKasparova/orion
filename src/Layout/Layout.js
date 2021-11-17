import React  from "react"
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import {GlobalStyles} from "../styles/globalStyles";

const Layout = ({children, pageContext}) => {
	return (
		<div>
			<GlobalStyles/>
			<Header/>
			<main style={{marginTop: 76}}>{children}</main>
			<Footer/>
		</div>
	)
};

export default Layout;
