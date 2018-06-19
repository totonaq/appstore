import React from 'react'
import { Grid } from 'semantic-ui-react'
import Icon from './Icon'
import { Header, Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const ModalCollection = ({ title, data }) => {
	return(
		<div className="modal-collection">
			<Header as='h3' color='grey'>{title}</Header>
			<Divider />
			<Grid divided='vertically'>
				<Grid.Row columns={6}>
					{
						data.map((icon, idx) => {
							return (

								<Grid.Column key={idx}>
									<Icon data={icon} size='small'>
										<div>
											<p className="modal-collection-price">{icon.price}</p>

											{
												icon["in-app-purchase"] &&
													<p className="modal-collection-purchase">Встроенные покупки</p>
											}

										</div>
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
	data: [],
	title: ''
}

ModalCollection.propTypes = {
	data: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
}

export default ModalCollection