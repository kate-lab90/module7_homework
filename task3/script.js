//   Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

const getEmptyObj = (obj) => (Object.create(null))

console.log(getEmptyObj())
