

$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
	    		
	    		var a=1;
	    		$("#list-of-subject-1").empty();
		    	for (var i = 0; i < data.length; i++) {
		    		if(data[i].semester==a){
		    		$("#list-of-subject-1").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}
		    	}
		    	$("#list-of-subject-2").empty();
		    	for (var i = 0; i < data.length; i++) {
					if(data[i].semester==a){
		    		$("#list-of-subject-2").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}		    	
		    	}
		    	$("#list-of-subject-3").empty();
		    	for (var i = 0; i < data.length; i++) {
					if(data[i].semester==a){
		    		$("#list-of-subject-3").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}		    	
		    	}
		    	$("#list-of-subject-4").empty();
		    	for (var i = 0; i < data.length; i++) {
					if(data[i].semester==a){
		    		$("#list-of-subject-4").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}		    	
		    	}
		    	$("#list-of-subject-5").empty();
		    	for (var i = 0; i < data.length; i++) {
					if(data[i].semester==a){
		    		$("#list-of-subject-5").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}		    	
		    	}
		    	$("#list-of-subject-6").empty();
		    	for (var i = 0; i < data.length; i++) {
					if(data[i].semester==a){
		    		$("#list-of-subject-6").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}		    	
		    	}
//____________________________________________if semester change the only releted to that semester subject are in choice________________________________________________________
	    		 $("#sem").change(function(){
        			// alert($("#sem option:selected").val());
        			ab=$("#sem option:selected").val();
        			a=ab[0];
        		});
 				$('#sem').on('change', function() {
		    	$("#list-of-subject-1").empty();
		    	for (var i = 0; i < data.length; i++) {
		    		if(data[i].semester==a){
		    		$("#list-of-subject-1").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}
		    	}
		    	$("#list-of-subject-2").empty();
		    	for (var i = 0; i < data.length; i++) {
					if(data[i].semester==a){
		    		$("#list-of-subject-2").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}		    	
		    	}
		    	$("#list-of-subject-3").empty();
		    	for (var i = 0; i < data.length; i++) {
					if(data[i].semester==a){
		    		$("#list-of-subject-3").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}		    	
		    	}
		    	$("#list-of-subject-4").empty();
		    	for (var i = 0; i < data.length; i++) {
					if(data[i].semester==a){
		    		$("#list-of-subject-4").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}		    	
		    	}
		    	$("#list-of-subject-5").empty();
		    	for (var i = 0; i < data.length; i++) {
					if(data[i].semester==a){
		    		$("#list-of-subject-5").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}		    	
		    	}
		    	$("#list-of-subject-6").empty();
		    	for (var i = 0; i < data.length; i++) {
					if(data[i].semester==a){
		    		$("#list-of-subject-6").append(`<option value="`+data[i].faculty+`" id="subject`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].subject_name+`</option>`);
		    		}		    	
		    	}
});
	    	
	    },
	    error: function(data,status) {
	    	console.log(data);
	    	console.log(status);
	    }
		});
});

