import { LOADING, UNLOADING, SET_FLIGHTS, FLIGHTS_ERROR } from "./constants";

const searchReducer = (state = initState, action) => {
  console.log("searchReducer - action received=", action);
  switch (action.type) {
    case LOADING:
      console.log("searchReducer - LOADING...");
      return {
        ...state,
        loading: true
      };
    case UNLOADING:
      console.log("searchReducer - UNLOADING...");
      return {
        ...state,
        loading: false
      };
    case SET_FLIGHTS:
      console.log("searchReducer - SET_FLIGHTS...");
      return {
        ...state,
        loading: false,
        flights: action.payload
      };
    case FLIGHTS_ERROR:
      console.log("searchReducer - FLIGHTS_ERROR...");
      return {
        ...state,
        loading: false,
        flights: []
      };
    default:
      console.log("searchReducer - default...");
      return state;
  }
};

export default searchReducer;

let initState = {
  loading: false,
  error: "",
  search: {
    origin: "Pune",
    dest: "Delhi",
    originDate: "2020-03-30T00:00:00.000Z",
    returnDate: "",
    passengers: "1"
  },
  flights: [
    [
      {
        id: "123456",
        airline: "Air India",
        origin: "pune",
        destination: "delhi",
        originTime: "2020-03-30T09:00:00.000Z",
        destTime: "2020-03-30T11:00:00.000Z",
        cost: "3786"
      }
    ],
    [
      {
        id: "123457",
        airline: "Air India",
        origin: "pune",
        destination: "delhi",
        originTime: "2020-03-30T14:20:00.000Z",
        destTime: "2020-03-30T16:10:00.000Z",
        cost: "3786"
      }
    ],
    [
      {
        id: "123458",
        airline: "Air India",
        origin: "pune",
        destination: "vadodara",
        originTime: "2020-03-30T09:00:00.000Z",
        destTime: "2020-03-30T11:00:00.000Z",
        cost: "3787"
      },
      {
        id: "123410",
        airline: "Air India",
        origin: "vadodara",
        destination: "delhi",
        originTime: "2020-03-30T09:00:00.000Z",
        destTime: "2020-03-30T11:00:00.000Z",
        cost: "3788"
      }
    ],
    [
      {
        id: "123411",
        airline: "Air India",
        origin: "pune",
        destination: "jaipur",
        originTime: "2020-03-30T09:00:00.000Z",
        destTime: "2020-03-30T10:25:00.000Z",
        cost: "3789"
      },
      {
        id: "123412",
        airline: "Air India",
        origin: "jaipur",
        destination: "delhi",
        originTime: "2020-03-30T11:30:00.000Z",
        destTime: "2020-03-30T12:50:00.000Z",
        cost: "3790"
      }
    ]
  ]
};
