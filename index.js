console.log("Hello, World!");

// guide someone on whether or not they need to wear a jacket depending on the weather outside
//Ask user what the weather is?
//set parameter for when to wear jacket
//70 or more =no jacket needed
//69 or 50 = light jacket needed
//49 -30 = jacket needed
//29 or less= heavy jacket needed
//is raining= bring an umbrella
// let firstName = prompt("Enter your first name", "Ivette");

let currentTemp = prompt("What temperature is it?", 60);
let isRaining = prompt("Is it raining?", "yes");

const jacketNeeded = (currentTemp) => {
  if (currentTemp <= 29) {
    return `It’s ${currentTemp}° outside! You'll need to wear a heavy jacket.`;
  } else if (currentTemp <= 49) {
    return `It’s ${currentTemp}° outside! You'll need to wear jacket.`;
  } else if (currentTemp <= 69) {
    return `It’s ${currentTemp}° outside! You'll need to wear a light jacket.`;
  } else if (currentTemp >= 70) {
    return `It’s ${currentTemp}° outside! No need for a jacket.`;
  }
};

function umbrellaNeeded(isRaining) {
  if (isRaining === "yes") {
    return `Looks like it's raining, you should take an umbrella`;
  }
  if (isRaining === "no") {
    return `No need for an umbrella!`;
  } else {
    return `Hmm, bring an umbrella just incase`;
  }
}

console.log(jacketNeeded(currentTemp));
console.log(umbrellaNeeded(isRaining));

//   const personalGreeting = (firstName, lastName, age, city) => {
//       return `Hello! My I'm ${firstName} ${lastName}! I’m ${age}yrs old, and I’m from ${city}. Nice to meet you!`;
//     };