$(document).ready(function(){
	// $.ajax({
	// 	type: "GET",
	// 	url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
	// 	contentType: "application/json; charset=utf-8",
	// 	dataType: "json",
	// 	success:function(data,status){
	// 		 $("#list-of-subject-1").change(function() {
        	
 //       		var a=data[1].subject_name;
 //       		console.log(a);
 //    });
			
			
	// 	},
	// 	error: function(data,status){
	// 		console.log(data);
	//     	console.log(status);
	// 	},
	// });
$("#submitForm").click(function(){});
	$("#list-of-subject-1").change(function() {
        	$.ajax({
	    type: "GET",
		url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
	    success: function(data,status) {
	    	var a=$("#list-of-subject-1 option:selected").val();
	    //    var b=$("#list-of-subject-1 option:selected").text();
	        $.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
	    //	console.log(a,b);
	    	console.log(data);
	    	$.each(data,function (index, data) { 
	    		if((data.id)==a){
	    	//	$("#list-of-Faculty-1 option:selected").text(data.name);
	    		$("#list-of-Faculty-1 ").empty();
	    		$("#list-of-Faculty-1 ").append(`<label id="faculty`+data.id+`" data-id="`+data.id+`">`+data.name+`</label>`);
	    		console.log(data.name);
	    	}

	    }); 
	    },
	   	
		});       
	    },
		});
    });

    $("#list-of-subject-2").change(function() {
        	$.ajax({
	    type: "GET",
		url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
	    success: function(data,status) {
	    	var aaa1=$("#list-of-subject-2 option:selected").val();
	    //    var b=$("#list-of-subject-2 option:selected").text();
	        $.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
	    //	console.log(a,b);
	    	console.log(data);
	    	$.each(data,function (index, data) { 
	    		if((data.id)==aaa1){
	    	//	$("#list-of-Faculty-2 option:selected").text(data.name);
	    		$("#list-of-Faculty-2").empty();
	    		$("#list-of-Faculty-2").append(`<label id="faculty`+data.id+`" data-id="`+data.id+`">`+data.name+`</label>`);
	    		console.log(data.name);
	    	}

	    }); 
	    },
	   	
		});      
	    },
		});
    });
    $("#list-of-subject-3").change(function() {
        	$.ajax({
	    type: "GET",
		url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
	    success: function(data,status) {
	    	var aaa2=$("#list-of-subject-3 option:selected").val();
	    //    var b=$("#list-of-subject-3 option:selected").text();
	        $.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
	    //	console.log(a,b);
	    	console.log(data);
	    	$.each(data,function (index, data) { 
	    		if((data.id)==aaa2){
	    	//	$("#list-of-Faculty-3 option:selected").text(data.name);
	    		$("#list-of-Faculty-3").empty();
	    		$("#list-of-Faculty-3").append(`<label id="faculty`+data.id+`" data-id="`+data.id+`">`+data.name+`</label>`);
	    		console.log(data.name);
	    	}

	    }); 
	    },
	   	
		});     
	    },
		});
    });
    $("#list-of-subject-4").change(function() {
        	$.ajax({
	    type: "GET",
		url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
	    success: function(data,status) {
	    	var aaa3=$("#list-of-subject-4 option:selected").val();
	    //    var b=$("#list-of-subject-4 option:selected").text();
	        $.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
	    //	console.log(a,b);
	    	console.log(data);
	    	$.each(data,function (index, data) { 
	    		if((data.id)==aaa3){
	    	//	$("#list-of-Faculty-4 option:selected").text(data.name);
	    		$("#list-of-Faculty-4").empty();
	    		$("#list-of-Faculty-4").append(`<label id="faculty`+data.id+`" data-id="`+data.id+`">`+data.name+`</label>`);
	    		console.log(data.name);
	    	}

	    }); 
	    },	
		});
	    },
		});
    });
    $("#list-of-subject-5").change(function() {
        	$.ajax({
	    type: "GET",
		url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
	    success: function(data,status) {
	    	var aaa4=$("#list-of-subject-5 option:selected").val();
	    //    var b=$("#list-of-subject-5 option:selected").text();
	        $.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
	    //	console.log(a,b);
	    	console.log(data);
	    	$.each(data,function (index, data) { 
	    		if((data.id)==aaa4){
	    	//	$("#list-of-Faculty-5 option:selected").text(data.name);
	    		$("#list-of-Faculty-5").empty();
	    		$("#list-of-Faculty-5").append(`<label id="faculty`+data.id+`" data-id="`+data.id+`">`+data.name+`</label>`);
	    		console.log(data.name);
	    	}

	    }); 
	    },
	   	
		});       
	    },
		});
    });
    $("#list-of-subject-6").change(function() {
        	$.ajax({
	    type: "GET",
		url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
	    success: function(data,status) {
	    	var aaa5=$("#list-of-subject-6 option:selected").val();
	    //    var b=$("#list-of-subject-6 option:selected").text();
	        $.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
	    //	console.log(a,b);
	    	console.log(data);
	    	$.each(data,function (index, data) { 
	    		if((data.id)==aaa5){
	    	//	$("#list-of-Faculty-6 option:selected").text(data.name);
	    		$("#list-of-Faculty-6").empty();
	    		$("#list-of-Faculty-6").append(`<label id="faculty`+data.id+`" data-id="`+data.id+`">`+data.name+`</label>`);
	    		console.log(data.name);
	    	}

	    }); 
	    },	   	
		}); 
	    },
		});
    });
    
});
//______________________________________________________________________________ALL SEMESTER DETAIL ARE FACHED IN DROPDOWN
$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
			if('#class:empty'){
				$("#classroom").append(`<label id="`+data[0].id+`" data-id="`+data[0].id+`">`+data[0].class_location+`</label>`); 
				    }

	    	$("#sem").empty();
	    	for (var i = 0; i < data.length; i++) {
	    		$("#sem").append(`<option id="semester`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].semester_number+" - "+data[i].division+`</option>`);
	    	}
	    	$("#sem").change(function() { 
	    		var class_loc=$("#sem option:selected").text()
	    		var namesArray = class_loc.split(" - ");
	    		var item, items = [];
	    		for (var i = 0; i < namesArray.length; i++) {
				    item = {};
				    item.sem = namesArray[i];
				    item.div = namesArray[i+1];
				    items.push(item);
				    i = i + 1;
				}


			//	console.log("semester - "+item.sem); _______________________________________validate items storage value
			//	console.log("division - "+item.div);

			//	console.log(data);
			//	console.log(items)
					$.each(data,function (index, data) { 
		    			if(data.semester_number==item.sem && data.division==item.div){
		    			//	console.log(data.class_location);_____________________________________validate the class
		    				$("#classroom").empty()
		    				$("#classroom").append(`<label id="`+data.id+`" data-id="`+data.id+`">`+data.class_location+`</label>`);
		    			//	console.log($("#classroom").text());
		    			}
		    			
		    		});

		    		
	    		});
	    	
	    },
	    error: function(data,status) {
	    	console.log(data);
	    	console.log(status);
	    }
		});
});


