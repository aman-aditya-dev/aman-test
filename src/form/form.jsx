import React from 'react';
import './form.scss';
export default class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}
	handleInput = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	};
	validate = () => {
		console.log(this.state);
		const { firstName, lastName, email, password, confirmPassword } = this.state;
		// document.getElementsByName('firstName').classList.remove('error-class');
		// document.getElementsByName('email').classList.remove('error-class');
		// document.getElementsByName('lastName').classList.remove('error-class');
		// document.getElementsByName('password').classList.remove('error-class');
		// document.getElementsByName('confirmPassword').classList.remove('error-class');
		const nameRegex = /^[a-zA-Z ]{2,30}$/;
		const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		const pwdRegex = '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$';
		if (!firstName.match(nameRegex)) {
			document.getElementsByName('firstName')[0].classList.add('error-class');
		}
		if (!lastName.match(nameRegex)) {
			document.getElementsByName('lastName')[0].classList.add('error-class');
		}
		if (!email.match(emailRegex)) {
			document.getElementsByName('email')[0].classList.add('error-class');
		}
		if (!password.match(pwdRegex)) {
			document.getElementsByName('password')[0].classList.add('error-class');
		}
		if (!confirmPassword.match(pwdRegex)) {
			document.getElementsByName('confirmPassword')[0].classList.add('error-class');
		}
		if (password !== confirmPassword) {
			document.getElementsByName('confirmPassword')[0].classList.add('error-class');
			document.getElementsByName('password')[0].classList.add('error-class');
		}
		if (document.getElementsByClassName('error-class').length > 0) {
			alert('correct the highlighted');
		} else {
			alert('sucessfull');
		}
	};
	render() {
		return (
			<div className="formReg">
				<div className="wrapper">
					<div className="myForm">
						<div className="formInstructionsDiv formElement">
							<h2 className="formTitle">Sign Up</h2>
							<p className="instructionsText">Please fill in this form to create an account</p>
						</div>
						<div className="fillContentDiv formElement">
							<div className="names formContentElement">
								<input
									name="firstName"
									onChange={this.handleInput}
									className="inputRequest "
									type="text"
									placeholder="First Name"
								/>

								<input
									name="lastName"
									onChange={this.handleInput}
									className="inputRequest "
									type="text"
									placeholder="Last Name"
								/>
							</div>

							<label>
								<input
									name="email"
									onChange={this.handleInput}
									className="inputRequest formContentElement"
									type="text"
									placeholder="Email"
								/>
							</label>
							<label>
								<input
									name="password"
									onChange={this.handleInput}
									className="inputRequest formContentElement"
									type="password"
									placeholder="Enter password"
								/>
							</label>
							<label>
								<input
									name="confirmPassword"
									onChange={this.handleInput}
									className="inputRequest formContentElement"
									type="password"
									placeholder="Confirm password"
								/>
							</label>
						</div>
						<div className="submitButtonDiv formElement">
							<button className="submitButton" onClick={this.validate}>
								Validate
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
