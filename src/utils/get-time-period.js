const monthsMap = {
  january: 0,
  february: 1,
  march: 2, 
  april: 3, 
  may: 4,
  june: 5, 
  july: 6, 
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

export const getTimePeriod = (month, year) => {
  const currentDate = new Date();
  const givenDate = new Date(`${monthsMap[month.toLowerCase()]} 1, ${year}`);
  const diffInMonths = (currentDate.getFullYear() - givenDate.getFullYear()) * 12 + currentDate.getMonth() - givenDate.getMonth();
  const years = parseInt(diffInMonths / 12);

  if (years > 0) {
    return `${years} yrs ${diffInMonths % 12} mos`;
  }

  return `${diffInMonths} mos`;
}