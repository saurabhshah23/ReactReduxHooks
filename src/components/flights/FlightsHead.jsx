import React from "react";
import { Media } from "react-bootstrap";
import "holderjs";
import { getDay, getMonth } from "../../util/validators";

const FlightsHead = props => {
  console.log(props);
  const { searchData, resultCount } = props;
  let flyDate = new Date(searchData.originDate);
  flyDate =
    getDay(flyDate.getDay()) +
    ", " +
    flyDate.getDate() +
    " " +
    getMonth(flyDate.getMonth());

  return (
    <div className="flights-head">
      <Media>
        <img
          width={64}
          height={64}
          className="align-self-center mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>
            {searchData ? searchData.origin : "NA"} to{" "}
            {searchData ? searchData.dest : "NA"}
          </h5>
          <small className="text-muted">
            {resultCount} flights found &nbsp;&nbsp;&nbsp; {flyDate}
          </small>
        </Media.Body>
      </Media>{" "}
    </div>
  );
};
export default FlightsHead;
