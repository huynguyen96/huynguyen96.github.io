 $(function(){
	 vitri = $('#khoiedu').offset().top;
	 console.log(vitri);
	
	 $('.xuong,.kinhnghiem').click(function(event) {
	 	$('body,html').animate({scrollTop:vitri}, 800);
	 	return false;
	 });
})  
 