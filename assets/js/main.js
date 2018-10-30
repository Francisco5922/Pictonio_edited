//Contact Form

$( document ).ready(function(){
	var userLang = navigator.language || navigator.userLanguage;

  userLang = userLang.substr(0,2);

  var get_url = window.location;
  var base_url = get_url.protocol + "//" + get_url.host + '/';

  if (userLang != "pt") {
  	if(document.referrer != base_url && document.referrer != (base_url + 'en/')){
  		window.location.href = "/en";
  	}
  }
});

$('#submit').click(function(){

$.post("assets/php/send.php", $(".contact-form").serialize(),  function(response) {
 $('#success').html(response);
});
return false;

});

$('.navbar-nav li a').on('click', function(){
  if($('.navbar-toggle').css('display') != 'none'){
      $(".navbar-toggle").trigger( "click" );
  }
});