
let myStr = 'some string val';

// myStr = 5;
// how to do a union of types? any is possible but then you could push in empty objects
const array1: string[] = ['cat', 'dog', 'horse'];
//union of types
const array2: (string | number | boolean)[]= [90,'cat', 'dog', 'horse'];
array2.push(5);
array2.push(true);
// array2.push({});

const first: number = array2[0] as number;
//MINUTE 21