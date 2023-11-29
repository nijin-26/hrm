import moment from "moment";

export const getFormattedDate = (timestamp: number | string) => {
  const date = moment(timestamp);

  return [date.format("DD MMMM YYYY"), date.format("YYYY-MM-DD")];
};
