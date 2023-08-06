export default function (date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const monthName = monthNames[month];

  return monthName + " " + day + ", " + year;
}