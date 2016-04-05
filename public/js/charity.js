var myJqueryAlias = jQuery.noConflict();
myJqueryAlias( document ).ready(function() {
    myJqueryAlias('.charity').hide();
    myJqueryAlias('#button2Charity').hide();
    // var reviews =  myJqueryAlias('#reviews_box');
    myJqueryAlias('#buttonCharity').on('click', function(){
        myJqueryAlias('.charity').fadeIn(1000);
        myJqueryAlias('#buttonCharity').hide();
        myJqueryAlias('#button2Charity').fadeIn(1000);

    })
	myJqueryAlias('#button2Charity').on('click', function(){
        myJqueryAlias('#button2Charity').fadeOut(1000);
        myJqueryAlias('.charity').fadeOut(1000, function(){
             myJqueryAlias('#buttonCharity').fadeIn(2000);
        });
        
       

    })
});