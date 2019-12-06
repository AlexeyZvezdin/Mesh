import React from 'react';
// import { PrevButton, NextButton } from './ButtonsDataTabs';
import { ControlButton } from './ButtonsDataTabs';

export const Drivers = props => {
  console.log(props, ' YA TYT');

  return (
    <React.Fragment>
      <table className="racers_table" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Birth date</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {props.drivers.map(
            (
              { url, givenName, familyName, dateOfBirth, nationality },
              index
            ) => (
              <tr key={index}>
                <td>{givenName}</td>
                <td>{familyName}</td>
                <td>{dateOfBirth}</td>
                <td>{nationality}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <div className="navButtons">
        <ControlButton direction="back" />
        <ControlButton direction="forward" />
        {/* <PrevButton />
        <NextButton /> */}
      </div>
    </React.Fragment>
  );
};
