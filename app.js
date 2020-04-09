
// USE THIS TO CHECK IF CONNECTED:
// console.log("Connected");

// const Riya = {
//   name: "Riya",
//   dob: 2003,
//   graduated: false,
//   age: function() {
//     console.log(this);
//     return 2020 - this.dob;
//   }
// };




// const Homer = {
//   name: "Homer",
//   age: 32,
//   family: {
//     wife: {
//       name: "Marge",
//       age: 32,
//     },
//     son: {
//       name: "Bart",
//       age: 10,
//     }
//   },
//   pets: ["cat", "dog"]
// };

// Homer.family.daughter = {
//   name: "Lisa",
//   age: 8
// };



///// DESTRUCTURING /////
// const Riya = {
//   name: "Riya",
//   dob: 2003,
//   graduated: false,
//   age: function() {
//     console.log(this);
//     return 2020 - this.dob;
//   }
// };

// // const { name, age } = Riya;

// // const calc = {
// //   add: function() {
// //     return x + y;
// //   }
// // };
// // const { add } = calc;
// // If calc had a lot of properties and you only need add, use destructuring

// // const Angel = Riya; //This is not a COPY, it's a reference to (the same object)
// // Angel.name = "Angel";

// const Angel = {};
// Angel.dob = Riya.dob;




const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
  
  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
  
  const dems = presidents.filter( president => president.party === "D");
  
  //2) Filter all presidents to leave only one term Republican presidents HINT use If statement
  // const reps = presidents.filter( president => president.terms === 1 && president.party === "R");
  // // I didn't know how to use an if statement with the filter
  
  const oneTermReps = presidents.filter(function (pres) {
    if (pres.terms === 1 && pres.party === "R") {
      return true;
    }
  } );
  
  //3) Return only the last three presidents
  // const last = presidents.slice(9);
  
  const three = presidents.reverse().slice(presidents.length - 3);
  
  //4) Log all dems who served 2 terms. HINT use chain filter, filter and slice
  // const coolDems = presidents.filter( president => president.party === "D" && president.terms === 2);
  // console.log(coolDems);
  // I didn't know when slice would be necessary here ?
  
  const twoTermDems = presidents
    .filter((president) => president.party === "D")
    .filter((el) => el.terms === 2);
  
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
  if(twoTermDems.some(president => president.name === "Lyndon Johnson")){
    alert("LBJ served two terms");
  } else{
    alert("LBJ was one and done");
  }