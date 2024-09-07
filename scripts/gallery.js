const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const playlist = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5'];
let index = 0;
const names = ['Горина Марина Константиновна', 'Ашкалова Дарья Павловна', 'Конькова Мария Данииловна', 'Шевнин Даниил Михайлович', 'Гофман Омара Ивановна']
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
const len = 5;

function next(){
    console.log('next');
    index++;
    if(index==len){
        index = 0;
    } 
    first.src = `img/${playlist[index]}.jpg`;
    second.src = `img/${playlist[(index + 1) % len]}.jpg`;
    third.src = `img/${playlist[(index + 2) % len]}.jpg`;
    text1.innerText = names[index];
    text2.innerText = names[(index + 1) % len];
    text3.innerText = names[(index + 2) % len];
}


function prev(){
    console.log('previous');
    index = index-1;
    if(index==-1){
        index = len-1;
    } 
    first.src = `img/${playlist[index]}.jpg`;
    second.src = `img/${playlist[(index - 1 + len) % len]}.jpg`;
    third.src = `img/${playlist[(index - 2 + len) % len]}.jpg`;
    text1.innerText = names[index];
    text2.innerText = names[(index - 1 + len) % len];
    text3.innerText = names[(index - 2 + len) % len];
}
