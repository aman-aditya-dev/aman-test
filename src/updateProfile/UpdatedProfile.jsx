import React from 'react';

function UpdatedProfile(props) {
	return (
		<div className="profile-div container">
			<h3> My Profile</h3>
			<div className="row">
				<div className="col-sm-4">
					<img src={props.det.image} />
				</div>
				<div className="col-sm-8">
					<label className="row">
						<span className="col-sm-6">First Name</span>
						<span className="col-sm-6">
							{props.det.firstName}
						</span>
					</label>
					<label className="row">
						<span className="col-sm-6">Last Name</span>
						<span className="col-sm-6">
							{props.det.lastName}
						</span>
					</label>
					<label className="row">
						<span className="col-sm-6">Email</span>
						<span>
							{props.det.email}
						</span>
					</label>
					<label className="row">
						<span className="col-sm-6">Phone</span>
						<span className="col-sm-6">
							{props.det.phone}
						</span>
					</label>
					<label className="row">
						<span className="col-sm-6">Salary</span>
						<span>
							{props.det.salary}
						</span>
					</label>
				</div>
				<input type="button" onClick={props.updateIntro} value="Edit my Profile" />
			</div>
		</div>
	);
}
export default UpdatedProfile;
