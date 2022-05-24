import React from 'react';
import './Status.css';

const Status = () => {
	return (
		<div>
			<div className="Status mt3" style={{fontSize: 20, fontWeight: 20}} >
				<i style={{fontSize: 30}} className="fa-solid fa-check bg-gray ba b--gray br-100 w2 h2"></i><hr id="hr1" />
				<div className="bg-gray ba b--gray br-100 w2 h2 dib tc ph1 pv1"style={{fontSize: 25}}>2</div><hr id="hr2" />
				<div className="bg-gray ba b--gray br-100 w2 h2 dib tc ph1 pv1" style={{fontSize: 25}}>3</div><hr id="hr3" />
				<div className="bg-gray ba b--gray br-100 w2 h2 dib tc ph1 pv1" style={{fontSize: 25}}>4</div>
			</div>
			<div id="PQ">
				<p id ="PQ1" className="ph3 pv2 mw4 h2 mh1">Fees</p>
				<p id ="PQ2" className="ph3 pv2 mw4 h2 mh1">COA</p>
				<p id ="PQ3" className="ph4 pv2 mw5 h2 mh1">Visa Processing</p>
				<p id ="PQ4" className="ph4 pv2 mw5 h2 mh1">Visa decision</p>
			</div>
		</div>
	);
}

export default Status;

