import moment from "moment";

export const timeago = (timestamp) => {
  return moment(timestamp).startOf("minute").fromNow();
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
