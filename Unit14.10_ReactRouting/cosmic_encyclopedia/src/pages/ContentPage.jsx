// Content page to display data (prop) from the App.jsx file. Serves like a template

import React from "react";

const ContentPage = ({data}) =>
{
	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.content}</p>
		</div>
	);
};

export default ContentPage;
