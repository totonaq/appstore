import React from 'react'
import { Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Icon = ({ data, children, size }) => {

	const { src, link, title, category } = data

	return(
		<div>
			
			<Image
		    src={src}
		    as='a'
		    href={link}
		    size={size}
		  />
			
			<p className="icons-collection-list-item-title">
				<a
					className="icons-collection-list-item-title__link"
					href={link}>{title}
				</a>
			</p>
			<p className="icons-collection-list-item-cat">{category}</p>
		
			{children}

		</div>
	)
}

Icon.defaultProps = {
	data: {},
	category: '',
}

Icon.propTypes = {
	data: PropTypes.object.isRequired,
	children: PropTypes.element,
	category: PropTypes.string.isRequired
}

export default Icon