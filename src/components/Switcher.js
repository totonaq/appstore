import React from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Switcher = ({ currentDevice, onclick }) => {

	return(
		<div className="buttons-wrap">
			<Button.Group>
		    <Button
		    	onClick={() => onclick('iphone')}
		    	primary={currentDevice === 'iphone'}
		    	>iPhone
		    </Button>
		    <Button.Or text='or' />
		    <Button
		    	onClick={() => onclick('ipad')}
		    	primary={currentDevice === 'ipad'}>iPad
		    </Button>
		  </Button.Group>
		</div>
	)
}

Switcher.defaultProps = {
	currentDevice: '',
	onclick: () => {}
}

Switcher.propTypes = {
	currentDevice: PropTypes.string.isRequired,
	onclick: PropTypes.func.isRequired
}

export default Switcher