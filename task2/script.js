//   Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли
// у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const ownProp = (str, obj) => {
  return obj.hasOwnProperty(str)
  }

const argObj = {
  city: 'Tambov',
  position: 'developer',
  // age: 30
}

console.log(ownProp('age', argObj))