/**
 * All form data here is static for time crunch. It can be fetched from a JSON.
 */

import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm";
import { fetchFlights } from "../../store/actions";
import { useDispatch } from "react-redux";

export const SearchContainer = () => {
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState({
    origin: "pune",
    dest: "delhi",
    originDate: "",
    returnDate: "",
    passengers: "0"
  });

  // useEffect(() => {
  //   console.log("new searchData=", searchData);
  // }, [searchData]);

  const handleChange = e => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("search form submitted");
    //TODO: validate inputs
    //TODO: search API req using thunk and update store via useDispatch
    dispatch(fetchFlights());
  };

  return (
    <SearchForm
      searchData={searchData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

// export default SearchContainer;
