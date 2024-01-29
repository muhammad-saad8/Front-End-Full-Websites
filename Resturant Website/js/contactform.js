(function($) {
    "use strict";
	
	var options2 = { success: showResponseContact, beforeSubmit: showRequestContact}; 
    $('#contact-form').submit(function() { 
        $(this).ajaxSubmit(options2); 
        return false; 
    });
	
	})(jQuery);

function showResponseContact(responseText, statusText)  { 
	if (statusText == 'success') {
		jQuery('#contact-form-holder').html('<h5>Message sent</h5>'); 
		jQuery('#output-contact').html('<p>Thanks for contacting us! We will check your message within a few minutes.</p>'); 
	} else {
		alert('status: ' + statusText + '\n\nSomething is wrong here');
	}
}

function showRequestContact(formData, jqForm, options2) { 
	var form = jqForm[0];
	var validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
	
	if (!form.name.value) { 
		jQuery('#output-contact').html('<div class="output2">Please fill the Name field!</div>'); 
		return false; 
	} else if (!form.email.value) {
		jQuery('#output-contact').html('<div class="output2">Please fill the Email field!</div>'); 
		return false; 
	} else if (form.email.value.search(validRegExp) == -1) {
		jQuery('#output-contact').html('<div class="output2">Please provide a valid Email address!</div>'); 
		return false; 
	}
	else if (!form.subject.value) {
		jQuery('#output-contact').html('<div class="output2">Please fill the Subject field!</div>'); 
		return false; 
	}
	else if (!form.message.value) {
		jQuery('#output-contact').html('<div class="output2">Please fill the Message field!</div>'); 
		return false; 
	}
	 else {	   
	 jQuery('#output-contact').html('Sending message...!');  		
		return true;
	}
}