import React from 'react';

const DataYearFilter = (props) => {
  let { handleChange } = props;
  let years = props.fillYears();

  return (
    <div className="year-filter">
      <span>Filter by year: </span>
      <select id="year-filter" onChange={handleChange}>
        {years.map(x => { return <option key={x} value={x}>{x}</option> })}
      </select>
    </div>
  );
}

export default DataYearFilter;