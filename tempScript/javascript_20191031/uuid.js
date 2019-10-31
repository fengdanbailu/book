const uuidv1 = require('uuid/v1');
var id=uuidv1(); // ⇨ '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'
console.log("uuidv1="+id)

const uuidv3 = require('uuid/v3');
// ... using predefined DNS namespace (for domain names)
const uuidv3_1 = uuidv3('hello.example.com', uuidv3.DNS); // ⇨ '9125a8dc-52ee-365b-a5aa-81b0b3681cf6'
console.log("uuidv3_1="+uuidv3_1)
 
// ... using predefined URL namespace (for, well, URLs)
const uuidv3_2 = uuidv3('http://example.com/hello', uuidv3.URL); // ⇨ 'c6235813-3ba4-3801-ae84-e0a6ebb7d138'
console.log("uuidv3_2="+uuidv3_2)
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
const uuidv3_3 = uuidv3('Hello, World!', MY_NAMESPACE);
console.log("uuidv3_3="+uuidv3_3)
