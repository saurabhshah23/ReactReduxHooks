import React from "react";
import "holderjs";
import FlightsHead from "./FlightsHead";
import { BodyContainer } from "./BodyContainer";
import { useSelector } from "react-redux";

export const FlightsContainer = () => {
  const searchData = useSelector(state => state.search);
  const flights = useSelector(state => state.flights);
  // console.log("srcD=", searchData);
  // console.log("fltD=", flights);
  return (
    <div>
      <FlightsHead searchData={searchData} resultCount={flights.length} />
      {flights.length > 0 ? (
        <BodyContainer data={flights} pax={searchData.passengers} />
      ) : (
        <div>No Flights to show!</div>
      )}
    </div>
  );
};

// export default FlightsContainer
