const accountId  = 12345678; //Value cannot be changed
let accountEmail = "xyz@gmail.com";
var accountPassword = "1234abcd";
accountCity = "Westbengal";

accountEmail = "abcd@gmail.com"; //Value can be changed
accountPassword = "xyz1234";
accountCity = "Kolkata";

//accountId = 87654321; // Throws error
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var as it is outdated.
Scope of var is function scope.
Scope of let and const is block scope.
*/