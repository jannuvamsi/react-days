/*
Arrow Functions
*/

// const square = number => number * number;

// console.log(square(3));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

// const activeJobs = jobs.filter(function(jobs) {
//   return jobs.isActive;
// });

const passiveJobs = jobs.filter(jobs => jobs.isActive);

console.log(passiveJobs);
