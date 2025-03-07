# Vanilla App Template

Цей проект було створено за допомогою Vite. Для знайомства та налаштування
додаткових можливостей [звернись до документації](https://vitejs.dev/).

## Створення репозиторію за шаблоном

Використовуй цей репозиторій організації GoIT як шаблон для створення
репозиторію свого проекту. Для цього натисни на кнопку `«Use this template»` і
обери опцію `«Create a new repository»`, як показано на зображенні.

![Creating repo from a template step 1](./assets/template-step-1.png)

На наступному етапі відкриється сторінка створення нового репозиторію. Заповни
поле його імені, переконайся, що репозиторій публічний, після чого натисни
кнопку `«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Після того, як репозиторій буде створено, необхідно перейти в налаштування
створеного репозиторію на вкладку `Settings` > `Actions` > `General` як показано
на зображенні.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскроливши сторінку до самого кінця, в секції `«Workflow permissions»` обери
опцію `«Read and write permissions»` і постав галочку в чекбоксі. Це необхідно
для автоматизації процесу деплою проекту.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Тепер у тебе є особистий репозиторій проекту, зі структурою файлів та папок
репозиторію-шаблону. Далі працюй з ним, як з будь-яким іншим особистим
репозиторієм, клонуй його собі на комп'ютер, пиши код, роби коміти та відправляй
їх на GitHub.

## Підготовка до роботи

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проекту в терміналі командою `npm install`.
3. Запусти режим розробки, виконавши в терміналі команду `npm run dev`.
4. Перейдіть у браузері за адресою
   [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту.

## Файли і папки

- Файли розмітки компонентів сторінки повинні лежати в папці `src/partials` та
  імпортуватись до файлу `index.html`. Наприклад, файл з розміткою хедера
  `header.html` створюємо у папці `partials` та імпортуємо в `index.html`.
- Файли стилів повинні лежати в папці `src/css` та імпортуватись до HTML-файлів
  сторінок. Наприклад, для `index.html` файл стилів називається `index.css`.
- Зображення додавай до папки `src/img`. Збирач оптимізує їх, але тільки при
  деплої продакшн версії проекту. Все це відбувається у хмарі, щоб не
  навантажувати твій комп'ютер, тому що на слабких компʼютерах це може зайняти
  багато часу.

## Деплой

Продакшн версія проекту буде автоматично збиратися та деплоїтись на GitHub
Pages, у гілку `gh-pages`, щоразу, коли оновлюється гілка `main`. Наприклад,
після прямого пуша або прийнятого пул-реквесту. Для цього необхідно у файлі
`package.json` змінити значення прапора `--base=/<REPO>/`, для команди `build`,
замінивши `<REPO>` на назву свого репозиторію, та відправити зміни на GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Далі необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) та
виставити роздачу продакшн версії файлів з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою крайнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, збірки чи деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути натиснувши на іконку, і в
вікні, що випадає, перейти за посиланням `Details`.

![Deployment status](./assets/deploy-status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися за
адресою, вказаною на вкладці `Settings` > `Pages` в налаштуваннях репозиторію.
Наприклад, ось посилання на живу версію для цього репозиторію

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Якщо відкриється порожня сторінка, переконайся, що у вкладці `Console` немає
помилок пов'язаних з неправильними шляхами до CSS та JS файлів проекту
(**404**). Швидше за все у тебе неправильне значення прапора `--base` для
команди `build` у файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пуша у гілку `main` GitHub-репозиторію, запускається
   спеціальний скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить лінтинг та збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   відправляється у гілку `gh-pages`. В іншому випадку, у лозі виконання скрипта
   буде вказано в чому проблема.

// Описаний в документації import flatpickr from 'flatpickr'; // Імпорт
бібліотеки для вибору дати // Додатковий імпорт стилів import
'flatpickr/dist/flatpickr.min.css'; // Імпорт стилів для flatpickr

// Додаткові стилі import iziToast from 'izitoast'; // Імпорт бібліотеки для
відображення повідомлень import 'izitoast/dist/css/iziToast.min.css'; // Імпорт
стилів для iziToast import iconError from '../img/error.png'; // Імпорт іконки
для повідомлення про помилку

// робимо кнопку неактивною const startButton =
document.querySelector('#start-button'); // Знаходимо кнопку старту
startButton.disabled = true; // Робимо кнопку неактивною

// встановлюємо дату і час const datePicker =
document.querySelector('#datetime-picker'); // Знаходимо елемент вибору дати let
userSelectedDate = null; // Ініціалізуємо змінну для збереження вибраної дати

const options = { enableTime: true, // Дозволяємо вибір часу time_24hr: true, //
Використовуємо 24-годинний формат defaultDate: new Date(), // Встановлюємо
поточну дату як дату за замовчуванням minuteIncrement: 1, // Крок вибору хвилин
onClose(selectedDates) { // Функція, яка виконується при закритті календаря
console.log(selectedDates); // Виводимо вибрані дати в консоль userSelectedDate
= selectedDates[0]; // Зберігаємо вибрану дату if (userSelectedDate > new
Date()) { // Якщо вибрана дата в майбутньому startButton.disabled = false; //
Робимо кнопку активною } else { // Якщо вибрана дата в минулому iziToast.error({
// Відображаємо повідомлення про помилку title: 'Error', message: 'Please choose
a date in the future', position: 'topRight', messageColor: '#fff',
backgroundColor: '#ef4040', iconColor: '#fff;', titleColor: '#fff', close: true,
closeColor: '#fff', iconUrl: iconError, }); startButton.disabled = true; //
Робимо кнопку неактивною return; } }, };

flatpickr(datePicker, options); // Ініціалізуємо flatpickr з налаштуваннями

// кнопка старт і час startButton.addEventListener('click', () => { // Додаємо
обробник події для кнопки старту const timeInterval = setInterval(() => { //
Запускаємо інтервал, який виконується кожну секунду const currentTime =
Date.now(); // Отримуємо поточний час const deltaTime = userSelectedDate -
currentTime; // Обчислюємо різницю між вибраною датою і поточним часом

    if (deltaTime <= 0) { // Якщо різниця часу менша або дорівнює нулю
      clearInterval(timeInterval); // Зупиняємо інтервал
      iziToast.success({ // Відображаємо повідомлення про завершення часу
        title: 'Success',
        message: 'Time is up!',
        position: 'topRight',
      });
      startButton.disabled = true; // Робимо кнопку неактивною
      datePicker.disabled = false; // Робимо вибір дати активним
      // Встановлюємо значення на 0
      document.querySelector('[data-days]').textContent = '00'; // Встановлюємо значення днів на 00
      document.querySelector('[data-hours]').textContent = '00'; // Встановлюємо значення годин на 00
      document.querySelector('[data-minutes]').textContent = '00'; // Встановлюємо значення хвилин на 00
      document.querySelector('[data-seconds]').textContent = '00'; // Встановлюємо значення секунд на 00
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(deltaTime); // Обчислюємо дні, години, хвилини і секунди до вибраної дати

    document.querySelector('[data-days]').textContent = addLeadingZero(days); // Оновлюємо значення днів
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours); // Оновлюємо значення годин
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes); // Оновлюємо значення хвилин
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds); // Оновлюємо значення секунд

}, 1000); // Інтервал виконується кожну секунду startButton.disabled = true; //
Робимо кнопку неактивною datePicker.disabled = true; // Робимо вибір дати
неактивним });

function convertMs(ms) { // Функція для перетворення мілісекунд у дні, години,
хвилини та секунди const second = 1000; // Кількість мілісекунд у секунді const
minute = second _ 60; // Кількість мілісекунд у хвилині const hour = minute _
60; // Кількість мілісекунд у годині const day = hour \* 24; // Кількість
мілісекунд у дні

const days = Math.floor(ms / day); // Обчислюємо кількість днів const hours =
Math.floor((ms % day) / hour); // Обчислюємо кількість годин const minutes =
Math.floor(((ms % day) % hour) / minute); // Обчислюємо кількість хвилин const
seconds = Math.floor((((ms % day) % hour) % minute) / second); // Обчислюємо
кількість секунд

return { days, hours, minutes, seconds }; // Повертаємо об'єкт з днями,
годинами, хвилинами та секундами }

function addLeadingZero(value) { // Функція для додавання нуля перед
однозначними числами return String(value).padStart(2, '0'); // Додаємо нуль
перед однозначними числами }
