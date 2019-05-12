const addres = {
  street: "",
  city: "",
  country: ""
};

const street = addres.street;
const city = addres.city;
const country = addres.country;

const { street: st, city, country } = addres;
console.log(st, city, country);
