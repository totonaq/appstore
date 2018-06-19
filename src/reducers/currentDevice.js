const currentDevice = (state = 'iphone', action) => {
	switch (action.type) {
		case 'SET_CURRENT_DEVICE':
			return action.currentDevice
		default:
			return state
	}
}

export default currentDevice