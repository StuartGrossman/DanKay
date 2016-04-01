(function(){
	'use strict'
	angular.module('app').controller('MailSenderController', MailSenderController);
	MailSenderController.$inject = ['HomeFactory'];

	function MailSenderController(HomeFactory){
		var vm = this;
		vm.mail = {};
		var success;
		vm.done = false;
		vm.sendMail = function(){
			console.log(vm.mail);
			HomeFactory.MailSender(vm.mail).then(function(res){
				console.log('trying to send mail')
				console.log(res)
				success = res; 
				if(success = 'Email was sent!'){
					vm.done = true;
				}
			})
		}


	}

})();