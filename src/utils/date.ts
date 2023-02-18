import format from "date-fns/format";

const formatDate = (date: Date | string, formatString?: string) => {
  const structureDate = typeof date !== "string" ? date : new Date(date);

  if (formatString) return format(structureDate, formatString);

  return format(structureDate, "yyyy-MM-dd hh:mm");
};

const formatSave = (date: Date) => {
  return format(date, "yyyy-MM-dd hh:mm");
};

export default {
  formatDate,
  formatSave,
};
