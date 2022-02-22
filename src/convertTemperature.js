// 5. The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
//    Store a celsius temperature into a variable.
//    Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
//    Now store a fahrenheit temperature into a variable.
//    Convert it to celsius and output "NN°F is NN°C." 

const celsiusToFahrenheit = (tempInc) => {
    return (tempInc * 9/5) + 32;
}

const fahrenheitToCelsius = (tempInF) => {
    return (tempInF - 32) * 5/9;
}

export {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
}