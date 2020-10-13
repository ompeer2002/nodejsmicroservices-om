// lab 1
let userid="om"
let password="om"
const login=(resolve ,connect)=> userid=="om" && password=="om" ?resolve():reject();
//function as  a parameter
let resolve = ()=> console.log('login successfull');
let reject = ()=>console.log('login rejected');
login(resolve,reject);