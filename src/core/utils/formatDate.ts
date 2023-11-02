export const getFormattedDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return [`${day} ${month} ${year}`, date.toISOString().slice(0, 10)];
};
