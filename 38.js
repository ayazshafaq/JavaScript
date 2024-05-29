
// how to iterate objects

const key = "email";
const person = {
  name: "Harshit",
  age: 22,
  "person hobbies": ["cricket", "football", "hockey"],
};

for (let key in person){
    // console.log(key);
    // console.log(`${key} : ${person[key]}`);
    console.log(key , person[key]);
}