// React
import React, { useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";

// Router
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { publicRoutes, privateRoutes } from "Router/Routes";

// Misc
import NotFoundPage from "Layouts/NotFoundPage";

// Loaders
import FullScreenSpinner from "Layouts/loaders/FullScreenSpinner";

// Utils
import registerSW from "Util/registerSW";

const PublicRoutes = ({
	component: CustomComp,
	layout: Layout,
	title,
	description,
	...rest
}) => (
	<Route
		{...rest}
		render={(props) => (
			<Layout>
				<Helmet>
					<title>TripleHost tracking system | {title}</title>
					<meta name="description" content={description} />
				</Helmet>
				<CustomComp {...props} />
			</Layout>
		)}
	/>
);

const PrivateRoutes = ({
	component: CustomComp,
	layout: Layout,
	user,
	title,
	description,
	...rest
}) => (
	<Route
		{...rest}
		render={(props) =>
		//	user ? (
				<Layout>
					<Helmet>
						<title>TripleHost tracking system | {title}</title>
						<meta name="description" content={description} />
					</Helmet>
					<CustomComp {...props} />
				</Layout>
		//	) : (
				// <Redirect
				// 	to={{
				// 		pathname: "/login",
				// 		state: { from: props.location },
				// 	}}
				// />
	//		)
		}
	/>
);

const AppRouter = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const history = useHistory();

	useEffect(() => {
		registerSW();
	}, []);

	useEffect(() => {
		if (user !== null && history.location.pathname === "/login") {
			history.push("/");
		}
	}, [user]);

	return (
		<Suspense fallback={<FullScreenSpinner />}>
			<Switch>
				{privateRoutes &&
					privateRoutes.map((route) => {
						return (
							<PrivateRoutes
								key={route.id}
								path={`/${route.path}`}
								exact={route.exact}
								component={route.component}
								layout={route.layout}
								title={route.title}
								description={route.description}
								user={user}
							/>
						);
					})}
				{publicRoutes &&
					publicRoutes.map((route) => {
						return (
							<PublicRoutes
								key={route.id}
								path={`/${route.path}`}
								exact={route.exact}
								component={route.component}
								layout={route.layout}
								title={route.title}
								description={route.description}
							/>
						);
					})}
				<Route component={NotFoundPage} />
			</Switch>
		</Suspense>
	);
};

export default AppRouter;
