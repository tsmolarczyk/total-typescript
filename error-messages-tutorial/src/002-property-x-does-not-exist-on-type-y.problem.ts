// 1. interface with optional type property
// type UserType = {
//     name: "Matt"
//     age?: number
// }
//
// const user: UserType = {
//     name: "Matt",
// };
//
// user.age = 24;

// ----------------------------------------------------------------------------

// 2. type with optional type property
// 

// ----------------------------------------------------------------------------

// 3. most wide, using utility type

type UserType = Record<string, string | number>

const user: UserType = {
  name: "Matt",
};

user.age = 24;
