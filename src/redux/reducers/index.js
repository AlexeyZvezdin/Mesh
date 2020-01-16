// reducer

// import { combineReducers } from 'redux';
import singleRacerReducer from './singleRacerReducer';
import lapsReducer from './lapsReducer';

// export default combineReducers({
//   racersReducer: racersReducer,
//   singleRacerReducer: singleRacerReducer,
//   roundReducer: roundReducer
// });

// below
import { FETCH_DRIVERS, FETCH_SINGLE_DRIVER, FETCH_LAPS } from '../actionTypes';

// export const statsReducer = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_SINGLE_DRIVER: {
//       const oldState = state;
//       // return {
//       //   ...oldState,
//       //   drivers: [oldState.drivers, action]
//       // };
//       return {
//         ...oldState,
//         drivers: "THIS IS SINGLE ONE"
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// через редюсер еще один вложенный реализовать как раз счет офсета

export default function(
  state = {
    drivers: [],
    laps: [],
    driversIsFetched: false,
    driversOffset: 0,
    // Added total just in case I want bottom navigation by number
    totalDrivers: null
  },
  { type, payload, offset, fromStorage }
) {
  switch (type) {
    case FETCH_DRIVERS: {
      // console.log('fromStorage ??? ', fromStorage);
      // console.log('ACTION LOAD', payload);
      if (fromStorage) {
        return {
          ...state,
          drivers: payload.DriverTable.Drivers,
          driversIsFetched: true,
          driversOffset: offset,
          totalDrivers: payload.total
        };
      } else {
        // eslint-disable-next-line prefer-destructuring
        const data = payload.MRData.DriverTable.Drivers;
        const total = payload.MRData.total;
        localStorage.setItem(offset, JSON.stringify(payload.MRData));

        return {
          ...state,
          drivers: data,
          driversIsFetched: true,
          driversOffset: offset,
          totalDrivers: total
        };
      }
    }
    case FETCH_SINGLE_DRIVER: {
      return {
        data: payload
      };
    }

    case FETCH_LAPS: {
      return {
        laps: 'fetch laps'
      };
    }
    default: {
      return state;
    }
  }
}
