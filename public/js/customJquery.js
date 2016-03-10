$( document ).ready(function() {

    var service = $('#serviceHtml');
    service.hide();
    $('#collapse').hide();
    $('#expand').on('click', function(e){
    	$('#expand').hide();
    	service.fadeIn(1000);
    	$('#collapse').show();
    })
    $('#collapse').on('click', function(e){
    	
    	service.fadeOut(1000, function(){
    		$('#expand').show();
    		$('#collapse').hide();
    	});
    })
});