const formatTime = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return (
    [year, month, day].map(formatNumber).join("-") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

const formatDatetime = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return (
    [year, month, day].map(formatNumber).join("") +
    [hour, minute].map(formatNumber).join("")
  );
};

const formatNumber = (n: any) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

const formateDay = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [year, month, day].map(formatNumber).join("-");
};

module.exports = {
  formatTime: formatTime,
  formatDatetime: formatDatetime,
  formateDay: formateDay
};
  