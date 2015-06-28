$(function() {
	$('#btnShowLogin').click(function (e) {
		e.preventDefault();
        if ($('#panelLogin').hasClass('hidden')) {
            $('#panelLogin').removeClass('hidden');
        }

        if (!$('#alertLoggedIn').hasClass('hidden')) {
            $('#alertLoggedIn').addClass('hidden');
        }
	});
	
	$('#btnDoLogin').click(function (e) {
		e.preventDefault();

        $('#alertLoginFailed').addClass('hidden');

		if (!$('#alertRequiredFields').hasClass('hidden')) {
			$('#alertRequiredFields').addClass('hidden');
		}
		if (doFormValidation()) {
			doFormSubmission();
		} else {
			$('#alertRequiredFields').removeClass('hidden');
		}
	});
});

function doFormValidation() 
{
	return ($('#inputEmail').val() != '' && $('#inputPassword').val() != '' );
}

function doFormSubmission() 
{
	$.get('login.json', function(data) {
        if (data.validUser) {
            $('#panelLogin').addClass('hidden');
            $('#alertLoggedIn').removeClass('hidden');
        } else {
            $('#alertLoginFailed').removeClass('hidden');
        }
	});
}