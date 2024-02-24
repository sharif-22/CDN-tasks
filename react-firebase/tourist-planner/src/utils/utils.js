import dayjs from "dayjs";

function formatDate(inputDateString = "2002-01-31") {
  if (inputDateString.length < 3) {
    return;
  }
  // Split the input date string into day, month, and year
  const [year, month, day] = inputDateString.split("-");
  const formattedDateString = `${year}-${month}-${day}`;

  return dayjs(formattedDateString).format("DD/MMM/YYYY");
}

function formatDateTimeStamp(timeStamp) {
  // Split the input date string into day, month, and year
  const date = new Date(timeStamp);
  // console.log(date);
  const dateString = date;
  const formattedDate = dayjs(dateString).format("DD-MMM-YYYY");
  return formattedDate;
}

export { formatDate, formatDateTimeStamp };
