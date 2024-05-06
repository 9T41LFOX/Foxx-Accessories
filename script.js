const bar = document.getElementById('bar');
const x = document.getElementById('x');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('tap', () => {
        nav.classList.add('active');
    });
}

if(x){
    x.addEventListener('click', () => {
        nav.classList.remove('active');
    }); 
}