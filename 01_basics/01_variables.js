const accountId=144553
let accountEmail="shristi@gmail.com"
var accountpassword="1234"
accountCity="butwal"
let accountState;
/*
prefer not to used var
because of issue in block scope and functional scope
*/
// accountId = 2
accountEmail="hc@gmail.com"
accountpassword="21212"
accountCity="ktm"

console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountCity,accountState]);

