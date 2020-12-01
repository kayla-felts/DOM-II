// Your code goes here
const header = document.querySelector('.intro');
const welcome = header.querySelector('h2');
const funBus = header.querySelector('img');
const funInSun = document.querySelector('.destination:nth-of-type(1)');
const mountain = document.querySelector('.destination:nth-of-type(2)');
const island = document.querySelector('.destination:nth-of-type(3)');

window.addEventListener('load', function(event){
    console.log(`Page loaded, let's have some FUN!!!`);
});

document.addEventListener('keydown', logKey);
function logKey(event) {
  console.log += ` ${event.code}`;
};

document.addEventListener('pointerlockchange', (event) => {
    console.log('Pointer lock changed');
  });

Array.from(document.links).forEach(function (link) {
    link.addEventListener('mouseover', function (event) {
        event.target.style.color = 'purple';

        setTimeout(() => {
            event.target.style.color = '';
        }, 1000);
    }, false)
});

funBus.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

welcome.addEventListener('mouseenter', function (event){
    event.target.style.background = 'red';
});

welcome.addEventListener('mouseleave', function (event){
    event.target.style.background = 'green';

    setTimeout(() => {
       event.target.style.background = ''; 
    }, 1500);
},false);

funInSun.addEventListener('click', function (event){
    event.target.style.background = 'pink';

    setTimeout(() => {
       event.target.style.background = ''; 
    }, 1200);
}, false);

mountain.addEventListener('dblclick', function (event){
    event.target.style.background = 'purple';

    setTimeout(() => {
        event.target.style.background = '';
    }, 1200);
}, false);

island.addEventListener('auxclick', function (event){
    event.target.style.background = 'black';

    setTimeout(() => {
        event.target.style.background = '';
    }, 1200);
}, false);