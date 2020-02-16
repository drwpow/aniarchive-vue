export function formatDate(date) {
  if (!date.month || !date.day) {
    return date.year;
  }
  return `${date.year}-${date.month}-${date.day}`;
}

export function age(date1, date2) {
  const yearDiff = Math.floor(date2.year - date1.year);

  if (date2.month && date1.month) {
    if (date1.day && date2.day) {
      if (date2.month >= date1.month && date2.day >= date1.day) {
        return yearDiff;
      }
      return yearDiff - 1;
    }
    if (date2.month >= date1.month) {
      return yearDiff;
    }
    return yearDiff - 1;
  }

  return yearDiff;
}
