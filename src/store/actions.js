import { LOADING, UNLOADING, SET_FLIGHTS, FLIGHTS_ERROR } from "./constants";
import axios from "axios";
//Dummy data
import dummyData from "../data/Flights.json";

export const startLoading = () => {
  console.log("actions > startLoading...");
  return {
    type: LOADING
  };
};
export const stopLoading = () => {
  console.log("actions > stopLoading...");
  return {
    type: UNLOADING
  };
};
export const fetchFlightsSuccess = flightData => {
  console.log("actions > fetchFlightsSuccess...");
  return {
    type: SET_FLIGHTS,
    payload: flightData
  };
};
export const fetchFlightsError = error => {
  console.log("actions > fetchFlightsError...");
  return {
    type: FLIGHTS_ERROR,
    payload: error
  };
};

export const fetchFlights = () => {
  console.log("actions > fetchFlights..");
  return dispatch => {
    // dispatch(startLoading);
    console.log("fetchFLights > dispatch...");
    axios
      // .get("https://jsonplaceholder.typicode.com/users")
      .get("/data/Flights.json")
      .then(response => {
        console.log("JSON RES=", response.data.results);
        // const flightData = dummyData.results;
        const flightData = response.data.results;
        dispatch(fetchFlightsSuccess(flightData));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFlightsError(err));
      });
  };
};
