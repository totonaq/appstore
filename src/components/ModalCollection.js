import React from 'react'
import { Grid } from 'semantic-ui-react'
import Icon from './Icon'
import PropTypes from 'prop-types'

const ModalCollection = ({ data }) => {
	return(
		<div className="modal-collection">
			<Grid divided='vertically'>
				<Grid.Row columns={6}>
					{
						data.map((icon, idx) => {
							return (

								<Grid.Column key={idx}>

									<Icon data={icon} size='small'>
										<p className="modal-collection-price">{icon.price}</p>

										{
											icon["in-app-purchase"] &&
												<p className="modal-collection-purchase">Встроенные покупки</p>
										}
									</Icon>

								</Grid.Column>
							)
						})
					}
				</Grid.Row>
			</Grid>
		</div>

	)
}

ModalCollection.defaultProps = {
	data: []
}

ModalCollection.propTypes = {
	data: PropTypes.array.isRequired
}

export default ModalCollection