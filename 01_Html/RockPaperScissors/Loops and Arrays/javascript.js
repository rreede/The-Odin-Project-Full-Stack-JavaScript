
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

// Add or refuse people in the list

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';