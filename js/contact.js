$(window).on('load', function() {
    /*---------------
	  Sending Email
	----------------*/
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
		let name = document.querySelector("#user_name").value
		let msg = document.querySelector("#message").value
		let email = document.querySelector("#user_email").value

		if(name == "" || msg == "" || email == ""){
			error();
		}
		else{
			
			// these IDs from the previous steps
			emailjs.send('service_zujit2a', 'template_frjcmvh',{from_name: name, message : msg, reply_to : email},'user_YEwre0oYg11t9xtbjeaOT')
				.then(function() {
					console.log('SUCCESS!');
					success();
				}, function(error) {
					console.log('FAILED...', error);
					error();
				});
		}

		
		function success(){
			swal({
					title: "Thank you!",
					text: "Your message has been sent.",
					icon: "success",
					button: "OK"
					}).then((value) => { 
						window.location.reload();
					});
		}
		function error(){
			swal({
					title: "Oops!",
					text: "Input fields are required",
					icon: "error",
					button: "OK"
					});									
		}
	});
});