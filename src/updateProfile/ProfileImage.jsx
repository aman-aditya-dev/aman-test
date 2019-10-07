import React from 'react';

function ProfileImage(props) {
	return (
		<div>
			<h3>Update Image</h3>
			<img src={props.image} />
			<input id="myFile" type="file" onChange={e => props.changeImage(e)} />
			<input type="button" onClick={props.updateImage} value="Next" />
		</div>
	);
}
export default ProfileImage;