//___________________________________________________________________________________ALL FACULTY ARE FATCHED FOR THE LAB SESSION
$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
	/*    
	    	$("#list-of-Faculty-1").empty();
	    	for (var i = 0; i < data.length; i++) {
	    		$("#list-of-Faculty-1").append(`<option id="faculty`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].name+`</option>`);
	    	}
	    	$("#list-of-Faculty-2").empty();
	    	for (var i = 0; i < data.length; i++) {
	    		$("#list-of-Faculty-2").append(`<option id="faculty`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].name+`</option>`);
	    	}
	    	$("#list-of-Faculty-3").empty();
	    	for (var i = 0; i < data.length; i++) {
	    		$("#list-of-Faculty-3").append(`<option id="faculty`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].name+`</option>`);
	    	}
	    	$("#list-of-Faculty-4").empty();
	    	for (var i = 0; i < data.length; i++) {
	    		$("#list-of-Faculty-4").append(`<option id="faculty`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].name+`</option>`);
	    	}
	    	$("#list-of-Faculty-5").empty();
	    	for (var i = 0; i < data.length; i++) {
	    		$("#list-of-Faculty-5").append(`<option id="faculty`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].name+`</option>`);
	    	}
	    	$("#list-of-Faculty-6").empty();
	    	for (var i = 0; i < data.length; i++) {
	    		$("#list-of-Faculty-6").append(`<option id="faculty`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].name+`</option>`);
	    	}
		*/
			if('#list-of-Faculty-1:empty'){
				$("#list-of-Faculty-1 ").append(`<label id="faculty`+data[0].id+`" data-id="`+data[0].id+`">`+data[0].name+`</label>`); 
				    }
			if('#list-of-Faculty-2:empty'){
				$("#list-of-Faculty-2").append(`<label id="faculty`+data[0].id+`" data-id="`+data[0].id+`">`+data[0].name+`</label>`); 
				    }
			if('#list-of-Faculty-3:empty'){
				$("#list-of-Faculty-3").append(`<label id="faculty`+data[0].id+`" data-id="`+data[0].id+`">`+data[0].name+`</label>`); 
				    }	    
			if('#list-of-Faculty-4:empty'){
				$("#list-of-Faculty-4").append(`<label id="faculty`+data[0].id+`" data-id="`+data[0].id+`">`+data[0].name+`</label>`); 
			 		}
			 if('#list-of-Faculty-5:empty'){
				$("#list-of-Faculty-5").append(`<label id="faculty`+data[0].id+`" data-id="`+data[0].id+`">`+data[0].name+`</label>`); 
			 		}
			 if('#list-of-Faculty-6:empty'){
				$("#list-of-Faculty-6").append(`<label id="faculty`+data[0].id+`" data-id="`+data[0].id+`">`+data[0].name+`</label>`); 
			 		}
				    	    






//			if('#list-of-Faculty-2:empty'){
//				$("#list-of-Faculty-2 ").append(`<label id="faculty`+data[0].id+`" data-id="`+data[0].id+`">`+data[0].name+`</label>`); 
//				    }
		
	    	$("#list-of-Faculty-7").empty();
	    	for (var i = 0; i < data.length; i++) {
	    		$("#list-of-Faculty-7").append(`<option id="faculty`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].name+`</option>`);
	    	}
	    	$("#list-of-Faculty-8").empty();
	    	for (var i = 0; i < data.length; i++) {
	    		$("#list-of-Faculty-8").append(`<option id="faculty`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].name+`</option>`);
	    	}
	    },
	    error: function(data,status) {
	    	console.log(data);
	    	console.log(status);
	    }
		});
});




