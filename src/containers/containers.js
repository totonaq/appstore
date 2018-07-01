import { connect } from 'react-redux'
import Switcher from './../components/Switcher'
import Icons from './../components/Icons'
import Banners from './../components/Banners'
import Top from './../components/Top'
import { setCurrentDevice } from './../actions'

import { makeGetIcons, getBanners } from '../selectors'

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
	
	(state, ownProps) => {
		const getIcons = makeGetIcons()
		return {
			icons: getIcons(state, ownProps)
		}

	}

)(Icons)

export const BannerCollection = connect(
	
	(state, ownProps) => {

		return {
			bannerLines: getBanners(state, ownProps)
		}
	}

)(Banners)

export const TopBlock = connect(
	
	(state, ownProps) => {
		const getIcons = makeGetIcons()
		return {
			apps: getIcons(state, ownProps)
		}

	}

)(Top)