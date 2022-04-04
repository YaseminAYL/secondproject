import React, { useContext } from 'react';
import { StudContext } from '../App';




function ResidentsList() {
	const context =useContext(StudContext)

	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				<li className="slide-up-fade-in">
					{context.addList.student}
				</li>
			</ul>
		</div>
	);
}

export default ResidentsList;
