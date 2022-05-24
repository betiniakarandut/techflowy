import React from 'react';
import './Cards.css'

const Cards = () => {
	return (
		<div style={{display: 'flex', justifyContent: 'center'}} >
			<article className=" dib ba b--black ma4 br3 ph2 pv6 mw-auto h2 mh-auto dim black grow shadow-3 w5">
				  <div id="H" className="tc dib ">
			  		<h3>Step 1</h3>
			  		<h5>Fees paid</h5>
			  		<h3>Step 2</h3>
			  		<h5>Issue COA</h5>
			  	</div>
			  <div id="OK" className="bg-gray pa3 ma1 dib ba b--black br4 ph5 pv2 dim black pointer grow"></div>
			</article>
			<article className="pa3 dib ba b--black ma4 br3 ph2 pv6 mw-auto h2 mh-auto dim black pointer grow shadow-1 w5">
			</article>
			<article className="pa3 dib ba b--black ma4 br3 ph2 pv6 mw-auto h2 mh-auto dim black pointer grow shadow-1 w5">
			</article>
			<article className="pa3 dib ba b--black ma4 br3 ph2 pv6 mw-auto h2 mh-auto dim black pointer grow shadow-1 w5">
			</article>
		</div>
	);
}

export default Cards;

// pa3 dib ba b--black ma4    mw-auto h2 mh-auto  shadow-1 w5