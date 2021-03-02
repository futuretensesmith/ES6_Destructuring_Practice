// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals, { useAnimals } from "./data";
import cars from "./practice";

const [honda, tesla] = cars;

const { evil: isHondaEvil } = honda;
const { evil: isTeslaEvil } = tesla;
// const {honda, evil} = honda;
console.log(isHondaEvil);

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;

const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// const [cat, dog] = animals;

//console.log(useAnimals(cat));

//const { name, sound} = dog

// can set key names using colons
// const {name: catName, sound: catSound} = cat
// console.log(catSound)

//set the keys = to a value so there is a default if your cat object
//had know name value you could set it this way
// const { name = "Fluffy", sound = "Purr"} = cat

// feedingRequirements is a nested destructured object
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water }
// } = cat;

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();
