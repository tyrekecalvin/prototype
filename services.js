
window.onload = function() {
var seeMore = document.getElementById('see-more');
var text = document.getElementById('text');

seeMore.addEventListener('click', function(){ 
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

var navToggle = document.getElementById('nav-toggle');
var navItems = document.getElementById('nav-items');

// 11) Store IDs in "variables" - it makes it easier to refer to them. The value we're passing into the method is a "string"

navToggle.addEventListener('click', function(){
  
// 12) Add an "Event Listener" for the button
  
// 13) When the button is clicked, we'll call a "function"
  
 navItems.classList.toggle('navbar');
 
});
('body').scrollspy({ target: '#my-nav' });

};