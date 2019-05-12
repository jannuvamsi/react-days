import { Person } from "./person";
export function promote() {
  console.log("promoted");
}
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("Teach");
  }
}
