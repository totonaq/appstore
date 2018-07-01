import React from 'react'
import { Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Banner = ({ src }) => {

	return(
		<Image
			as='a'
	    src={src}
	    href='https://www.apple.com/'
	  />
	)
}

Banner.propTypes = {
	src: PropTypes.string.isRequired
}

export default Banner

