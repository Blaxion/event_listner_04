// // exo 1
// let inputfields = document.getElementsByTagName('input')
// console.log(inputfields)

// let input_01 = inputfields[0] 
// console.log(inputfields[0])
// input_01.addEventListener('focus', () =>{
//     input_01.setAttribute('style','background-color:blue');
// });

// // Exo 2
// let input_02 = inputfields[1] 
// console.log(inputfields[1])
// input_02.addEventListener('focus', () =>{
//     input_02.setAttribute('style','background-color:blue');
// });
// input_02.addEventListener('focusout', () =>{
//     input_02.setAttribute('style','background-color:white');
// });

// // Exo 3
// let premierParagraphe = document.getElementsByClassName('premierParagraphe')[0]
// let secondParagraphe = document.getElementsByClassName('secondParagraphe')[0]
// let dernierParagraphe = document.getElementsByClassName('dernierParagraphe')[0]
// let buttonExo3 = document.getElementsByClassName('buttonExo')[0]

// buttonExo3.addEventListener('click',()=>{
//     premierParagraphe.innerText = secondParagraphe.innerText
//     dernierParagraphe.innerText = secondParagraphe.innerText
// })

// // Exo 4 
// let exo4 = document.getElementById('exo4')
// let buttonExo4 = document.getElementsByClassName('buttonExo')[1]


//1
let exo1 = document.getElementsByTagName('input')[0];
exo1.addEventListener('focus', ()=>{
    exo1.setAttribute('style', 'background-color: blue;');
});

//2
let exo2 = document.getElementsByTagName('input')[1];
exo2.addEventListener('focus', ()=>{
    exo2.setAttribute('style', 'background-color: blue;');
});

exo2.addEventListener('focusout', ()=>{
    exo2.setAttribute('style', 'background-color: white;');
});

//3
let paragraphe0 = document.getElementsByClassName('premierParagraphe')[0];
let paragraphe1 = document.getElementsByClassName('secondParagraphe')[0];
let paragraphe2 = document.getElementsByClassName('dernierParagraphe')[0];
let btn = document.getElementsByClassName('buttonExo')[0];

btn.addEventListener('click', () =>{
    paragraphe0.innerHTML = paragraphe1.innerHTML;
    paragraphe2.innerHTML = paragraphe1.innerHTML;
})

//4
let input3 = document.querySelectorAll('input')[2];
let txt = document.querySelector('#exo4');
let btn2 = document.getElementsByClassName('buttonExo')[1];

btn2.addEventListener('click', () =>{
    txt.innerText = input3.value;
})

//5
let btn3 = document.querySelectorAll('button')[2];
let img1 = document.querySelectorAll('img')[0];
let pChemin = img1.previousElementSibling.innerText;

btn3.addEventListener('click', () =>{
    img1.src = pChemin.substr(9);
})

//6
let img2 = document.querySelectorAll('img')[1];
let img3 = document.querySelectorAll('img')[2];

img2.addEventListener('click', () => {
    img3.src = img2.src;
})

//7
let btn4 = document.getElementsByClassName('btn')[3];
let para = document.querySelectorAll('p')[5];
let para2 = document.querySelectorAll('p')[6];
let tempo;
//methode 1
btn4.addEventListener('click', () =>{
    tempo = para2.innerText;
    para2.innerText = para.innerText;
    para.innerText = tempo;
})

// de Lalaing Swapping trick OMG 2021 EDITION
btn4.addEventListener('click', () =>{
    [para.innerText, para2.innerText] = [para2.innerText, para.innerText];
})
