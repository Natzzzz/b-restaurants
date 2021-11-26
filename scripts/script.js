// attract
$.attractHover(
  '.js-attract-hover',
  {
    proximity: 40,
    magnetism: 3
  }
);

$(".option").click(function(){
  $(".option").removeClass("active");
  $(this).addClass("active");
  
});

function clear(a) {
  if (a==1) {
      $('.burger2').fadeOut(500);
      $('#tn2').removeClass("selActive");
      $('.burger3').fadeOut(500);
      $('#tn3').removeClass("selActive");
      $('.burger4').fadeOut(500); 
      $('#tn4').removeClass("selActive");
      $('.burger5').fadeOut(500);
      $('#tn5').removeClass("selActive");
      $('.burger6').fadeOut(500);
      $('#tn6').removeClass("selActive");
  } else if(a==2) {
      $('.burger1').fadeOut(500);
      $('#tn1').removeClass("selActive");
      $('.burger3').fadeOut(500);
      $('#tn3').removeClass("selActive");
      $('.burger4').fadeOut(500);   
      $('#tn4').removeClass("selActive");
      $('.burger5').fadeOut(500);
      $('#tn5').removeClass("selActive");
      $('.burger6').fadeOut(500);
      $('#tn6').removeClass("selActive");
  } else if(a==3) {
      $('.burger1').fadeOut(500);
      $('#tn1').removeClass("selActive");
      $('.burger2').fadeOut(500);
      $('#tn2').removeClass("selActive");
      $('.burger4').fadeOut(500);
      $('#tn3').removeClass("selActive");
      $('.burger5').fadeOut(500);
      $('#tn4').removeClass("selActive");
      $('.burger6').fadeOut(500);
      $('#tn6').removeClass("selActive");
  } else if(a==4) {
      $('.burger1').fadeOut(500);
      $('#tn1').removeClass("selActive");
      $('.burger2').fadeOut(500);
      $('#tn2').removeClass("selActive");
      $('.burger3').fadeOut(500);
      $('#tn3').removeClass("selActive");
      $('.burger5').fadeOut(500);
      $('#tn5').removeClass("selActive");
      $('.burger6').fadeOut(500);
      $('#tn6').removeClass("selActive");
  } else if(a==5) {
      $('.burger1').fadeOut(500);
      $('#tn1').removeClass("selActive");
      $('.burger2').fadeOut(500);
      $('#tn2').removeClass("selActive");
      $('.burger3').fadeOut(500);
      $('#tn3').removeClass("selActive");
      $('.burger4').fadeOut(500);
      $('#tn4').removeClass("selActive");
      $('.burger6').fadeOut(500);
      $('#tn6').removeClass("selActive");
  } else if(a==6) {
      $('.burger1').fadeOut(500);
      $('#tn1').removeClass("selActive");
      $('.burger2').fadeOut(500);
      $('#tn2').removeClass("selActive");
      $('.burger3').fadeOut(500);
      $('#tn3').removeClass("selActive");
      $('.burger4').fadeOut(500);
      $('#tn4').removeClass("selActive");
      $('.burger5').fadeOut(500);
      $('#tn5').removeClass("selActive");
  }
}

// Transitions de texte sur le menu

$('#tn1').on('click',function(){
  clear(1);
  $('.burger1').fadeIn(700);
  $('#tn1').addClass("selActive");
});

$('#tn2').on('click',function(){
  clear(2);
  $('.burger2').fadeIn(700);
  $('#tn2').addClass("selActive");
});

$('#tn3').on('click',function(){
  clear(3);
  $('.burger3').fadeIn(700);
  $('#tn3').addClass("selActive");
});

$('#tn4').on('click',function(){
  clear(4);
  $('.burger4').fadeIn(700);
  $('#tn4').addClass("selActive");
});

$('#tn5').on('click',function(){
  clear(5);
  $('.burger5').fadeIn(700);
  $('#tn5').addClass("selActive");
});

$('#tn6').on('click',function(){
  clear(6);
  $('.burger6').fadeIn(700);
  $('#tn6').addClass("selActive");
});

setTimeout(function(){ 
  $('.centerpls').remove();
}, 
  3000);

  ScrollReveal().reveal('.first', {delay: 200});
  ScrollReveal().reveal('.second', {delay: 1200});

  ScrollReveal().reveal('.prem', {delay: 400});
  ScrollReveal().reveal('.dez', {delay: 800});
  ScrollReveal().reveal('.tro', {delay: 1100});

  ScrollReveal().reveal('.selector-wrap', {delay: 200});
  ScrollReveal().reveal('.menuDescription', {delay: 800});
  ScrollReveal().reveal('.selecImg', {delay: 1200});

  ScrollReveal().reveal('.outlined', {delay: 300});
  ScrollReveal().reveal('.thismonth', {delay: 500});



  ScrollReveal().reveal('.placebo', {delay: 200});
  ScrollReveal().reveal('.ipa', {delay: 800});

  ScrollReveal().reveal('.hoppy', {delay: 1500});
  ScrollReveal().reveal('.hoppybeer', {delay: 1900});

  ScrollReveal().reveal('.bourbtitle', {delay: 200});
  ScrollReveal().reveal('.bourbox', {delay: 600});
  ScrollReveal().reveal('.svge', {delay: 1000});
  ScrollReveal().reveal('.pc', {delay: 2000});
  ScrollReveal().reveal('.svgee', {delay: 2400});
  ScrollReveal().reveal('.bouright', {delay: 3000});
  ScrollReveal().reveal('.goodN', {delay: 3800});

