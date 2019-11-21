import axios from "../../axios";
import { FETCH_DRIVERS, FETCH_SINGLE_DRIVER, FETCH_LAPS } from "../actionTypes";

export const fetchDrivers = offset => async dispatch => {
  let reqOffset = offset;
  if (!offset) {
    reqOffset = 0;
  }
  let limit = 10;
  return await axios
    .get(`/drivers.json?limit=${limit}&offset=${reqOffset}`)
    .then(res => {
      console.log(res, "RES FTW??");

      dispatch({
        type: FETCH_DRIVERS,
        payload: res.data,
        offset: reqOffset
      });

      return res.data;
    });
};

export const fetchDriverInfo = driverId => async dispatch => {
  let limit = 10;
  return await axios.get(`/drivers/${driverId}.json`).then(res =>
    resolve(
      dispatch({
        type: FETCH_SINGLE_DRIVER,
        payload: res.data
      })
    )
  );
};

// export const fetchDrivers = offset => async dispatch => {
//   let limit = 10;
//   return await axios
//     .get(`/drivers.json?limit=${limit}&offset=${offset}`)
//     .then(res =>
//       resolve(
//         dispatch({
//           type: FETCH_DRIVERS,
//           payload: res.data
//         })
//       )
//     );
// };
