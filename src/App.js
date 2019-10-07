import React from 'react';
import logo from './logo.svg';
import './App.css';
import UpdateProfile from './updateProfile/updateProfieRoot';
import ImageUpload from './imageUpload/imageUpload';
import Form from './form/form';

class App extends React.Component {
	constructor() {
		super();
		this.state = { isModalOpen: false, imageUpload: false };
	}
	toggleDialog = () => {
		if (!this.state.isModalOpen) {
			document.body.style = 'background: rgba(0,0,0,0.4)';
		} else {
			document.body.style = 'background: white';
		}
		this.setState({ isModalOpen: !this.state.isModalOpen });
	};
	routeImageUpload = () => {
		this.setState({ imageUpload: !this.state.imageUpload });
	};

	render() {
		const { isModalOpen, imageUpload } = this.state;
		return (
			<div>
				{!isModalOpen &&
					!imageUpload &&
					<div>
						<button type="button" class="btn btn-info btn-lg" onClick={this.toggleDialog}>
							Update your profile
						</button>
						<br />
						<button type="button" class="btn btn-info btn-lg" onClick={this.routeImageUpload}>
							Form Validation
						</button>
					</div>}
				{isModalOpen &&
					<div className="model">
						<div className="model-content">
							<div class="modal-header">
								<h4 class="modal-title">Profile</h4>
								<button type="button" class="close" onClick={this.toggleDialog}>
									&times;
								</button>
							</div>
							<div class="modal-body">
								<UpdateProfile />
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" onClick={this.toggleDialog}>
									Close
								</button>
							</div>
						</div>
					</div>}
				{imageUpload && <Form />}
			</div>
		);
	}
}

export default App;
