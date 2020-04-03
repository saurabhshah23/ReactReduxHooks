import React from "react";
import "holderjs";
import FlightItem from "./FlightItem";

export const BodyContainer = ({ data, pax }) => {
  //TODO: loading logic
  return (
    <div className="flights-body mt-3 mb-3">
      <FlightItem data={data} pax={pax} />
    </div>
  );
};

// export default BodyContainer
