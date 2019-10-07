import React from 'react';
export default class ImageUpload extends React.Component {
	constructor() {
		super();
		this.state = {
			image: ''
		};
	}
	getBase64(file) {
		var reader = new FileReader();
		var _self = this;
		reader.readAsDataURL(file);
		reader.onload = function() {
			_self.setState({ image: reader.result });
		};
		reader.onerror = function(error) {
			console.log('Error: ', error);
		};
	}
	uploadImage = e => {
		const file = e.target.files[0];
		this.getBase64(file);
	};
	render() {
		console.log(this.state.image);
		return (
			<div className="imageUploadDiv">
				<img src={this.state.image} width="50px" />
				<input id="myFile" type="file" onChange={e => this.uploadImage(e)} />;
			</div>
		);
	}
}
