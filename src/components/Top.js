import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Top = ({ title, apps }) => {

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

Top.propTypes = {
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
	apps: PropTypes.array.isRequired
}

export default Top