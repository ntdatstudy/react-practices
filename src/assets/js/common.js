const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

export const formatDate = date => {
  const newDate = new Date(date);

  if (!newDate) return '';

  const year = newDate.getFullYear();
  const month = months[newDate.getMonth()];
  const day = newDate.getDate();

  return `${month} ${day}, ${year}`;
}