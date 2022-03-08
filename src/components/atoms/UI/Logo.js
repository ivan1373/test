// React
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";

// Image
import logo from "Assets/images/pinija.png";

const style = makeStyles(() => ({
	logo: { verticalAlign: "middle" },
}));

const Logo = (props) => {
	const classes = style();

	const { width, goTo } = props;

	return (
		<a href={goTo}>
			<img alt="logo" src={logo} className={classes.logo} style={{ width }} />
		</a>
	);
};

Logo.defaultProps = {
	width: "100%",
	goTo: "/",
};

export default Logo;
