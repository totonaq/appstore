import React from 'react'
import { Header, Modal } from 'semantic-ui-react'
import ModalCollection from './ModalCollection'
import Icon from './Icon'
import PropTypes from 'prop-types'

const IconsCollection = ({ title, icons }) => {

	const iconLimit = 10;

	const limitedIcons = icons.slice(0, iconLimit);

	return (
		<section className="icons-collection">
			<Header as='h3' floated='left' color='grey'>{title}</Header>

			<Modal trigger={<button>См. все ></button>}>

				<ModalCollection title={title} data={icons} />

		  </Modal>
	    <ul className="icons-collection-list">
				{
					limitedIcons.map((icon, idx) => {
						
						return (
							<li
								key={idx}
								className="icons-collection-list-item">

								<Icon data={icon} size='tiny' />

							</li>
						)
						
					})
				}
			</ul>
		</section>
	)
}

IconsCollection.propTypes = {
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
	icons: PropTypes.array.isRequired
}

export default IconsCollection