// проверка на ввод имени
const validateFullName = (fullName) => {
  // проверка на наличие трёх слов кириллицей
  const regex = /^[А-Яа-яЁё]+\s[А-Яа-яЁё]+\s[А-Яа-яЁё]+?$/;

  return regex.test(fullName);
};  


const validatePhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  return /^(?:\+7|8)\d{10}$/.test(cleaned);
};
  
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validateFutureDate = (date) => {
  const selectedDate = new Date(date);
  const currentDate = new Date();

  selectedDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  return selectedDate >= nextDay;
};

const validateDateOfBirth = (date) => {
  const selectedDate = new Date(date);
  const maxDate = new Date('2006-12-31');

  return selectedDate <= maxDate;
};

export {
  validateFullName, 
  validateEmail,
  validateFutureDate,
  validateDateOfBirth
}
