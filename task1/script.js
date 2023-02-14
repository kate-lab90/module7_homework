// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и
// значения только собственных свойств. Данная функция не должна возвращать значение.

let person = {
  city: 'Canada'
}

const student = Object.create(person)

student.name = 'Ivan';
student.age = 30;

const getOwnProp = (obj) => {
  for (let key in obj) {
    // console.log(key)
    if (obj.hasOwnProperty(key)) {
      console.log("Ключ: " + key + "  значение: " + obj[key])
    }
  }
}
console.log(getOwnProp(student))