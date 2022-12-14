import moment from "moment";

export const getFormattedDate = (date: string, format: string = "DD/MM/YYYY") =>
  moment(date).format(format);
