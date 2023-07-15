export const useCheckExpiry = (date) => {
  if (date && date > new Date()) {
    // if the date hasnt expired
    return false;
  } else {
    // if the date has expired
    return true;
  }
};
