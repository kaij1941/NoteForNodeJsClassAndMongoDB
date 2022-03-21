const { v4: uuidv4 } = require('uuid');
const a =uuidv4();
console.log('qq',a);
//console.log(uuidv4());// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const obj ={
    "title":"今天要刷牙",
    "id":uuidv4()
}
console.log(obj);