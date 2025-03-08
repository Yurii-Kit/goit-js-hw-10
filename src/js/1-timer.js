// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Додаткові стилі
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// робимо кнопку неактивною
const startButton = document.querySelector('#start-button');
startButton.disabled = true;

// встановлюємо дату і час
const datePicker = document.querySelector('#datetime-picker');
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate > new Date()) {
      startButton.disabled = false;
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        iconColor: '#fff;',
        titleColor: '#fff',
        close: true,
        closeColor: '#fff',
        iconUrl: './img/error.png',
      });
      startButton.disabled = true;
      return;
    }
  },
};

flatpickr(datePicker, options);

// кнопка старт і час
startButton.addEventListener('click', () => {
  const timeInterval = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = userSelectedDate - currentTime;

    if (deltaTime <= 0) {
      clearInterval(timeInterval);
      iziToast.success({
        title: 'Success',
        message: 'Time is up!',
        position: 'topRight',
      });
      startButton.disabled = true;
      datePicker.disabled = false;
      // Встановлюємо значення на 0
      document.querySelector('[data-days]').textContent = '00';
      document.querySelector('[data-hours]').textContent = '00';
      document.querySelector('[data-minutes]').textContent = '00';
      document.querySelector('[data-seconds]').textContent = '00';
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);
  }, 1000);
  startButton.disabled = true;
  datePicker.disabled = true;
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
