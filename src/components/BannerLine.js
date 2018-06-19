import React from 'react'
import Banner from './Banner'
import PropTypes from 'prop-types'

const BannerLine = ({ data }) => {
	return(
		<ul className="banners-collection-list">
			{
				data.map((banner, idx) => {
					
					return (
						<li
							key={idx}
							className="banners-collection-list-item">
							<Banner src={banner.src} size='tiny' />

						</li>
					)
					
				})
			}
			
		</ul>
	)
}

BannerLine.defaultProps = {
	data: []
}

BannerLine.propTypes = {
	data: PropTypes.array.isRequired
}

export default BannerLine