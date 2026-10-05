// todo
// todo Задача 4. Загальний баланс

// todo Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// todo перший параметр users — масив об’єктів користувачів,
// todo другий параметр gender — рядок, що зберігає стать.
// todo Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .reduce((totalBalance, client) => {
      return totalBalance + client.balance;
    }, 0);
};

// * Дано з задачі:

const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

// * Перевірка

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863

// На що буде звертати увагу ментор при перевірці:

// Оголошена змінна getTotalBalanceByGender
// Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами (users, gender)
// У тілі функції використовується ланцюжок методів у правильному порядку
// Значення параметра users не змінюється
// Якщо значення параметра gender — це рядок "male", функція повертає число 12053
// Якщо значення параметра gender — це рядок "female", функція повертає число 8863
// Виклик функції з випадковими, але валідними аргументами повертає правильне значення
