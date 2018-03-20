function challengeOne() {
    let students = [
        { name: 'Remy', cohort: 'Jan' },
        { name: 'Genevieve', cohort: 'March' },
        { name: 'Chuck', cohort: 'Jan' },
        { name: 'Osmund', cohort: 'June' },
        { name: 'Nikki', cohort: 'June' },
        { name: 'Boris', cohort: 'June' }
    ];
    //need to grab the hash/object from each array item
    for (var i = 0; i < students.length; i++) {
        // console.log('current hash ' + students[i]);
        // let x = students[i];
        ('Name: ' + students[i].name, ', Cohort: ' + students[i].cohort);
        // for(let key in students[i]){
        //     if(key === 'name'){ //if the key is the name_key
        //         var x = 'Name: ' + students[i][key];// then print persons name
        //     }
        //     if(key === 'cohort'){
        //         var y = ', Cohort Month: ' + students[i][key]; //print cohort name
        //         var toPrint = x.concat(y); // concat the two strings
        //         console.log(toPrint); // print string
        //     }
        // }
    }
    return true; //maybe i could put to toPrint into and array to return and print???
}
challengeOne();


// function challengeTwo() {
//     let users = {
//         employees: [
//             { 'first_name': 'Miguel', 'last_name': 'Jones' },
//             { 'first_name': 'Ernie', 'last_name': 'Bertson' },
//             { 'first_name': 'Nora', 'last_name': 'Lu' },
//             { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
//         ],
//         managers: [
//             { 'first_name': 'Lillian', 'last_name': 'Chambers' },
//             { 'first_name': 'Gordon', 'last_name': 'Poe' }
//         ]
//         // make .toUpper for the first key ... everything is .toUpper
//     };
//     for (let index2 in users) {
//         console.log(index2.toUpperCase());
//         console.log(users[index2]);
//         // console.log(typeof (users[index2]));
//         if (!Array.isArray(users[index2])) {
//             throw new Error('value must be an array');
//             // console.log("error, needs to be an array");
//         } else {
//             for (users[index2] in users) {
// //..............................................

//             }
//         }
//     }
//     return true;
// }
// (challengeTwo());


function challengeTwoB() {
    let users = {
        employees: [
            { 'first_name': 'Miguel', 'last_name': 'Jones' },
            { 'first_name': 'Ernie', 'last_name': 'Bertson' },
            { 'first_name': 'Nora', 'last_name': 'Lu' },
            { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
        ],
        managers: [
            { 'first_name': 'Lillian', 'last_name': 'Chambers' },
            { 'first_name': 'Gordon', 'last_name': 'Poe' }
        ]
    };
    for (let index2 in users) {
        console.log(index2.toUpperCase()); 
        display_num = 1;
        for (let person of users[index2]) {

            let name_len = person.first_name.length + person.last_name.length;
            console.log(`${display_num} - ${person.last_name.toUpperCase()}, ${person.first_name.toUpperCase()} - ${name_len}`);

            display_num += 1;
        }
    }
    return true;
}
console.log(challengeTwoB());

// parent Dot class
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        console.log(`This ${this.constructor.name} is at x ${this.x} and y ${this.y}`);
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
}
// we can now create Circles
const circle1 = new Circle(33, 33, 33);
// same attributes as a Dot, plus a radius
console.log(circle1);
// and Circles can access Dot methods
circle1.showLocation();
