import React from 'react';
import Launch from './launch';

// Has attribute data which is used for display
const LaunchList = (props) => {
  let { data } = props;

  return (
    <launchlist className="l-list">
      <div className="heading">
        <span><strong>Mission name</strong></span>
        <span><strong>Mission patch</strong></span>
        <span><strong>Launch date</strong></span>
        <span><strong>Rocket name</strong></span>
      </div>
      {data.map(x => { return <Launch launch={x} key={x.flight_number} /> })}
    </launchlist>
  );
}

export default LaunchList;