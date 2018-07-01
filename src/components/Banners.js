import React from 'react'
import BannerLine from './BannerLine'
import { Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Banners = ({ title, bannerLines }) => {

	return(
		<section className="banners-collection">
			<Header as='h3' floated='left' color='grey'>{title}</Header>
			<div className="banners-collection-wrap">

				{
					bannerLines.map((line, idx) => {
						return <BannerLine key={idx} data={line} />
					})
				}

			</div>
		</section>
	)
}

Banners.propTypes = {
	title: PropTypes.string.isRequired,
	lines: PropTypes.array.isRequired,
	bannerLines: PropTypes.array.isRequired
}

export default Banners