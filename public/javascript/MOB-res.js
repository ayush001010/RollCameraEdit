let menubtn = document.querySelector("#menu-RES");
let closebtn = document.querySelector('#close');
let menu = document.querySelector('.menu-RES');
let list = document.querySelector('.list');
let html = document.querySelector('html');
let anchor = document.querySelector('#anchor');

let flag = false;

menubtn.addEventListener('click', ()=>{
    
    if (!flag) {
        menu.style.width = '100%';
        list.style.display = 'grid';
        flag = true; 
    }
})


function anchor1(){

        menu.style.width = '0%';
        list.style.display = 'none';
        flag = false;
}
function anchor2(){

        menu.style.width = '0%';
        list.style.display = 'none';
        flag = false;
}
function anchor3(){

        menu.style.width = '0%';
        list.style.display = 'none';
        flag = false;
}
function anchor4(){

        menu.style.width = '0%';
        list.style.display = 'none';
        flag = false;
}


closebtn.addEventListener('click', ()=>{
    
    if (flag) {
        menu.style.width = '0%';
        list.style.display = 'none';
        flag = false; 
    }
})