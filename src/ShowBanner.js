import React from 'react';

function ShowBanner (props) {
	if(props.time > 45) {
		return(
			<div className="rest_block">Take a break</div>
		);
	} else {
		return(
			<div className="work_block">Time to work on yourself</div>
		);
	}
}

export default ShowBanner;
