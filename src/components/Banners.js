import React from 'react'
import BannerLine from './BannerLine'
import apps from './../json/apps.json'
import { Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Banners = ({ title, currentDevice, line1, line2 }) => {

	const bannerLine1 = apps[currentDevice][line1];
	const bannerLine2 = apps[currentDevice][line2];

	return(
		<section className="banners-collection">
			<Header as='h3' floated='left' color='grey'>{title}</Header>
			<div className="banners-collection-wrap">

				<BannerLine data={bannerLine1} />
				<BannerLine data={bannerLine2} />

			</div>
		</section>
	)
}

Banners.defaultProps = {
	title: '',
	currentDevice: '',
	line1: '',
	line2: ''
}

Banners.propTypes = {
	title: PropTypes.string.isRequired,
	currentDevice: PropTypes.string.isRequired,
	line1: PropTypes.string.isRequired,
	line2: PropTypes.string.isRequired
}

export default Banners