let user = {}

user.name = 'John';
user.surname = 'Smith',



user.name = Pete;

delete user.name;



let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(key, value) {

    let answer = key in schedule;

    return answer;


}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;

for(let value in salaries) {
sum += salaries[value];

console.log(sum);
}



function multiplyNumeric(obj) {

    for(let value in obj) {
        
        if(Number.isInteger(obj[value])) {
            obj[value] *= 2;
        }

    }

}