//__________________________________________________________SubmitClick_________________________________________________________________
$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allLecture/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
	    	$("#submitForm").click(function(){
	    		day="Monday";
	    		day=$("#days option:selected").text();
	    		console.log(day);

	    		if ($("#lab1").prop('checked')==true){ 
			        console.log("lab1");
			    }
			    if ($("#lab2").prop('checked')==true){ 
			        console.log("lab2");
			    }
			    if ($("#lab3").prop('checked')==true){ 
			        console.log("lab3");
			    }if ($("#lab4").prop('checked')==true){ 
			        console.log("lab4");
			    }
			    if ($("#lab5").prop('checked')==true){ 
			        console.log("lab5");
			    }
			    if ($("#lab6").prop('checked')==true){ 
			        console.log("lab6");
			    }
			    $.each(data,function (index, data) { 
			    		if(data.lecture_no==1)
			    		{
			    			lec_id1=data.id;
			    			console.log("lec 1 id - "+lec_id1);
			    		}
			    		if(data.lecture_no==2)
			    		{
			    			lec_id2=data.id;
			    			console.log("lec 2 id - "+lec_id2);
			    		}
			    		if(data.lecture_no==3)
			    		{
			    			lec_id3=data.id;
			    			console.log("lec 3 id - "+lec_id3);
			    		}
			    		if(data.lecture_no==4)
			    		{
			    			lec_id4=data.id;
			    			console.log("lec 4 id- "+lec_id4);
			    		}
			    		if(data.lecture_no==5)
			    		{
			    			lec_id5=data.id;
			    			console.log("lec 5 id - "+lec_id5);
			    		}
			    		if(data.lecture_no==6)
			    		{
			    			lec_id6=data.id;
			    			console.log("lec 6 id - "+lec_id6);
			    		}
			    	});


	    		//console.log($("#list-of-subject-1 option:selected").text())
	    		var sub_name1=$("#list-of-subject-1 option:selected").text();
	    		var sub_name2=$("#list-of-subject-2 option:selected").text();
	    		var sub_name3=$("#list-of-subject-3 option:selected").text();
	    		var sub_name4=$("#list-of-subject-4 option:selected").text();
	    		var sub_name5=$("#list-of-subject-5 option:selected").text();
	    		var sub_name6=$("#list-of-subject-6 option:selected").text();


//__________________________________________________________GetSubjectID_________________________________________________________________
	    		 $.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
			contentType: "application/json; charset=utf-8",
	    	dataType: "json",
	    success: function(data,status) {
	    	console.log(data);
	    	$.each(data,function (index, data) { 
	    		if((data.subject_name)==sub_name1){///_________________________________GET SUBJECT ID BY SUBJECT NAME
	    			var sub_id1=data.id
	    			sessionStorage.setItem("fac_id1", data.faculty);
	    			console.log("subject_lec_1_id - "+sub_id1);
	    			var sem_no=$("#sem option:selected").text();
	    			//___________________________________________________________GET THE SEMESTER ID BASSED ON SELECTED SEMESTER 
	    			var namesArray = sem_no.split(" - ");
		    		var item, items = [];
		    		for (var i = 0; i < namesArray.length; i++) {
					    item = {};
					    item.sem1 = namesArray[i];
					    item.div1 = namesArray[i+1];
					    items.push(item);
					    i = i + 1;
					}
					$.ajax({
					type: "GET",
					url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
					contentType: "application/json; charset=utf-8",
			    	dataType: "json",
					success:function(data,status){
							$.each(data,function (index, data) { 
			    			if(data.semester_number==item.sem1 && data.division==item.div1){
			    				semester_id=data.id;
			    				console.log("semester  id - "+semester_id);//_____________________________________semester id


								if($("#lab1").prop('checked')==true){ 
					 			        var labFacultys=$("#list-of-Faculty-7 option:selected").text() +" , "+ $("#list-of-Faculty-8 option:selected").text();
					 			    }
					 			else{
					 				var labFacultys="";
					 			}



			    				 //______________________________________________________________________________POST DATA
												$.ajax({
										    type: "POST",
										    url: "http://127.0.0.1:8000/sheduler/api/allTimetable/",
										    data: JSON.stringify({"day": day,"lecture": lec_id1,"semester": semester_id,"lab_faculty":labFacultys,"lab_class":$("#labClass option:selected").val(),"is_lab":$("#lab1").prop('checked'),"subject": sub_id1}),
										    contentType: "application/json; charset=utf-8",
										    dataType: "json",
										    success: function(data,status) {
										        console.log(data);
										        $("#successMessage").text("Your data successfully added");
										        alert("Your data successfully added");
										        
										    },
										    error: function(data,status){
										        console.log(status);
										
										    }
											});
								

			    			}
			    		});
					},
					error: function(data,status){
						console.log(data);
				    	console.log(status);
					},
				});
					console.log(item.sem1,item.div1);

	    }
	    

	    }); 
	    $.each(data,function (index, data) { 
	    		if((data.subject_name)==sub_name2){///_________________________________GET SUBJECT ID BY SUBJECT NAME
	    			var sub_id2=data.id
	    			sessionStorage.setItem("fac_id2", data.faculty);
	    			console.log("subject_lec_1_id - "+sub_id2);
	    			var sem_no=$("#sem option:selected").text();
	    			//___________________________________________________________GET THE SEMESTER ID BASSED ON SELECTED SEMESTER 
	    			var namesArray = sem_no.split(" - ");
		    		var item, items = [];
		    		for (var i = 0; i < namesArray.length; i++) {
					    item = {};
					    item.sem1 = namesArray[i];
					    item.div1 = namesArray[i+1];
					    items.push(item);
					    i = i + 1;
					}
					$.ajax({
					type: "GET",
					url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
					contentType: "application/json; charset=utf-8",
			    	dataType: "json",
					success:function(data,status){
							$.each(data,function (index, data) { 
			    			if(data.semester_number==item.sem1 && data.division==item.div1){
			    				semester_id=data.id;
			    				console.log("semester  id - "+semester_id);//_____________________________________semester id


								if($("#lab2").prop('checked')==true){ 
					 			        var labFacultys=$("#list-of-Faculty-7 option:selected").text() +" , "+ $("#list-of-Faculty-8 option:selected").text();
					 			    }
					 			else{
					 				var labFacultys="";
					 			}



			    				 //______________________________________________________________________________POST DATA
												$.ajax({
										    type: "POST",
										    url: "http://127.0.0.1:8000/sheduler/api/allTimetable/",
										    data: JSON.stringify({"day": day,"lecture": lec_id2,"semester": semester_id,"lab_faculty":labFacultys,"lab_class":$("#labClass option:selected").val(),"is_lab":$("#lab2").prop('checked'),"subject": sub_id2}),
										    contentType: "application/json; charset=utf-8",
										    dataType: "json",
										    success: function(data,status) {
										        console.log(data);
										        $("#successMessage").text("Your data successfully added");
										    },
										    error: function(data,status){
										        console.log(status);
										    }
											});
												
											
			    			}
			    		});
					},
					error: function(data,status){
						console.log(data);
				    	console.log(status);
					},
				});
					console.log(item.sem1,item.div1);

	    }
	    

	    });
	    $.each(data,function (index, data) { 
	    		if((data.subject_name)==sub_name3){///_________________________________GET SUBJECT ID BY SUBJECT NAME
	    			var sub_id3=data.id
	    			sessionStorage.setItem("fac_id3", data.faculty);
	    			console.log("subject_lec_1_id - "+sub_id3);
	    			var sem_no=$("#sem option:selected").text();
	    			//___________________________________________________________GET THE SEMESTER ID BASSED ON SELECTED SEMESTER 
	    			var namesArray = sem_no.split(" - ");
		    		var item, items = [];
		    		for (var i = 0; i < namesArray.length; i++) {
					    item = {};
					    item.sem1 = namesArray[i];
					    item.div1 = namesArray[i+1];
					    items.push(item);
					    i = i + 1;
					}
					$.ajax({
					type: "GET",
					url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
					contentType: "application/json; charset=utf-8",
			    	dataType: "json",
					success:function(data,status){
							$.each(data,function (index, data) { 
			    			if(data.semester_number==item.sem1 && data.division==item.div1){
			    				semester_id=data.id;
			    				console.log("semester  id - "+semester_id);//_____________________________________semester id


								if($("#lab3").prop('checked')==true){ 
					 			        var labFacultys=$("#list-of-Faculty-7 option:selected").text() +" , "+ $("#list-of-Faculty-8 option:selected").text();
					 			    }
					 			else{
					 				var labFacultys="";
					 			}



			    				 //______________________________________________________________________________POST DATA
												$.ajax({
										    type: "POST",
										    url: "http://127.0.0.1:8000/sheduler/api/allTimetable/",
										    data: JSON.stringify({"day": day,"lecture": lec_id3,"semester": semester_id,"lab_faculty":labFacultys,"lab_class":$("#labClass option:selected").val(),"is_lab":$("#lab3").prop('checked'),"subject": sub_id3}),
										    contentType: "application/json; charset=utf-8",
										    dataType: "json",
										    success: function(data,status) {
										        console.log(data);
										        $("#successMessage").text("Your data successfully added");
										    },
										    error: function(data,status){
										        console.log(status);
										    }
											});
											
											
			    			}
			    		});
					},
					error: function(data,status){
						console.log(data);
				    	console.log(status);
					},
				});
					console.log(item.sem1,item.div1);

	    }
	    

	    });
	    $.each(data,function (index, data) { 
	    		if((data.subject_name)==sub_name4){///_________________________________GET SUBJECT ID BY SUBJECT NAME
	    			var sub_id4=data.id
	    			sessionStorage.setItem("fac_id4", data.faculty);
	    			console.log("subject_lec_1_id - "+sub_id4);
	    			var sem_no=$("#sem option:selected").text();
	    			//___________________________________________________________GET THE SEMESTER ID BASSED ON SELECTED SEMESTER 
	    			var namesArray = sem_no.split(" - ");
		    		var item, items = [];
		    		for (var i = 0; i < namesArray.length; i++) {
					    item = {};
					    item.sem1 = namesArray[i];
					    item.div1 = namesArray[i+1];
					    items.push(item);
					    i = i + 1;
					}
					$.ajax({
					type: "GET",
					url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
					contentType: "application/json; charset=utf-8",
			    	dataType: "json",
					success:function(data,status){
							$.each(data,function (index, data) { 
			    			if(data.semester_number==item.sem1 && data.division==item.div1){
			    				semester_id=data.id;
			    				console.log("semester  id - "+semester_id);//_____________________________________semester id


								if($("#lab4").prop('checked')==true){ 
					 			        var labFacultys=$("#list-of-Faculty-7 option:selected").text() +" , "+ $("#list-of-Faculty-8 option:selected").text();
					 			    }
					 			else{
					 				var labFacultys="";
					 			}



			    				 //______________________________________________________________________________POST DATA
												$.ajax({
										    type: "POST",
										    url: "http://127.0.0.1:8000/sheduler/api/allTimetable/",
										    data: JSON.stringify({"day": day,"lecture": lec_id4,"semester": semester_id,"lab_faculty":labFacultys,"lab_class":$("#labClass option:selected").val(),"is_lab":$("#lab4").prop('checked'),"subject": sub_id4}),
										    contentType: "application/json; charset=utf-8",
										    dataType: "json",
										    success: function(data,status) {
										        console.log(data);
										        $("#successMessage").text("Your data successfully added");
										    },
										    error: function(data,status){
										        console.log(status);
										    }
											});
											
											
			    			}
			    		});
					},
					error: function(data,status){
						console.log(data);
				    	console.log(status);
					},
				});
					console.log(item.sem1,item.div1);

	    }
	    

	    });

	    $.each(data,function (index, data) { 
	    		if((data.subject_name)==sub_name5){///_________________________________GET SUBJECT ID BY SUBJECT NAME
	    			var sub_id5=data.id
	    			sessionStorage.setItem("fac_id5", data.faculty);
	    			console.log("subject_lec_1_id - "+sub_id5);
	    			var sem_no=$("#sem option:selected").text();
	    			//___________________________________________________________GET THE SEMESTER ID BASSED ON SELECTED SEMESTER 
	    			var namesArray = sem_no.split(" - ");
		    		var item, items = [];
		    		for (var i = 0; i < namesArray.length; i++) {
					    item = {};
					    item.sem1 = namesArray[i];
					    item.div1 = namesArray[i+1];
					    items.push(item);
					    i = i + 1;
					}
					if(day != "Saturday")
	    			{
						$.ajax({
						type: "GET",
						url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
						contentType: "application/json; charset=utf-8",
				    	dataType: "json",
						success:function(data,status){
								$.each(data,function (index, data) { 
				    			if(data.semester_number==item.sem1 && data.division==item.div1){
				    				semester_id=data.id;
				    				console.log("semester  id - "+semester_id);//_____________________________________semester id


								if($("#lab5").prop('checked')==true){ 
					 			        var labFacultys=$("#list-of-Faculty-7 option:selected").text() +" , "+ $("#list-of-Faculty-8 option:selected").text();
					 			    }
					 			else{
					 				var labFacultys="";
					 			}



				    				 //______________________________________________________________________________POST DATA
													$.ajax({
											    type: "POST",
											    url: "http://127.0.0.1:8000/sheduler/api/allTimetable/",
											    data: JSON.stringify({"day": day,"lecture": lec_id5,"semester": semester_id,"lab_faculty":labFacultys,"lab_class":$("#labClass option:selected").val(),"is_lab":$("#lab5").prop('checked'),"subject": sub_id5}),
											    contentType: "application/json; charset=utf-8",
											    dataType: "json",
											    success: function(data,status) {
											        console.log(data);
											        $("#successMessage").text("Your data successfully added");
											    },
											    error: function(data,status){
											        console.log(status);
											    }
												});
												
												
				    			}
				    		});
						},
						error: function(data,status){
							console.log(data);
					    	console.log(status);
						},
						});
					}
					console.log(item.sem1,item.div1);

	    }
	    

	    });
	    $.each(data,function (index, data) { 
	    		if((data.subject_name)==sub_name6){///_________________________________GET SUBJECT ID BY SUBJECT NAME
	    			var sub_id6=data.id
	    			sessionStorage.setItem("fac_id6", data.faculty);
	    			console.log("subject_lec_1_id - "+sub_id6);
	    			var sem_no=$("#sem option:selected").text();
	    			//___________________________________________________________GET THE SEMESTER ID BASSED ON SELECTED SEMESTER 
	    			var namesArray = sem_no.split(" - ");
		    		var item, items = [];
		    		for (var i = 0; i < namesArray.length; i++) {
					    item = {};
					    item.sem1 = namesArray[i];
					    item.div1 = namesArray[i+1];
					    items.push(item);
					    i = i + 1;
					}
					if(day != "Saturday")
	   				{
						$.ajax({
						type: "GET",
						url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
						contentType: "application/json; charset=utf-8",
				    	dataType: "json",
						success:function(data,status){
								$.each(data,function (index, data) { 
				    			if(data.semester_number==item.sem1 && data.division==item.div1){
				    				semester_id=data.id;
				    				console.log("semester  id - "+semester_id);//_____________________________________semester id


								if($("#lab6").prop('checked')==true){ 
					 			        var labFacultys=$("#list-of-Faculty-7 option:selected").text() +" , "+ $("#list-of-Faculty-8 option:selected").text();
					 			    }
					 			else{
					 				var labFacultys="";
					 			}



				    				 //______________________________________________________________________________POST DATA
													$.ajax({
											    type: "POST",
											    url: "http://127.0.0.1:8000/sheduler/api/allTimetable/",
											    data: JSON.stringify({"day": day,"lecture": lec_id6,"semester": semester_id,"lab_faculty":labFacultys,"lab_class":$("#labClass option:selected").val(),"is_lab":$("#lab6").prop('checked'),"subject": sub_id6}),
											    contentType: "application/json; charset=utf-8",
											    dataType: "json",
											    success: function(data,status) {
											        console.log(data);
											        $("#successMessage").text("Your data successfully added");
											    },
											    error: function(data,status){
											        console.log(status);
											    }
												});
												
												
				    			}
				    		});
						},
						error: function(data,status){
							console.log(data);
					    	console.log(status);
						},
						});
					}
					console.log(item.sem1,item.div1);
									$(document).ready(function() {
	    								$.ajax({
										type: "GET",
										url: "http://127.0.0.1:8000/sheduler/api/allFaculty",
										contentType: "application/json; charset=utf-8",
								    	dataType: "json",
										success:function(data,status){
											$.each(data,function (index, data) { 
												//	console.log(data.id);
													console.log("------"+sessionStorage.getItem("fac_id1"));
													if(data.id==sessionStorage.getItem("fac_id1"))
													{
														console.log("LECTURE 1 "+data.name);
														sessionStorage.setItem("fac_name1", data.name);
														d1=data.lecture_limit+1;
														console.log(d1)
														$.ajax({
													    type: "POST",
													    url: "http://127.0.0.1:8000/sheduler/faculty-limit/"+sessionStorage.getItem("fac_id1"),
													    data: JSON.stringify({ "lecture_limit": d1}),
													    contentType: "application/json; charset=utf-8",
													    dataType: "json",
													    success: function(data,status) {
													    //	console.log(sessionStorage.getItem("fac_id1"))
													        console.log(data);
													        $("#successMessage").text("Your data successfully added");
													    },
													    error: function(data,status){
													        console.log(status);
													        alert("plesee change lecture 1 \nMore than 30 lectures not allow to "+sessionStorage.getItem("fac_name1"))
													    }
														});
													}
											});
										},
										error: function(data,status){
											console.log(data);
									    	console.log(status);
										},
										});
	    							});
	    							$(document).ready(function() {
	    								$.ajax({
										type: "GET",
										url: "http://127.0.0.1:8000/sheduler/api/allFaculty",
										contentType: "application/json; charset=utf-8",
								    	dataType: "json",
										success:function(data,status){
											$.each(data,function (index, data) { 
												//	console.log(data.id);
												//	console.log("------"+sessionStorage.getItem("fac_id2"));
													if(data.id==sessionStorage.getItem("fac_id2"))
													{
														console.log("LECTURE 2 "+data.name);
														sessionStorage.setItem("fac_name2", data.name);
														d2=data.lecture_limit+1;
														console.log(d2)
														$.ajax({
													    type: "POST",
													    url: "http://127.0.0.1:8000/sheduler/faculty-limit/"+sessionStorage.getItem("fac_id2"),
													    data: JSON.stringify({ "lecture_limit": d2}),
													    contentType: "application/json; charset=utf-8",
													    dataType: "json",
													    success: function(data,status) {
													    //	console.log(sessionStorage.getItem("fac_id2"))
													        console.log(data);
													        $("#successMessage").text("Your data successfully added");
													    },
													    error: function(data,status){
													        console.log(status);
													        alert("plesee change lecture 2 \nMore than 18 lectures not allow to "+sessionStorage.getItem("fac_name2"))
													    }
														});
													}
											});
										},
										error: function(data,status){
											console.log(data);
									    	console.log(status);
										},
										});
	    							});
	    							$(document).ready(function() {
	    								$.ajax({
										type: "GET",
										url: "http://127.0.0.1:8000/sheduler/api/allFaculty",
										contentType: "application/json; charset=utf-8",
								    	dataType: "json",
										success:function(data,status){
											$.each(data,function (index, data) { 
												//	console.log(data.id);
												//	console.log("------"+sessionStorage.getItem("fac_id3"));
													if(data.id==sessionStorage.getItem("fac_id3"))
													{
														console.log("LECTURE 3 "+data.name);
														sessionStorage.setItem("fac_name3", data.name);
														d3=data.lecture_limit+1;
														console.log(d3)
														$.ajax({
													    type: "POST",
													    url: "http://127.0.0.1:8000/sheduler/faculty-limit/"+sessionStorage.getItem("fac_id3"),
													    data: JSON.stringify({ "lecture_limit": d3}),
													    contentType: "application/json; charset=utf-8",
													    dataType: "json",
													    success: function(data,status) {
													    //	console.log(sessionStorage.getItem("fac_id3"))
													        console.log(data);
													        $("#successMessage").text("Your data successfully added");
													    },
													    error: function(data,status){
													        console.log(status);
													        alert("plesee change lecture 3 \nMore than 18 lectures not allow to "+sessionStorage.getItem("fac_name3"))
													    }
														});
													}
											});
										},
										error: function(data,status){
											console.log(data);
									    	console.log(status);
										},
										});
	    							});
	    							$(document).ready(function() {
	    								$.ajax({
										type: "GET",
										url: "http://127.0.0.1:8000/sheduler/api/allFaculty",
										contentType: "application/json; charset=utf-8",
								    	dataType: "json",
										success:function(data,status){
											$.each(data,function (index, data) { 
												//	console.log(data.id);
												//	console.log("------"+sessionStorage.getItem("fac_id4"));
													if(data.id==sessionStorage.getItem("fac_id4"))
													{
														console.log("LECTURE 4 "+data.name);
														sessionStorage.setItem("fac_name4", data.name);
														d4=data.lecture_limit+1;
														console.log(d4)
														$.ajax({
													    type: "POST",
													    url: "http://127.0.0.1:8000/sheduler/faculty-limit/"+sessionStorage.getItem("fac_id4"),
													    data: JSON.stringify({ "lecture_limit": d4}),
													    contentType: "application/json; charset=utf-8",
													    dataType: "json",
													    success: function(data,status) {
													    //	console.log(sessionStorage.getItem("fac_id4"))
													        console.log(data);
													        $("#successMessage").text("Your data successfully added");
													    },
													    error: function(data,status){
													        console.log(status);
													        alert("plesee change lecture 4 \nMore than 18 lectures not allow to "+sessionStorage.getItem("fac_name4"))
													    }
														});
													}
											});
										},
										error: function(data,status){
											console.log(data);
									    	console.log(status);
										},
										});
	    							});
	    							$(document).ready(function() {
	    								$.ajax({
										type: "GET",
										url: "http://127.0.0.1:8000/sheduler/api/allFaculty",
										contentType: "application/json; charset=utf-8",
								    	dataType: "json",
										success:function(data,status){
											$.each(data,function (index, data) { 
												//	console.log(data.id);
												//	console.log("------"+sessionStorage.getItem("fac_id5"));
													if(data.id==sessionStorage.getItem("fac_id5"))
													{
														var d5;
														console.log("LECTURE 5 "+data.name);
														sessionStorage.setItem("fac_name5", data.name);
														d5=data.lecture_limit+1;
														console.log(d5)
														$.ajax({
													    type: "POST",
													    url: "http://127.0.0.1:8000/sheduler/faculty-limit/"+sessionStorage.getItem("fac_id5"),
													    data: JSON.stringify({ "lecture_limit": d5}),
													    contentType: "application/json; charset=utf-8",
													    dataType: "json",
													    success: function(data,status) {
													    //	console.log(sessionStorage.getItem("fac_id5"))
													        console.log(data);
													        $("#successMessage").text("Your data successfully added");
													    },
													    error: function(data,status){
													        console.log(status);
													        alert("plesee change lecture 5 \nMore than 18 lectures not allow to "+sessionStorage.getItem("fac_name5"))
													    }
														});
													}
											});
										},
										error: function(data,status){
											console.log(data);
									    	console.log(status);
										},
										});
	    							});
	    							$(document).ready(function() {
	    								$.ajax({
										type: "GET",
										url: "http://127.0.0.1:8000/sheduler/api/allFaculty",
										contentType: "application/json; charset=utf-8",
								    	dataType: "json",
										success:function(data,status){
											$.each(data,function (index, data) { 
												//	console.log(data.id);
												//	console.log("------"+sessionStorage.getItem("fac_id6"));
													if(data.id==sessionStorage.getItem("fac_id6"))
													{
														console.log("LECTURE 6 "+data.name);
														sessionStorage.setItem("fac_name6", data.name);
														d6=data.lecture_limit+1;
														console.log(d6)
														$.ajax({
													    type: "POST",
													    url: "http://127.0.0.1:8000/sheduler/faculty-limit/"+sessionStorage.getItem("fac_id6"),
													    data: JSON.stringify({ "lecture_limit": d6}),
													    contentType: "application/json; charset=utf-8",
													    dataType: "json",
													    success: function(data,status) {
													    //	console.log(sessionStorage.getItem("fac_id6"))
													        console.log(data);
													        $("#successMessage").text("Your data successfully added");
													    },
													    error: function(data,status){
													        console.log(status);
													        alert("plesee change lecture 6 \nMore than 18 lectures not allow to "+sessionStorage.getItem("fac_name6"))
													    }
														});
													}
											});
										},
										error: function(data,status){
											console.log(data);
									    	console.log(status);
										},
										});
	    							});
	    }
	   

	    });
	    			
	    								

	    //______________________________________________________________________________________________________________

	   },	   	
		});		    		
 		
	    	});


	    },
	    error: function(data,status) {
	    	console.log(data);
	    	console.log(status);
	    },
		});
});

// 		 $.ajax({
// 			type: "GET",
// 			url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
// 			contentType: "application/json; charset=utf-8",
// 	    	dataType: "json",
// 	    success: function(data,status) {
// 			$("#list-of-Faculty-7").empty();
// 	    	for (var i = 0; i < data.length; i++) {
// 	    		$("#list-of-Faculty-7").append(`<option id="faculty`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].name+`</option>`);
// 	    	}
// 	    	$("#list-of-Faculty-8").empty();
// 	    	for (var i = 0; i < data.length; i++) {
// 	    		$("#list-of-Faculty-8").append(`<option id="faculty`+data[i].id+`" data-id="`+data[i].id+`">`+data[i].name+`</option>`);
// 	    	}
// 	    }
// 	});

// $("#submitForm").click(function(){ 
// 	//alert($("#labClass option:selected").val());
// 	var LabFacultys=$("#list-of-Faculty-7 option:selected").text() +" , "+ $("#list-of-Faculty-8 option:selected").text();
// 	alert(LabFacultys);
// });