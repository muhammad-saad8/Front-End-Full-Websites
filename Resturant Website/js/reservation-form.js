(function($) {
    "use strict";
	
	 var options = { success: showResponse, beforeSubmit: showRequest}; 
    $('#reservation-form').submit(function() { 
        $(this).ajaxSubmit(options); 
        return false; 
    });
	
})(jQuery);

function showResponse(responseText, statusText)  { 
	if (statusText == 'success') {
		jQuery('.reservation_txt').html('<h4>Message sent</h4>'); 
		jQuery('#output').html('<p>Thanks for contacting us! We will get to your message as soon as we can</p>'); 
	} else {
		alert('status: ' + statusText + '\n\nSomething is wrong here');
	}
}

function showRequest(formData, jqForm, options) { 
	var form = jqForm[0];
	var validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
	
	if (!form.author.value) {
		jQuery('#output').html('<div class="output2">Please fill the Name field!</div>'); 
		return false; 
	} else if (!form.email.value) {
		jQuery('#output').html('<div class="output2">Please fill the Email field!</div>'); 
		return false; 
	} else if (form.email.value.search(validRegExp) == -1) {
		jQuery('#output').html('<div class="output2">Please provide a valid Email address!</div>'); 
		return false; 
	}
	else if (!form.phone.value) {
		jQuery('#output').html('<div class="output2">Please fill the Phone field!</div>'); 
		return false; 
	} else if ( isNaN(form.phone.value)) {
		jQuery('#output').html('<div class="output2">Please enter a valid Phone number!</div>'); 
		return false; 
	} 
	else if (!form.datepicker.value) { 
		jQuery('#output').html('<div class="output2">Please fill the Date field!</div>'); 
		return false; 
	} else if (!form.time.value) {
		jQuery('#output').html('<div class="output2">Please fill the Time field!</div>'); 
		return false; 
	} else if (!form.persons.value) {
		jQuery('#output').html('<div class="output2">Please fill the Seats field!</div>'); 
		return false; 
	} else if ( isNaN(form.persons.value)) {
		jQuery('#output').html('<div class="output2">Please enter a valid number of seats!</div>'); 
		return false; 
	}
	else {	   
	 jQuery('#output').html('Sending message...!');  		
		return true;
	}
}