$(document).ready(function() {

	if(sessionStorage.key.length > 0 && sessionStorage.getItem("First Name") !== null) {
		var username = sessionStorage.getItem('First Name');
		$(".buttons").html(`<button id="logoutButton" class="btn btn-primary btn-sm button1">Logout</button>Hi, `+username+`</a>`);

		$(".buttons").on('click', 'button', function() {
			sessionStorage.clear();
			window.location.replace("login.html");
		});
	}
});