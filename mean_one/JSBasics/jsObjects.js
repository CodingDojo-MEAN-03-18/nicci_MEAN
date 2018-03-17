function challengeOne(){
    let students = [
        { name: 'Remy', cohort: 'Jan' },
        { name: 'Genevieve', cohort: 'March' },
        { name: 'Chuck', cohort: 'Jan' },
        { name: 'Osmund', cohort: 'June' },
        { name: 'Nikki', cohort: 'June' },
        { name: 'Boris', cohort: 'June' }
    ];
    //need to grab the hash/object from each array item
    for(var i=0; i<students.length; i++){
        // console.log('current hash ' + students[i]);
        // let x = students[i];

        for(let key in students[i]){
            if(key === 'name'){ //if the key is the name_key
                var x = 'Name: ' + students[i][key];// then print persons name
            }
            if(key === 'cohort'){
                var y = ', Cohort Month: ' + students[i][key]; //print cohort name
                var toPrint = x.concat(y); // concat the two strings
                console.log(toPrint); // print string
            }
        }
    }
    return true; //maybe i could put to toPrint into and array to return and print???
}
console.log(challengeOne());

function challengeTwo(){
    let users = {
        employees: [
            { 'first_name': 'Miguel', 'last_name': 'Jones' },
            { 'first_name': 'Ernie', 'last_name': 'Bertson' },
            { 'first_name': 'Nora', 'last_name': 'Lu' },
            { 'first_name': 'Sally', 'last_name': 'Barkyoumb'}
        ],
        managers: [
            { 'first_name': 'Lillian', 'last_name': 'Chambers' },
            { 'first_name': 'Gordon', 'last_name': 'Poe' }
        ]
    };    
    return true;
}
console.log(challengeTwo());
