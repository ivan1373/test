// React
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Material-UI
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TableChartIcon from "@material-ui/icons/TableChart";
import TimelineIcon from "@material-ui/icons/Timeline";

const Footer = () => {
	const { t } = useTranslation();

	const [value, setValue] = useState(window.location.pathname);

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
		>
			<BottomNavigationAction
				label={t("Start page")}
				to="/start"
				value="/start"
				component={Link}
                style={{padding:"initial"}}
				icon={<HomeIcon />}
			/>
			<BottomNavigationAction
				label={t("Map view")}
				to="/map"
				value="/map"
				component={Link}
                style={{padding:"initial"}}
				icon={<LocationOnIcon />}
			/>
			<BottomNavigationAction
				label={t("Table view")}
				to="/table"
				value="/table"
				component={Link}
                style={{padding:"initial"}}
				icon={<TableChartIcon />}
			/>
			<BottomNavigationAction
				label={t("Statistics")}
				to="/statistics"
				value="/statistics"
				component={Link}
                style={{padding:"initial"}}
				icon={<TimelineIcon />}
			/>
		</BottomNavigation>
	);
};

export default Footer;
