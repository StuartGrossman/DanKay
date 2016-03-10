$( document ).ready(function() {

    var reviews = $('#reviews');
    reviews.hide();
    // $('#collapse').hide();
    $('#showTest').on('click', function(e){
    	$('#showTest').hide();
    	reviews.fadeIn(1000);
    	$('#collapse').show();
    })
    // $('#collapse').on('click', function(e){
    	
    // 	reviews.fadeOut(1000, function(){
    // 		$('#expand').show();
    // 		$('#collapse').hide();
    // 	});
    // })
});