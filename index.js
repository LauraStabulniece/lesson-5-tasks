// 1.
import tellFortune from './src/tellFortune.js';

console.log(tellFortune('programmer', 'Riga', 'Doe', 3));
console.log(tellFortune('cook', 'Auce', 'Joe', 1));
console.log(tellFortune('artist', 'Ventspils', 'BoB', 2));


// 2.
import calculateDogAge from './src/calculateDogAge.js';

console.log(`Your doggie is ${calculateDogAge(1)} years old in dog years!`);
console.log(`Your doggie is ${calculateDogAge(4)} years old in dog years!`);
console.log(`Your doggie is ${calculateDogAge(5)} years old in dog years!`);


// 3.
import calculateLifetimeSupply from './calculateLifetimeSupply.js';

console.log(`You will need ${calculateLifetimeSupply(50, 1)} to last you until the ripe old age of ${calculateLifetimeSupply(50, 1)}`);
console.log(`You will need ${calculateLifetimeSupply(50, 1)} to last you until the ripe old age of ${calculateLifetimeSupply(50, 1)}`);
console.log(`You will need ${calculateLifetimeSupply(50, 1)} to last you until the ripe old age of ${calculateLifetimeSupply(50, 1)}`);
 

// 4.
import { calcCircumference, calcArea } from  './calcCircumfrence.js';

console.log(`The circumference is ${calcCircumference(1)}.`)
console.log(`The area is ${calcArea(3)}.`)


// 5.
import { celsiusToFahrenheit, fahrenheitToCelsius } from './convertTemperature.js';

console.log(`0°C is ${celsiusToFahrenheit(0)}°F`);
console.log(`0°F is ${fahrenheitToCelsius(0)}°C`);

console.log(`37°C is ${celsiusToFahrenheit(37)}°F`);
console.log(`100°F is ${fahrenheitToCelsius(100)}°C`);


// 6.

// 7.
import reverseNum from './reverseNum.js';

console.log(reverseNum(x));

