$( document ).ready(function(){

var seeMore = document.getElementById('see-more');
var text = document.getElementById('text');

seeMore.addEventListener('click', function(){ 
  console.log('see more clicked');
  
  text.classList.toggle('nav');
});

var load = document.getElementById('load');
var para = document.getElementById('para');

load.addEventListener('click', function(){ 
  para.classList.toggle('nav');
});

var see = document.getElementById('see');
var more = document.getElementById('more');

see.addEventListener('click', function(){ 
  more.classList.toggle('nav');
});

var button = document.getElementById('button');
var word = document.getElementById('word');

button.addEventListener('click', function(){ 
  word.classList.toggle('nav');
});

var open = document.getElementById('open');
var close = document.getElementById('close');

open.addEventListener('click', function(){ 
  close.classList.toggle('nav');
});

var abrir = document.getElementById('abrir');
var stop = document.getElementById('stop');

abrir.addEventListener('click', function(){ 
  stop.classList.toggle('nav');
});

// ('body').scrollspy({ target: '#my-nav' });

});