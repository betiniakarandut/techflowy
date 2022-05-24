import React from 'react';
import corel2 from './corel2.png';
import './Logo.css';

const Logo = () => {
	return (
		<div id="LOGO" className="mr7 " style={{height: 50, width:300, display: 'flex', justifyContent: "start"}} >
		<img alt="" src={corel2} />
		</div>
	);
}

export default Logo;