export const ConvertDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleString();
};
