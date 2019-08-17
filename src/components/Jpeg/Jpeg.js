import React from 'react';
import './Jpeg.css';

export default class Jpeg extends React.Component {
	constructor(props) {
		super(props);
		if(this.props.image) {
			this.state = {image: this.props.image, uri: '', style: {}};
			this.getDataUri(this.props.image, this.setDivState.bind(this));
		}
	}

	componentWillReceiveProps(props, a) {
		if(this.props.uri !== props.uri) {
			let imageStyle = {
				height: '100vh',
				width: '50%',
				backgroundImage: `url(${props.uri})`,
				backgroundRepeat: 'no-repeat, no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'contain'
			};
			this.setState({uri: props.uri, style: imageStyle});
		}
	}

	getDataUri(url, callback) {
		let image = new Image();

		image.onload = function() {
			let canvas = document.createElement('canvas');
			let context = canvas.getContext('2d');

			canvas.width = image.width;
			canvas.height = image.height;

			context.drawImage(this,0,0);

			callback(canvas.toDataURL('image/jpeg'));
		}

		image.src = url;
	}

	setDivState(uri) {
		let imageStyle = {
			height: '100vh',
			width: '50%',
			backgroundImage: `url(${uri})`,
			backgroundRepeat: 'no-repeat, no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'contain'
		};
		this.setState({uri: uri, style: imageStyle});
		this.props.onEdit(uri);
	}

	componentWillMount() {

	}

	render() {
		return(
			<div style={this.state.style}>
			</div>
		);
	}
}
