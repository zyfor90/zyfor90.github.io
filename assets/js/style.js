$('.page-scroll').on('click', function(e) {
 var tujuan = $(this).attr('href');
 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 10
}, 1250, "swing");

 e.preventDefault();
});

$('.artikel-box').on('mouseover', function(){
  $( this ).removeClass("baper");
  $( this ).addClass("hover");
});
$('.artikel-box').on('mouseleave', function(){
  $( this ).removeClass("hover");
  $( this ).addClass("baper");
});

$(document).ready(function(){
  var heights=[];
  $(".kolom").each(function() {
    heights.push($(this).height());
  });
  var maxHeight = Math.max.apply(null, heights);
  $(".kolom").height(maxHeight);
})
