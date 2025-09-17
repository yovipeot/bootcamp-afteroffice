const json = require ('./data.json');

const data = json.stringify(json); // ini full copy
const data2 = json.parse(data) // ini bukan full copy, ini reference

// let data = {...json};

data2.name = "Susi";
// data.name = "Budi";

console.log('data');
console.log(data);

console.log('json');
console.log(json);
