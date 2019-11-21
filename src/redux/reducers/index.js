// reducer

import { combineReducers } from "redux";
import singleRacerReducer from "./singleRacerReducer";
import lapsReducer from "./lapsReducer";

// export default combineReducers({
//   racersReducer: racersReducer,
//   singleRacerReducer: singleRacerReducer,
//   roundReducer: roundReducer
// });

// below
import { FETCH_DRIVERS, FETCH_SINGLE_DRIVER, FETCH_LAPS } from "../actionTypes";

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
    totalDrivers: null
  },
  action
) {
  switch (action.type) {
    case FETCH_DRIVERS: {
      console.log("ACTION ", action);
      console.log("ACTION LOAD", action);
      let data = action.payload["MRData"]["DriverTable"]["Drivers"];
      let offset = action.offset;
      let total = action.payload["MRData"].total;
      return {
        ...state,
        drivers: data,
        driversIsFetched: true,
        driversOffset: offset,
        totalDrivers: total
      };
    }
    case FETCH_SINGLE_DRIVER: {
      return {
        data: data.payload
      };
    }

    case FETCH_LAPS: {
      return {
        laps: "fetch laps"
      };
    }
    default: {
      return state;
    }
  }
}
