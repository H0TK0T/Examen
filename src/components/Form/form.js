import React, { useState } from 'react';
import './form.css';
import {validateDateOfBirth, validateFullName, validatePhoneNumber, validateEmail, validateFutureDate} from './utils.js'

const MainForm = () => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [futureDate, setFutureDate] = useState('');
  const [time, setTime] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [dateOfBirthError, setDateOfBirthError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [futureDateError, setFutureDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [showFormData, setShowFormData] = useState(false);

  const handleFullNameChange = (value) => {
    setFullName(value);
    if (value.trim() === '') {
      setFullNameError('ФИО не может быть пустым');
    } else if (!validateFullName(value)) {
      setFullNameError('Пожалуйста, введите корректное ФИО');
    } else {
      setFullNameError('');
    }
  };

  const handleDateOfBirthChange = (value) => {
    setDateOfBirth(value);
    if (value.trim() === '') {
      setDateOfBirthError('Дата рождения не может быть пустой');
    } else if (!validateDateOfBirth(value)) {
      setDateOfBirthError('Дата рождения не может быть больше 2006 года');
    } else {
      setDateOfBirthError('');
    }
  };

  const formatPhoneNumber = (value) => {
    const cleaned = ('' + value).replace(/\D/g, '');
    let match = cleaned.match(/^(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      let intlCode = (match[1] ? '+7' : '');
      return [intlCode, match[2], match[3], match[4], match[5]].filter(Boolean).join('-');
    }
    return value;
  };

  const handlePhoneNumberChange = (value) => {
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);

    if (value.trim() === '') {
      setPhoneNumberError('Номер телефона не может быть пустым');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (value.trim() === '') {
      setEmailError('Email не может быть пустым');
    } else if (!validateEmail(value)) {
      setEmailError('Пожалуйста, введите корректный адрес электронной почты (латиницей, с @ и .)');
    } else {
      setEmailError('');
    }
  };

  const handleFutureDateChange = (value) => {
    setFutureDate(value);
    if (value.trim() === '') {
      setFutureDateError('Дата не может быть пустой');
    } else if (!validateFutureDate(value)) {
      setFutureDateError('Пожалуйста, введите дату, которая как минимум следующий день от текущего');
    } else {
      setFutureDateError('');
    }
  };

  const handleTimeChange = (value) => {
    setTime(value);
    if (value.trim() === '') {
      setTimeError('Выберите удобное вам время посещения');
    } else {
      setTimeError('');
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'fullName':
        handleFullNameChange(value);
        break;
      case 'dateOfBirth':
        handleDateOfBirthChange(value);
        break;
      case 'phoneNumber':
        handlePhoneNumberChange(value);
        break;
      case 'email':
        handleEmailChange(value);
        break;
      case 'futureDate':
        handleFutureDateChange(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName: fullName,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      email: email,
      futureDate: futureDate,
      time: time,
    };
    setShowFormData(true);
  };

  return (
    <main className="main">
      <form onSubmit={handleSubmit} className="form">
        <h3>Запись на мед. услуги МедВед</h3>
        <div className="formGroup">
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => handleFullNameChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="Иван Иванов Иванович"
            required
          />
          <label htmlFor="fullName" className="label sr-only">ФИО</label>
          {fullNameError && <p className="error">{fullNameError}</p>}
        </div>
        <div className="formGroup">
        <small>Напишите вашу дату рождения:</small>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => handleDateOfBirthChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="01.01.1990"
            required
          />
          <label htmlFor="dateOfBirth" className="label sr-only">Дата рождения</label>
          {dateOfBirthError && <p className="error">{dateOfBirthError}</p>}
        </div>
        <div className="formGroup">
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="+7(900)-000-00-00"
            required
            maxLength={15}
          />
          <label htmlFor="phoneNumber" className="label sr-only">Номер телефона</label>
          {phoneNumberError && <p className="error">{phoneNumberError}</p>}
        </div>
        <div className="formGroup">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="example@example.com"
            required
          />
          <label htmlFor="email" className="label sr-only">Электронная почта</label>
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="formGroup">
        <small>Выберите дату посещения:</small>
          <input
            type="date"
            id="futureDate"
            value={futureDate}
            onChange={(e) => handleFutureDateChange(e.target.value)}
            onBlur={handleBlur}
            required
          />
          <label htmlFor="futureDate" className="label sr-only">Будущая дата</label>
          {futureDateError && <p className="error">{futureDateError}</p>}
        </div>
        <div className="formGroup">
        <small>Выберите время посещения:</small>
          <select
            id="time"
            value={time}
            onChange={(e) => handleTimeChange(e.target.value)}
            onBlur={handleBlur}
            required
            defaultValue="08:00"
          >
            <option value="08:00">8:00</option>
            <option value="09:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            </select>
            <label htmlFor="time" className="label sr-only">Время</label>
            {timeError && <p className="error">{timeError}</p>}
        </div>
        <button type="submit">Отправить</button>
      </form>
      {showFormData && (
        <div className="formDataContainer" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}>
          <div className="formData" style={{ backgroundColor: '#2B4281', padding: 20, borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            <h2>Form Data</h2>
            <ul>
              <li>ФИО: {fullName}</li>
              <li>Дата рождения: {dateOfBirth}</li>
              <li>Номер телефона: {phoneNumber}</li>
              <li>Электронная почта: {email}</li>
              <li>Дата посещения: {futureDate}</li>
              <li>Время посещения: {time}</li>
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};
export default MainForm;
