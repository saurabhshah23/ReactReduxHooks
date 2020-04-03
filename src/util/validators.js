export const isEmpty = txt => {
  if (txt === "") return true;
  return false;
};

export const isValidDate = date => {
  if (new Date(date) == "Invalid Date") return false;
  return true;
};

export const validateSearchForm = data => {
  //TODO: validate search data.
  return true;
};

export const getDay = num => {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][num];
};

export const getMonth = num => {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ][num];
};
