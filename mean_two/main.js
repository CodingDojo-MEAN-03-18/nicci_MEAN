var myStr = 'some string val';
// myStr = 5;
// how to do a union of types? any is possible but then you could push in empty objects
var array1 = ['cat', 'dog', 'horse'];
//union of types
var array2 = [90, 'cat', 'dog', 'horse'];
array2.push(5);
array2.push(true);
// array2.push({});
var first = array2[0];
