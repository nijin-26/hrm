import moment from "moment";

export const getFormattedDate = (timestamp: number | string) => {
  const date = moment(timestamp);

  // console.log(date, timestamp, date.format("DD/MM/YYYY"), "hello");

  return [
    date.format("DD MMMM YYYY"),
    date.format("YYYY-MM-DD"),
    // date.format("MM-DD-YYYY"),
  ];
};
