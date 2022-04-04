import React, { useContext } from 'react';
import { StudContext } from '../App';
//import ResidentsList from './ResidentsList';

// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,
export function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split('-');
  const [yyyy, mm, dd] = validityDate.split('-');
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return (maxValid >= selected) && (maxValid >= today);
}

 
function Search() {
  const context =useContext(StudContext)
  console.log(context)

 

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">Student Name:
        <div>
          <input
          onChange={context.onChange}  id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" />
        </div>
      </label>
      <label htmlFor="joiningDate">Joining Date:
        <div>
          <input
          onChange={context.onChange} id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" />
        </div>
      </label>
      <button onClick={context.addList} type="button" data-testid="addBtn" className="small mb-0">Add</button>
    </div>
  );
}

export default Search;
