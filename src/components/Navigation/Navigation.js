import React from 'react';
import Logo from '../Logo/Logo.js';
import './Navigation.css';

const Navigation = () => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}} className="mt4" >
			<Logo />
			<div className="ba b--black ph2 pv2 mw4 h2 mh1 dim black pointer grow shadow-1 ">Services</div> 
			<div className="ba b--black ph2 pv2 mw4 h2 mh1 dim black pointer grow shadow-1 ">Webinars</div>
			<div className="ba b--black ph2 pv2 mw5 h2 mh1 dim black pointer grow shadow-1 ">Profile Evaluation</div>
			<div className="ba b--black ph2 pv2 mw4 h2 mh1 dim black pointer grow shadow-1 ">About us</div>
			<div id="nv" className="ba b--black ph2 pv2 mw5 h2 mh1 dim black pointer grow shadow-1 ">Contact us</div>
		</nav>
	)
}

export default Navigation;