import React from 'react'
import top from './../json/top.json'
import { Header, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Top = ({ title, currentDevice, category }) => {

	const apps = top[currentDevice][category];

	return(
		<section className="top">
			<Header className="top-header" as='h4' color='grey'>{title} ></Header>

			<ol>
				{
					apps.map((app, idx) => {
						return(
							<li key={idx}>
								{app.src &&
									<Image
								    src={app.src}
								    as='a'
								    href={app.link}
								    size={app.size}
								    className="top-icon"
								  />
								}
								<p className="top-descr">
									<a
										className="top-descr__link"
										href={app.link}>{app.title}
									</a>
									<br/>
									<span className="top-descr__cat">{app.category}</span><br/>
								</p>
							</li>
						)
					})
				}
			</ol>
		</section>
	)
}

Top.defaultProps = {
	title: '',
	currentDevice: '',
	category: '',
}

Top.propTypes = {
	title: PropTypes.string.isRequired,
	currentDevice: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired
}

export default Top