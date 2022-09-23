export default function setDateFormat(dateValue) {
  let date = new Date(dateValue);
  return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}
