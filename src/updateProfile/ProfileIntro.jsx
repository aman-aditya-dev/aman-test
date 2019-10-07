import React from 'react';
function ProfileIntro(props) {
	return (
		<div class="container model-content">
			<h3>Basic Details</h3>
			<div className="row">
				<label className="col-sm-6">First Name</label>
				<input
					className="col-sm-6"
					type="text"
					name="firstName"
					onChange={props.updateInput}
					value={props.firstName}
				/>
			</div>
			<div className="row">
				<label className="col-sm-6">Last Name</label>
				<input
					className="col-sm-6"
					type="text"
					name="lastName"
					onChange={props.updateInput}
					value={props.lastName}
				/>
			</div>
			<div className="row">
				<label className="col-sm-6">Email</label>
				<input className="col-sm-6" type="text" name="email" onChange={props.updateInput} value={props.email} />
			</div>
			<div className="row">
				<label className="col-sm-6">Phone</label>
				<input className="col-sm-6" type="text" name="phone" onChange={props.updateInput} value={props.phone} />
			</div>
			<div className="row">
				<label className="col-sm-6">Salary</label>
				<input
					className="col-sm-6"
					type="text"
					name="salary"
					onChange={props.updateInput}
					value={props.salary}
				/>
			</div>
			<input type="button" onClick={props.updateIntro} value="Next" />
		</div>
	);
}
export default ProfileIntro;
