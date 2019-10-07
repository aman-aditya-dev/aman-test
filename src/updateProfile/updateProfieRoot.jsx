import React, { Component } from 'react';
import ProfileIntro from './ProfileIntro.jsx';
import ProfileImage from './ProfileImage.jsx';
import ProfilePassword from './ProfilePassword.jsx';
import UpdatedProfile from './UpdatedProfile.jsx';
import './profile.scss';
export default class UpdateProfile extends Component {
	constructor() {
		super();
		this.state = {
			firstName: 'Aman',
			lastName: 'Aditya',
			email: 'aman15aitya@gmail.com',
			phone: '+91 8210988275',
			salary: '4.5LPA',
			image:
				'data:image/jpeg;base64,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',
			password: '0000',
			val: 3,
			newPassword: '',
			confirmPassword: '',
			checkPassword: ''
		};
	}
	handleInput = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	};
	handleNext = value => {
		const val = value;
		if (val === 3) {
			if (this.state.password === this.state.checkPassword) {
				if (this.state.newPassword === this.state.confirmPassword) {
					this.setState({ password: this.state.newPassword, val });
				} else {
					alert("New Password doesn't match with confirm Password");
				}
			} else {
				alert('Incorrect Password');
			}
		} else {
			this.setState({ val });
		}
	};
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
		const det = this.state;
		return (
			<React.Fragment>
				{det.val === 0 &&
					<ProfileIntro
						details={det}
						updateInput={this.handleInput}
						updateIntro={() => this.handleNext(1)}
					/>}
				{det.val === 1 &&
					<ProfileImage
						image={det.image}
						updateImage={() => this.handleNext(2)}
						changeImage={x => this.uploadImage(x)}
					/>}
				{det.val === 2 &&
					<ProfilePassword
						password={det.password}
						updatePassword={() => this.handleNext(3)}
						handleInput={this.handleInput}
					/>}
				{det.val === 3 &&
					<UpdatedProfile det={this.state} value="Update Profile" updateIntro={() => this.handleNext(0)} />}
			</React.Fragment>
		);
	}
}
