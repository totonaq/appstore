import React from 'react'
import { Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Banner = ({ src }) => {

	return(
		<Image
	    src={src}
	    
	  />
	)
}

Banner.defaultProps = {
	src: ''
}

Banner.propTypes = {
	src: PropTypes.string.isRequired
}

export default Banner

