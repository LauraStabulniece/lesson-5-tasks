// 4. Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumfrence:
//    Pass the radius to the function.
//    Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:
//    Pass the radius to the function.
//    Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius) {
    return 2 * Math.PI * radius;
  }

  function calcArea(myRadius) {
    return (myRadius * myRadius * Math.PI);
  }

  export {
      calcCircumference,
      calcArea,
  }