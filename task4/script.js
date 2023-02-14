// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его
// на прототипах. Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную
// потребляемую мощность всех включенных приборов (передайте аргумент). Таких приборов должно быть как
// минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он
// обладает.
// План:
// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
//   Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
//   У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//   Создайте экземпляры каждого прибора.
//   Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

function ElectrAppliance(name, power) {
  this.name = name,
  this.power = power
  this.isPlugged = false
}

ElectrAppliance.prototype.plugIn = function () {
    console.log(this.name + ' is ON');
    this.isPlugged = true;
  }

ElectrAppliance.prototype.getTotalPower = function () {
  return this.isPlugged ? this.power : 0;
}

const tv = new ElectrAppliance('tv', 350)
tv.diagonal = 22;
tv.getPrice = function (diag = 22) {    // собственный метод tv
  const price1 = 100;
  const price2 = 200;
  diag < 20 ? console.log('Is price ' + price1) : console.log('Is price ' + price2)
}

const lamp = new ElectrAppliance('lamp', 1000)
lamp.color = 'white';   // собственное свойство lamp

console.log(tv.getTotalPower() + lamp.getTotalPower())
tv.plugIn()
console.log(tv.getTotalPower() + lamp.getTotalPower())
lamp.plugIn()
console.log(tv.getTotalPower() + lamp.getTotalPower())

tv.getPrice(10) // собственный метод tv