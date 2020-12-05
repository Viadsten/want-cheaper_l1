 var services = document.querySelector('#services');
 
const mediaQuery750 = window.matchMedia('(min-width: 750px)')
if (mediaQuery750.matches) {
  services.classList.remove('owl-carousel');
 }

/*
 var service = document.querySelector('#service');

service.hover(function(){
  console.log('1');
})*/