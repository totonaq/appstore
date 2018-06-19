import React, { Component } from 'react'
import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm'
import img1 from '../slides/slide1.jpg'
import img2 from '../slides/slide2.jpg'
import img3 from '../slides/slide3.jpeg'
import prev from '../slides/controls/back.svg'
import next from '../slides/controls/next.svg'

class Slider extends Component {
	componentDidMount() {

		const peek = this.glide.clientWidth / 4
		
		this.glidePlugin = new Glide(this.glide, {
			type: 'carousel',
		  autoplay: 7000,
		  animationDuration: 1000,
		  peek: {
		    before: peek,
		    after: peek
		  },
		  gap: 6

		}).mount({Controls})

	}

	componentWillUnmount() {
		this.glidePlugin.destroy()
	}

	getRef = node => {
		this.glide = node;
	}

	render() {
		return (
			<div className="glide" ref={this.getRef}>
			  <div data-glide-el="track" className="glide__track">
			    <ul className="glide__slides">
			      <li className="glide__slide">
			      	<img className="glide__slide-img" src={img1} alt='slide'/>
			      </li>
			      <li className="glide__slide">
			      	<img className="glide__slide-img" src={img2} alt='slide'/>
			      </li>
			      <li className="glide__slide">
			      	<img className="glide__slide-img" src={img3} alt='slide'/>
			      </li>
			      <li className="glide__slide">
			      	<img className="glide__slide-img" src={img1} alt='slide'/>
			      </li>
			      <li className="glide__slide">
			      	<img className="glide__slide-img" src={img2} alt='slide'/>
			      </li>
			      <li className="glide__slide">
			      	<img className="glide__slide-img" src={img3} alt='slide'/>
			      </li>
			    </ul>
			  </div>
			  <div className="glide__arrows" data-glide-el="controls">
			    <button className="glide__arrow glide__arrow--left custom-arrow-class" data-glide-dir="<">
			    	<img width='15' src={prev} alt="prev" />
			    </button>
			    <button className="glide__arrow glide__arrow--right custom-arrow-class" data-glide-dir=">">
			    	<img width='15' src={next} alt="next" />
			    </button>
			  </div>
			</div>
		)
	}
}

export default Slider