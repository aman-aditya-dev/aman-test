import React from 'react';
import { Row, Col } from 'reactstrap';
function ProfilePassword(props) {
	return (
		<div>
			<h3>Change Password</h3>
			<div className="row">
				<label className="col-6">Current Password</label>
				<input className="col-6" type="password" name="checkPassword" onChange={props.handleInput} />
			</div>
			<div className="row">
				<label className="col-6">New Password</label>
				<input className="col-6" type="password" name="newPassword" onChange={props.handleInput} />
			</div>

			<div className="row">
				<label className="col-6">Confirm Password</label>
				<input className="col-6" type="password" name="confirmPassword" onChange={props.handleInput} />
			</div>
			<input type="button" onClick={props.updatePassword} value="DONE" />
		</div>
	);
}
export default ProfilePassword;
