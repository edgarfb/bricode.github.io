
// INICIO CONTROL SOBRE MENU DESPLEGABLE
var barsIcon = $("#bars-icon span.fa.fa-bars");
var menuToggle = $("#navBar-Desplegable");
var secciones = $('#secciones');
var subSecciones = $('#subSecciones');

$(document).ready(function(){
    barsIcon.on('click',function(e){
        e.preventDefault();
        barsIcon.toggleClass('active');
         menuToggle.fadeToggle();

     });
     $('#secciones').click(function(e){
         e.preventDefault();
          menuToggle.fadeToggle();
     })
})
