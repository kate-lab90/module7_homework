
// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

class ElectrAppliance {
  constructor(name, power) {
    this.name = name,
    this.power = power
    this.isPlugged = false
  }

  plugIn() {
    console.log(this.name + ' is ON');
    this.isPlugged = true;
  }

  getTotalPower() {
    return this.isPlugged ? this.power : 0;
  }
}

const tv = new ElectrAppliance('tv', 350)
tv.diagonal = 22;
tv.getPrice = function (diag = 22) {
  const price1 = 100;
  const price2 = 200;
  diag < 20 ? console.log('Is price ' + price1) : console.log('Is price ' + price2)
}

const lamp = new ElectrAppliance('lamp', 1000)
lamp.color = 'white';

console.log(tv.getTotalPower() + lamp.getTotalPower())
tv.plugIn()
console.log(tv.getTotalPower() + lamp.getTotalPower())
lamp.plugIn()
console.log(tv.getTotalPower() + lamp.getTotalPower())