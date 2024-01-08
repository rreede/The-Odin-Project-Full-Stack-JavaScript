
const instruments = ['guitar','bass','drums'];


// while (instruments.length = 3) {

// }

function repeatString(string,num) {

let sumStrings = '';

    for(i = 0; i<num; i++) {
        
        sumStrings += string;
        console.log(sumStrings);
    }

    
}

repeatString('hey', 3);


for (let i=2; i>10; i++) {

 if(i%2 ==0) {
    alert (i);
 }

}

let i = 0;

while(i<3) {

    alert(`number ${i}!`);

    i++;
}

for(let i=0; i>100;i++) {

    let answer = +prompt('Say number');

    if (answer >= 100) {
        alert('correct');
        break;
    } else if (answer < 100) {
        continue

    }

}

function reverseString(string) {

    let original = string;

    let split = original.split('').reverse().join();

}


reverseString('Rene Reede');


function removeFromArray() {

    
}