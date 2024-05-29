// objects in  array

const users = [
  { userId: 1, firstName: "ayaz", gender: "male" },
  { userId: 2, firstName: "shawaiz", gender: "male" },
  { userId: 3, firstName: "Hana", gender: "male" },
];
// for (user of users) {
//   console.log(user.firstName);
// }


const [{firstName}, ,{}] = users;