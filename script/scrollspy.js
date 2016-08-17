$( document ).ready(function() {
 var spy = new ScrollSpy('#js-scrollspy', {
  nav: '.js-scrollspy-nav > li > a',
  className: 'is-inview'
});
console.log('scrollspy is ' + spy);
});
