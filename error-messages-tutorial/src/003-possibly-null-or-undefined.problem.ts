// Narrowing 4 options

const searchParams = new URLSearchParams(window.location.search);
// 1. optional chaining - allows to be undefined

// const id = searchParams.get("id");

// console.log(id?.toUpperCase());

// -----------------------------------------------------------------------------
// 2. non-null assertion - force on TS, trust me it will be there, always

// const id = searchParams.get("id");

// console.log(id!.toUpperCase());

// -----------------------------------------------------------------------------
// 3. if-check / narrowing

// const id = searchParams.get("id");
//
// if (id) {
//     console.log(id.toUpperCase());
// }

// -----------------------------------------------------------------------------
// 4. explicit type guard

const id = searchParams.get("id");

if ( typeof id === 'string') {
    console.log(id.toUpperCase());
}
