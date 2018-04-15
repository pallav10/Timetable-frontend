$(document).ready(function() {
	$('form').submit(function(e) {
	e.preventDefault();
			
			$.ajax({
	    type: "POST",
	    url: "http://127.0.0.1:8000/sheduler/users/login/",
	    data: JSON.stringify({"email": $("#userEmail").val(),"password": $("#userPassword").val()}),
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function(data,status) {
	        console.log(data);
	        sessionStorage.setItem("Token", data.token);
	        $.ajax({
	        	type: "GET",
	        	url: "http://127.0.0.1:8000/sheduler/users/"+data.id+"/",
	        	headers: {"Content-Type": "application/json", "Authorization": "Token "+sessionStorage.getItem("Token")},
	        	contentType: "application/json; charset=utf-8",
	        	dataType: "json",
	        	success: function(data,status) {
	        		console.log(data);
	        		console.log(status);
        			sessionStorage.setItem('First Name', data.email);
        			sessionStorage.setItem('u_id', data.id);
        			window.location.replace("AddLecture.html");
	        	},
	        	error: function(data,status) {
	        		console.log(data);
	        		console.log(status);
	        	}
	        });
	    },
	    error: function(data,status){
	        
	        var errorResponse = JSON.parse(data.responseText);
	        console.log(errorResponse.message);
	        $("#emailError").text(errorResponse.message);
	    }
		});
	});
});