import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDrivers } from '../redux/actions';

function HooksCakeContainer() {
  let driversOffset = useSelector(({ reducer }) => reducer.driversOffset);
  let driversDispatch = useDispatch();
  const [offsetNum, setOfssetNum] = useState(0);
  console.log(offsetNum, ' offsetNum');
  return (
    <div>
      <h2>drivers offset — {driversOffset}</h2>
      <label htmlFor="offset_number_dispatch">Введите число</label>
      <input
        type="number"
        name="offset_number_dispatch"
        id="offset_number_dispatch"
        onInput={e => setOfssetNum(e.target.value)}
      />
      <button
        htmlFor="offset_number_dispatch"
        onClick={() => driversDispatch(fetchDrivers(offsetNum))}
      >
        Buy cakes
      </button>
    </div>
  );
}

export default HooksCakeContainer;
