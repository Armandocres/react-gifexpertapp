import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, url }) => {
	return (
		<div className="card animate__bounceIn">
			<figure className="card__image">
				<img src={url} alt={title} />
			</figure>
			<p>{title}</p>
		</div>
	);
};

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default GifGridItem;
