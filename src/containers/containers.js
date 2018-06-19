import { connect } from 'react-redux'
import Switcher from './../components/Switcher'
import Icons from './../components/Icons'
import Banners from './../components/Banners'
import Top from './../components/Top'
import {setCurrentDevice} from './../actions'

export const SwitcherBlock = connect(
	state => ({
		currentDevice: state.currentDevice
	}),
	dispatch => ({
		onclick: currentDevice => {
			dispatch(setCurrentDevice(currentDevice))
		}
	})
)(Switcher)

export const IconCollection = connect(
	state => ({
		currentDevice: state.currentDevice
	})
)(Icons)

export const BannerCollection = connect(
	state => ({
		currentDevice: state.currentDevice
	})
)(Banners)

export const TopBlock = connect(
	state => ({
		currentDevice: state.currentDevice
	})
)(Top)