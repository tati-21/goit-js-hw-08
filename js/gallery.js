// todo
// todo Завдання - Галерея зображень

// todo Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення в модальному вікні.

// todo 1 - Розмітка галереї
// todo В HTML коді додай тег контейнера галереї - невпорядкований список із класом gallery.

// todo 2 - Масив зображень
// todo Додай цей масив об’єктів у свій JavaScript файл. Кожний об’єкт являє собою один елемент галереї.
// todo preview - посилання на маленьку версію зображення для картки галереї
// todo original - посилання на велику версію зображення для модального вікна
// todo description - текстовий опис зображення, для атрибута alt малого зображення та підпису великого зображення в модалці.

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// todo 3 - Розмітка елементів галереї
// todo Використовуй масив об’єктів images і HTML шаблон елемента галереї та створи в JavaScript коді розмітку елементів, після чого додай усю розмітку всередину ul.gallery. Не додавай інші HTML теги, крім тих, що містяться в цьому шаблоні.
// todo В атрибуті src тега <img> вказуємо посилання на маленьку версію зображення.
// todo Для атрибута alt використовуємо опис зображення.
// todo Посилання на велике зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання.
// todo Зверни увагу на те, що зображення огорнуте посиланням, у якого атрибут href вказує на шлях до файлу з зображенням. Отже клік по ньому може викликати завантаження зображення на комп’ютер користувача. Заборони цю поведінку за замовчуванням.

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

// todo 4 - Стилі
// todo Додай стилізацію галереї згідно макету.

// todo 5 - Делегування
// todo Додай функціонал прослуховування кліка по елементах галереї та отримання посилання на велике зображення при кліку. Для цього використовуй прийом делегування на ul.gallery. Поки що при кліку на елемент галереї виводь у консоль посилання на велике зображення, що зберігається як значення атрибуту data-source елемента img.

// todo 6 - Підключення бібліотеки
// todo Бібліотека basicLightbox представляє повністю функціональне модальне вікно, яке відмінно підходить під нашу задачу. Використовуй CDN сервіс jsdelivr і додай в HTML файл посилання на мініфіковані (.min) JS та CSS файли бібліотеки.

// todo 7 - Модальне вікно
// todo Доповни свій код так, щоб при кліку по елементу галереї відкривалось модальне вікно підключеної бібліотеки.

// todo 8 - Велике зображення
// todo Використовуй свій код отримання посилання на велике зображення із атрибуту data-source, щоб замінити значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням із прикладів бібліотеки basicLightbox.

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const { source } = event.target.dataset;

  const instance = basicLightbox.create(`
    <img class="modal-image" src="${source}" alt="${event.target.alt}" />
  `);

  instance.show();
});

// На що буде звертати увагу ментор при перевірці:

// На живій сторінці відображається галерея зображень із масиву даних images
// Галерея зображень стилізована згідно з макетом
// Дані для галереї створені динамічно в JS
// Під час прослуховування події натискання на елементи галереї використаний прийом делегування
// При кліку між елементами галереї нічого не відбувається
// Підключена бібліотека basicLightbox
// При кліку по елементу галереї відкривається модальне вікно підключеної бібліотеки, в якому міститься збільшена версія зображення, по якому клікнули
