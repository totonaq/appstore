import { createSelector } from 'reselect'
import apps from './../json/apps.json'
import top from './../json/top.json'

const getCurrentDevice = state => state.currentDevice;
const getCategory = (state, props) => props.category;
const getLines = (state, props) => props.lines;
const getSource = (state, props) => props.source

export const getIcons = createSelector(
  [getCurrentDevice, getCategory, getSource],
  (currentDevice, category, source) => {
  	switch (source) {
  		case 'apps':
  			return apps[currentDevice][category]
  		case 'top':
  			return top[currentDevice][category]
  		default:
  			return {}
  	}
  }
)

export const getBanners = createSelector(
  [getCurrentDevice, getLines],
  (currentDevice, lines) => {
  	return lines.map((line, idx) => {
  		return apps[currentDevice][line]
  	})
  }
)