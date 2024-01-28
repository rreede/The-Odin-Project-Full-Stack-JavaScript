
// (let i = 0; i<16; i++) {

for(let i = 0;i<256;i++) {

let gridBox = document.createElement('div');

let container = document.querySelector('.container');

container.appendChild(gridBox);


}

let gridItems = document.querySelectorAll('.container div');

for(let i = 0; i<gridItems.length; i++) {

        gridItems[i].addEventListener('mouseover', function(e) {
        console.log(e.target);
        gridItems[i].setAttribute('style', 'background-color:red;');
    });   

}

let resetButton = document.querySelector('button');

resetButton.addEventListener('click', function(e) {

    for(let i = 0; i<gridItems.length; i++) {
    
        gridItems[i].setAttribute('style', 'background-color:white;');
    };   
    
})


