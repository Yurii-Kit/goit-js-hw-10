// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// імпортуємо іконки
import successIcon from '../img/success.png';
import errorIcon from '../img/error.png';
import cautionIcon from '../img/caution.png';
import infoIcon from '../img/informing.png';

// налаштовуємо іконки
const successIconMessage = {
  title: 'OK',
  position: 'topRight',
  messageColor: '#fff',
  backgroundColor: '#59a10d',
  iconColor: '#fff',
  close: true,
  titleColor: '#fff',
  closeColor: '#fff',
  iconUrl: successIcon,
};

const errorIconMessage = {
  title: 'Error',
  position: 'topRight',
  messageColor: '#fff',
  backgroundColor: '#ef4040',
  iconColor: '#fff',
  close: true,
  titleColor: '#fff',
  closeColor: '#fff',
  iconUrl: errorIcon,
};

const cautionIconMessage = {
  title: 'Caution',
  position: 'topRight',
  message: 'Please, fill the form corectly !',
  messageColor: '#fff',
  backgroundColor: '#ffa000',
  iconColor: '#fff',
  close: true,
  titleColor: '#fff',
  closeColor: '#fff',
  iconUrl: cautionIcon,
};

const infoIconMessage = {
  title: 'Hello',
  message: 'Welcome!',
  position: 'topRight',
  messageColor: '#fff',
  backgroundColor: '#09f',
  iconColor: '#fff',
  close: true,
  titleColor: '#fff',
  closeColor: '#fff',
  iconUrl: infoIcon,
};

const form = document.querySelector('.form');
// відключаємо браузерну валідацію;
form.setAttribute('novalidate', '');
const input = document.querySelector('.js-delay-input');
const submitButton = document.querySelector('.js-form-button');

// Привітання
iziToast.show(infoIconMessage);

// Додаємо власну валідацію
form.addEventListener('submit', event => {
  event.preventDefault();

  //  отримуємо значення з інпута
  const currentInputValue = parseInt(input.value, 10);

  //  отримуємо значення радіокнопки
  const selectedState = form.state.value;

  // Власна логіка валідації;
  if (currentInputValue === '' || currentInputValue <= 0) {
    iziToast.show(cautionIconMessage);
    event.currentTarget.reset();
    return;
  }
  if (!selectedState) {
    iziToast.show(cautionIconMessage);
    event.currentTarget.reset();
    return;
  }

  // Створюємо проміс;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(currentInputValue);
      } else {
        reject(currentInputValue);
      }
    }, currentInputValue);
  });

  // Викликаємо проміс;
  promise
    .then(currentInputValue => {
      const message = `✅ Fulfilled promise in ${currentInputValue}ms`;

      iziToast.success({ ...successIconMessage, message: message });
      form.reset();
    })
    .catch(currentInputValue => {
      const message = `❌ Rejected promise in ${currentInputValue}ms`;

      iziToast.error({ ...errorIconMessage, message: message });
      form.reset();
    });
});

// ОПТИМІЗОВАНИЙ ВАРІАНТ;

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const currentInputValue = parseInt(input.value, 10);
//   const selectedState = form.state.value;

//   // Валідація
//   if (!validateForm(currentInputValue, selectedState)) {
//     return;
//   }

//   // Створюємо проміс
//   const promise = createPromise(currentInputValue, selectedState);

//   // Обробка промісу
//   promise.then(handleSuccess).catch(handleError);
// });

// // Валідація
// function validateForm(inputValue, radioState) {
//   if (!inputValue || inputValue <= 0) {
//     iziToast.show({
//       ...cautionIconMessage,
//       message: 'Please enter a positive delay value in milliseconds.',
//     });
//     return false;
//   }
//   if (!radioState) {
//     iziToast.show({
//       ...cautionIconMessage,
//       message: 'Please select a promise state.',
//     });
//     return false;
//   }
//   return true;
// }

// // Створення промісу
// function createPromise(delay, state) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === 'fulfilled') {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });
// }

// // Обробка успіху
// function handleSuccess(delay) {
//   const message = `✅ Fulfilled promise in ${delay}ms`;
//   iziToast.success({ ...successIconMessage, message });
//   form.reset();
// }

// // Обробка помилок
// function handleError(delay) {
//   const message = `❌ Rejected promise in ${delay}ms`;
//   iziToast.error({ ...errorIconMessage, message });
//   form.reset();
// }
