$(document).ready(function() {
		$.ajax({
		type: "GET",
		url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(data,status) {
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
				console.log("semester - "+item.sem);// _______________________________________validate items storage value
				console.log("division - "+item.div);
				$.each(data,function (index, data) { 
		    			if(data.semester_number==item.sem && data.division==item.div){
		    				console.log(data.class_location);//_____________________________________validate the class
		    				sessionStorage.setItem("semester_id",data.id);
		    			//	console.log($("#classroom").text());
		    				console.log( sessionStorage.getItem("semester_id") );
		    			}
		    			
		    		});
		});
	    },
	    	
		});


		$.ajax({
					type: "GET",
					url: "http://127.0.0.1:8000/sheduler/api/allLecture/",
					contentType: "application/json; charset=utf-8",
			    	dataType: "json",
			    success: function(data,status) {
			    		$.each(data,function (index, data) { 
			    		if(data.lecture_no==1)
			    		{
			    			lec_id1=data.id;
			    			console.log(lec_id1);
						}
			    		if(data.lecture_no==2)
			    		{
			    			lec_id2=data.id;
			    			console.log(lec_id2);
			    		}
			    		if(data.lecture_no==3)
			    		{
			    			lec_id3=data.id;
			    			console.log(lec_id3);
			    		}
			    		if(data.lecture_no==4)
			    		{
			    			lec_id4=data.id;
			    			console.log(lec_id4);
			    		}
			    		if(data.lecture_no==5)
			    		{
			    			lec_id5=data.id;
			    			console.log(lec_id5);
			    		}
			    		if(data.lecture_no==6)
			    		{
			    			lec_id6=data.id;
			    			console.log(lec_id6);
			    		}
			    	});
			    		$.ajax({
								type: "GET",
								url: "http://127.0.0.1:8000/sheduler/api/allTimetable/",
								contentType: "application/json; charset=utf-8",
						    	dataType: "json",
						    success: function(data,status) {
						    		console.log(lec_id1);
						    		$("#sem").change(function(){
						    			console.log(sessionStorage.getItem("semester_id"));
						    		});
						    		console.log(sessionStorage.getItem("semester_id"));
						    		for (var i = data.length - 1; i >= 0; i--) 
						    		{		
						    				$("#sem").change(function(){
						    			console.log(sessionStorage.getItem("semester_id"));
						    		});				
								    		if(data[i].day=="Monday" && data[i].lecture==lec_id1 && data[i].semester==9)
								    		{
								    			sem_id=data[i].semester;
								    			sub_id=data[i].subject;
								    			sessionStorage.setItem("sem_id", sem_id);
								    			
								    			if(data[i].is_lab==true){
								    				$("#Monday1").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id){
											    				class_loc1=data.class_location;
													    		console.log(class_loc1);
													    		$("#clLoc_m_1").text(class_loc1);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Monday" && data[i].lecture==lec_id2 && data[i].semester==9)
								    		{
								    			sem_id2=data[i].semester;
								    			sub_id2=data[i].subject;
								    			sessionStorage.setItem("sem_id", sem_id2);
								    			
								    			if(data[i].is_lab==true){
								    				$("#Monday2").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id2){
											    				class_loc2=data.class_location;
													    		console.log(class_loc2);
													    		$("#clLoc_m_21").text(class_loc2);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Monday" && data[i].lecture==lec_id3 && data[i].semester==9)
								    		{
								    			sem_id3=data[i].semester;
								    			sub_id3=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Monday3").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id3){
											    				class_loc3=data.class_location;
													    		console.log(class_loc3);
													    		$("#clLoc_m_31").text(class_loc3);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Monday" && data[i].lecture==lec_id4 && data[i].semester==9)
								    		{
								    			sem_id4=data[i].semester;
								    			sub_id4=data[i].subject;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Monday4").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id4){
											    				class_loc4=data.class_location;
													    		console.log(class_loc4);
													    		$("#clLoc_m_41").text(class_loc4);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Monday" && data[i].lecture==lec_id5 && data[i].semester==9)
								    		{
								    			sem_id5=data[i].semester;
								    			sub_id5=data[i].subject;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Monday5").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id5){
											    				class_loc5=data.class_location;
													    		console.log(class_loc5);
													    		$("#clLoc_m_51").text(class_loc5);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Monday" && data[i].lecture==lec_id6 && data[i].semester==9)
								    		{
								    			sem_id6=data[i].semester;
								    			sub_id6=data[i].subject;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Monday6").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id6){
											    				class_loc6=data.class_location;
													    		console.log(class_loc6);
													    		$("#clLoc_m_61").text(class_loc6);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Tuesday" && data[i].lecture==lec_id1 && data[i].semester==9)
								    		{
								    			sem_id12=data[i].semester;
								    			sub_id12=data[i].subject;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Tuesday1").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id12){
											    				class_loc12=data.class_location;
													    		console.log(class_loc12);
													    		$("#clLoc_m_12").text(class_loc12);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Tuesday" && data[i].lecture==lec_id2 && data[i].semester==9)
								    		{
								    			sem_id22=data[i].semester;
								    			sub_id22=data[i].subject;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Tuesday2").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id22){
											    				class_loc22=data.class_location;
													    		console.log(class_loc22);
													    		$("#clLoc_m_22").text(class_loc22);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Tuesday" && data[i].lecture==lec_id3 && data[i].semester==9)
								    		{
								    			sem_id32=data[i].semester;
								    			sub_id32=data[i].subject;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Tuesday3").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id32){
											    				class_loc32=data.class_location;
													    		console.log(class_loc32);
													    		$("#clLoc_m_32").text(class_loc32);
													    	

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Tuesday" && data[i].lecture==lec_id4 && data[i].semester==9)
								    		{
								    			sem_id42=data[i].semester;
								    			sub_id42=data[i].subject;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Tuesday4").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id42){
											    				class_loc42=data.class_location;
													    		console.log(class_loc42);
													    		$("#clLoc_m_42").text(class_loc42);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Tuesday" && data[i].lecture==lec_id5 && data[i].semester==9)
								    		{
								    			sem_id52=data[i].semester;
								    			sub_id52=data[i].subject;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Tuesday5").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id52){
											    				class_loc52=data.class_location;
													    		console.log(class_loc52);
													    		$("#clLoc_m_52").text(class_loc52);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Tuesday" && data[i].lecture==lec_id6 && data[i].semester==9)
								    		{
								    			sem_id62=data[i].semester;
								    			sub_id62=data[i].subject;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Tuesday6").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id62){
											    				class_loc62=data.class_location;
													    		console.log(class_loc62);
													    		$("#clLoc_m_62").text(class_loc62);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Wednesday" && data[i].lecture==lec_id1 && data[i].semester==9)
								    		{
								    			sem_id13=data[i].semester;
								    			sub_id13=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Wednesday1").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id13){
											    				class_loc13=data.class_location;
													    		console.log(class_loc13);
													    		$("#clLoc_m_13").text(class_loc13);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Wednesday" && data[i].lecture==lec_id2 && data[i].semester==9)
								    		{
								    			sem_id23=data[i].semester;
								    			sub_id23=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Wednesday2").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id23){
											    				class_loc23=data.class_location;
													    		console.log(class_loc23);
													    		$("#clLoc_m_23").text(class_loc23);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Wednesday" && data[i].lecture==lec_id3 && data[i].semester==9)
								    		{
								    			sem_id33=data[i].semester;
								    			sub_id33=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Wednesday3").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id33){
											    				class_loc33=data.class_location;
													    		console.log(class_loc33);
													    		$("#clLoc_m_33").text(class_loc33);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Wednesday" && data[i].lecture==lec_id4 && data[i].semester==9)
								    		{
								    			sem_id43=data[i].semester;
								    			sub_id43=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Wednesday4").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id43){
											    				class_loc43=data.class_location;
													    		console.log(class_loc43);
													    		$("#clLoc_m_43").text(class_loc43);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Wednesday" && data[i].lecture==lec_id5 && data[i].semester==9)
								    		{
								    			sem_id53=data[i].semester;
								    			sub_id53=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Wednesday5").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id53){
											    				class_loc53=data.class_location;
													    		console.log(class_loc53);
													    		$("#clLoc_m_53").text(class_loc53);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Wednesday" && data[i].lecture==lec_id6 && data[i].semester==9)
								    		{
								    			sem_id63=data[i].semester;
								    			sub_id63=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Wednesday6").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id63){
											    				class_loc63=data.class_location;
													    		console.log(class_loc63);
													    		$("#clLoc_m_63").text(class_loc63);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Thursday" && data[i].lecture==lec_id1 && data[i].semester==9)
								    		{
								    			sem_id14=data[i].semester;
								    			sub_id14=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Thursday1").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id14){
											    				class_loc14=data.class_location;
													    		console.log(class_loc14);
													    		$("#clLoc_m_14").text(class_loc14);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Thursday" && data[i].lecture==lec_id2 && data[i].semester==9)
								    		{
								    			sem_id24=data[i].semester;
								    			sub_id24=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Thursday2").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id24){
											    				class_loc24=data.class_location;
													    		console.log(class_loc24);
													    		$("#clLoc_m_24").text(class_loc24);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Thursday" && data[i].lecture==lec_id3 && data[i].semester==9)
								    		{
								    			sem_id34=data[i].semester;
								    			sub_id34=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Thursday3").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id34){
											    				class_loc34=data.class_location;
													    		console.log(class_loc34);
													    		$("#clLoc_m_34").text(class_loc34);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Thursday" && data[i].lecture==lec_id4 && data[i].semester==9)
								    		{
								    			sem_id44=data[i].semester;
								    			sub_id44=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Thursday4").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id44){
											    				class_loc44=data.class_location;
													    		console.log(class_loc44);
													    		$("#clLoc_m_44").text(class_loc44);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Thursday" && data[i].lecture==lec_id5 && data[i].semester==9)
								    		{
								    			sem_id54=data[i].semester;
								    			sub_id54=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Thursday5").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id54){
											    				class_loc54=data.class_location;
													    		console.log(class_loc54);
													    		$("#clLoc_m_54").text(class_loc54);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Thursday" && data[i].lecture==lec_id6 && data[i].semester==9)
								    		{
								    			sem_id64=data[i].semester;
								    			sub_id64=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Thursday6").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id64){
											    				class_loc64=data.class_location;
													    		console.log(class_loc64);
													    		$("#clLoc_m_64").text(class_loc64);

													    	}
													    }); 
											    },
											   	
												});
								    		}

								    		if(data[i].day=="Friday" && data[i].lecture==lec_id1 && data[i].semester==9)
								    		{
								    			sem_id15=data[i].semester;
								    			sub_id15=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Friday1").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id15){
											    				class_loc15=data.class_location;
													    		console.log(class_loc15);
													    		$("#clLoc_m_15").text(class_loc15);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Friday" && data[i].lecture==lec_id2 && data[i].semester==9)
								    		{
								    			sem_id25=data[i].semester;
								    			sub_id25=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Friday2").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id25){
											    				class_loc25=data.class_location;
													    		console.log(class_loc25);
													    		$("#clLoc_m_25").text(class_loc25);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Friday" && data[i].lecture==lec_id3 && data[i].semester==9)
								    		{
								    			sem_id35=data[i].semester;
								    			sub_id35=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Friday3").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id35){
											    				class_loc35=data.class_location;
													    		console.log(class_loc35);
													    		$("#clLoc_m_35").text(class_loc35);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Friday" && data[i].lecture==lec_id4 && data[i].semester==9)
								    		{
								    			sem_id45=data[i].semester;
								    			sub_id45=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Friday4").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id45){
											    				class_loc45=data.class_location;
													    		console.log(class_loc45);
													    		$("#clLoc_m_45").text(class_loc45);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Friday" && data[i].lecture==lec_id5 && data[i].semester==9)
								    		{
								    			sem_id55=data[i].semester;
								    			sub_id55=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Friday5").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id55){
											    				class_loc55=data.class_location;
													    		console.log(class_loc55);
													    		$("#clLoc_m_55").text(class_loc55);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Friday" && data[i].lecture==lec_id6 && data[i].semester==9)
								    		{
								    			sem_id65=data[i].semester;
								    			sub_id65=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Friday6").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id65){
											    				class_loc65=data.class_location;
													    		console.log(class_loc65);
													    		$("#clLoc_m_65").text(class_loc65);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Saturday" && data[i].lecture==lec_id1 && data[i].semester==9)
								    		{
								    			sem_id16=data[i].semester;
								    			sub_id16=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Saturday1").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id16){
											    				class_loc16=data.class_location;
													    		console.log(class_loc16);
													    		$("#clLoc_m_16").text(class_loc16);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Saturday" && data[i].lecture==lec_id2 && data[i].semester==9)
								    		{
								    			sem_id26=data[i].semester;
								    			sub_id26=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Saturday2").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id26){
											    				class_loc26=data.class_location;
													    		console.log(class_loc26);
													    		$("#clLoc_m_26").text(class_loc26);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Saturday" && data[i].lecture==lec_id3 && data[i].semester==9)
								    		{
								    			sem_id36=data[i].semester;
								    			sub_id36=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Saturday3").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id36){
											    				class_loc36=data.class_location;
													    		console.log(class_loc36);
													    		$("#clLoc_m_36").text(class_loc36);

													    	}
													    }); 
											    },
											   	
												});
								    		}
								    		if(data[i].day=="Saturday" && data[i].lecture==lec_id4 && data[i].semester==9)
								    		{
								    			sem_id46=data[i].semester;
								    			sub_id46=data[i].subject;;
								    			
								    			if(data[i].is_lab==true){
								    				$("#Saturday4").css({backgroundColor: '#afeeee'});
								    			}



								    			$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSemester/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
											    success: function(data,status) {
											    	$.each(data,function (index, data) { 
											    				if(data.id==sem_id46){
											    				class_loc46=data.class_location;
													    		console.log(class_loc46);
													    		$("#clLoc_m_46").text(class_loc46);

													    	}
													    }); 
											    },
											   	
												});
								    		}



								    } 
//________________________________________________________________________________________________________________________________________________________
								    	$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id){
												    			sub_name=data.subject_name;
												    			fac_id=data.faculty;
													    		console.log(sub_name);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id){
																    		console.log(data.name);
																    		$("#fac_m_1").empty()
																    		$("#fac_m_1").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_1").text(sub_name);
													    	}
												    	}); 

										    	},
										   	
												});
								    	$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id2){
												    			sub_name2=data.subject_name;
												    			fac_id2=data.faculty;
													    		console.log(sub_name2);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id2){
																    		console.log(data.name);
																    		$("#fac_m_21").empty()
																    		$("#fac_m_21").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_21").text(sub_name2);
													    	}
												    	}); 

										    	},
										   	
												});
								    	$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id3){
												    			sub_name3=data.subject_name;
												    			fac_id3=data.faculty;
													    		console.log(sub_name3);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id3){
																    		console.log(data.name);
																    		$("#fac_m_31").empty()
																    		$("#fac_m_31").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_31").text(sub_name3);
													    	}
												    	}); 

										    	},
										   	
												});
								    	$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id4){
												    			sub_name4=data.subject_name;
												    			fac_id4=data.faculty;
													    		console.log(sub_name4);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id4){
																    		console.log(data.name);
																    		$("#fac_m_41").empty()
																    		$("#fac_m_41").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_41").text(sub_name4);
													    	}
												    	}); 

										    	},
										   	
												});
								    	$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id5){
												    			sub_name5=data.subject_name;
												    			fac_id5=data.faculty;
													    		console.log(sub_name5);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id5){
																    		console.log(data.name);
																    		$("#fac_m_51").empty()
																    		$("#fac_m_51").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_51").text(sub_name5);
													    	}
												    	}); 

										    	},
										   	
												});
								    	$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id6){
												    			sub_name6=data.subject_name;
												    			fac_id6=data.faculty;
													    		console.log(sub_name6);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id6){
																    		console.log(data.name);
																    		$("#fac_m_61").empty()
																    		$("#fac_m_61").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_61").text(sub_name6);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id12){
												    			sub_name12=data.subject_name;
												    			fac_id12=data.faculty;
													    		console.log(sub_name5);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id12){
																    		console.log(data.name);
																    		$("#fac_m_12").empty()
																    		$("#fac_m_12").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_12").text(sub_name12);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id22){
												    			sub_name22=data.subject_name;
												    			fac_id22=data.faculty;
													    		console.log(sub_name22);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id22){
																    		console.log(data.name);
																    		$("#fac_m_22").empty()
																    		$("#fac_m_22").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_22").text(sub_name22);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id32){
												    			sub_name32=data.subject_name;
												    			fac_id32=data.faculty;
													    		console.log(sub_name32);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id32){
																    		console.log(data.name);
																    		$("#fac_m_32").empty()
																    		$("#fac_m_32").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_32").text(sub_name32);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id42){
												    			sub_name42=data.subject_name;
												    			fac_id42=data.faculty;
													    		console.log(sub_name42);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id42){
																    		console.log(data.name);
																    		$("#fac_m_42").empty()
																    		$("#fac_m_42").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_42").text(sub_name42);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id52){
												    			sub_name52=data.subject_name;
												    			fac_id52=data.faculty;
													    		console.log(sub_name52);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id52){
																    		console.log(data.name);
																    		$("#fac_m_52").empty()
																    		$("#fac_m_52").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_52").text(sub_name52);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id62){
												    			sub_name62=data.subject_name;
												    			fac_id62=data.faculty;
													    		console.log(sub_name62);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id62){
																    		console.log(data.name);
																    		$("#fac_m_62").empty()
																    		$("#fac_m_62").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_62").text(sub_name62);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id13){
												    			sub_name13=data.subject_name;
												    			fac_id13=data.faculty;
													    		console.log(sub_name13);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id13){
																    		console.log(data.name);
																    		$("#fac_m_13").empty()
																    		$("#fac_m_13").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_13").text(sub_name13);
													    	}
												    	}); 

										    	},
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id23){
												    			sub_name23=data.subject_name;
												    			fac_id23=data.faculty;
													    		console.log(sub_name23);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id23){
																    		console.log(data.name);
																    		$("#fac_m_23").empty()
																    		$("#fac_m_23").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_23").text(sub_name23);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id33){
												    			sub_name33=data.subject_name;
												    			fac_id33=data.faculty;
													    		console.log(sub_name33);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id33){
																    		console.log(data.name);
																    		$("#fac_m_33").empty()
																    		$("#fac_m_33").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_33").text(sub_name33);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id43){
												    			sub_name43=data.subject_name;
												    			fac_id43=data.faculty;
													    		console.log(sub_name43);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id43){
																    		console.log(data.name);
																    		$("#fac_m_43").empty()
																    		$("#fac_m_43").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_43").text(sub_name43);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id53){
												    			sub_name53=data.subject_name;
												    			fac_id53=data.faculty;
													    		console.log(sub_name53);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id53){
																    		console.log(data.name);
																    		$("#fac_m_53").empty()
																    		$("#fac_m_53").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_53").text(sub_name53);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id63){
												    			sub_name63=data.subject_name;
												    			fac_id63=data.faculty;
													    		console.log(sub_name63);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id63){
																    		console.log(data.name);
																    		$("#fac_m_63").empty()
																    		$("#fac_m_63").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_63").text(sub_name63);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id14){
												    			sub_name14=data.subject_name;
												    			fac_id14=data.faculty;
													    		console.log(sub_name14);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id14){
																    		console.log(data.name);
																    		$("#fac_m_14").empty()
																    		$("#fac_m_14").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_14").text(sub_name14);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id24){
												    			sub_name24=data.subject_name;
												    			fac_id24=data.faculty;
													    		console.log(sub_name24);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id24){
																    		console.log(data.name);
																    		$("#fac_m_24").empty()
																    		$("#fac_m_24").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_24").text(sub_name24);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id34){
												    			sub_name34=data.subject_name;
												    			fac_id34=data.faculty;
													    		console.log(sub_name34);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id34){
																    		console.log(data.name);
																    		$("#fac_m_34").empty()
																    		$("#fac_m_34").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_34").text(sub_name34);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id44){
												    			sub_name44=data.subject_name;
												    			fac_id44=data.faculty;
													    		console.log(sub_name44);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id44){
																    		console.log(data.name);
																    		$("#fac_m_44").empty()
																    		$("#fac_m_44").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_44").text(sub_name44);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id54){
												    			sub_name54=data.subject_name;
												    			fac_id54=data.faculty;
													    		console.log(sub_name54);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id54){
																    		console.log(data.name);
																    		$("#fac_m_54").empty()
																    		$("#fac_m_54").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_54").text(sub_name54);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id64){
												    			sub_name64=data.subject_name;
												    			fac_id64=data.faculty;
													    		console.log(sub_name64);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id64){
																    		console.log(data.name);
																    		$("#fac_m_64").empty()
																    		$("#fac_m_64").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_64").text(sub_name64);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id15){
												    			sub_name15=data.subject_name;
												    			fac_id15=data.faculty;
													    		console.log(sub_name15);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id15){
																    		console.log(data.name);
																    		$("#fac_m_15").empty()
																    		$("#fac_m_15").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_15").text(sub_name15);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id25){
												    			sub_name25=data.subject_name;
												    			fac_id25=data.faculty;
													    		console.log(sub_name25);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id25){
																    		console.log(data.name);
																    		$("#fac_m_25").empty()
																    		$("#fac_m_25").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_25").text(sub_name25);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id35){
												    			sub_name35=data.subject_name;
												    			fac_id35=data.faculty;
													    		console.log(sub_name35);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id35){
																    		console.log(data.name);
																    		$("#fac_m_35").empty()
																    		$("#fac_m_35").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_35").text(sub_name35);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id45){
												    			sub_name45=data.subject_name;
												    			fac_id45=data.faculty;
													    		console.log(sub_name45);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id45){
																    		console.log(data.name);
																    		$("#fac_m_45").empty()
																    		$("#fac_m_45").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_45").text(sub_name45);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id55){
												    			sub_name55=data.subject_name;
												    			fac_id55=data.faculty;
													    		console.log(sub_name55);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id55){
																    		console.log(data.name);
																    		$("#fac_m_55").empty()
																    		$("#fac_m_55").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_55").text(sub_name55);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id65){
												    			sub_name65=data.subject_name;
												    			fac_id65=data.faculty;
													    		console.log(sub_name65);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id65){
																    		console.log(data.name);
																    		$("#fac_m_65").empty()
																    		$("#fac_m_65").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_65").text(sub_name65);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id16){
												    			sub_name16=data.subject_name;
												    			fac_id16=data.faculty;
													    		console.log(sub_name16);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id16){
																    		console.log(data.name);
																    		$("#fac_m_16").empty()
																    		$("#fac_m_16").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_16").text(sub_name16);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id26){
												    			sub_name26=data.subject_name;
												    			fac_id26=data.faculty;
													    		console.log(sub_name26);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id26){
																    		console.log(data.name);
																    		$("#fac_m_26").empty()
																    		$("#fac_m_26").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_26").text(sub_name26);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id36){
												    			sub_name36=data.subject_name;
												    			fac_id36=data.faculty;
													    		console.log(sub_name36);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id36){
																    		console.log(data.name);
																    		$("#fac_m_36").empty()
																    		$("#fac_m_36").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_36").text(sub_name36);
													    	}
												    	}); 

										    	},
										   	
												});
								    		$.ajax({
												type: "GET",
												url: "http://127.0.0.1:8000/sheduler/api/allSubject/",
												contentType: "application/json; charset=utf-8",
										    	dataType: "json",
										    success: function(data,status) {
										    	$.each(data,function (index, data) { 
												    		if(data.id==sub_id46){
												    			sub_name46=data.subject_name;
												    			fac_id46=data.faculty;
													    		console.log(sub_name46);
													    		$.ajax({
																type: "GET",
																url: "http://127.0.0.1:8000/sheduler/api/allFaculty/",
																contentType: "application/json; charset=utf-8",
														    	dataType: "json",
														    success: function(data,status) {
														    	$.each(data,function (index, data) { 
														    				if(data.id==fac_id46){
																    		console.log(data.name);
																    		$("#fac_m_46").empty()
																    		$("#fac_m_46").append(data.name);
																    	}
																    		
																    	}); 

															    },
															   	
																});

													    		$("#sub_m_46").text(sub_name46);
													    	}
												    	}); 
										    	},	   	
												});
						    },
						});
			    	},
			    });
	});


//$("#Monday1").css({backgroundColor: '#dda0dd'});
//$("#Tuesday1").css({backgroundColor: '#dda0dd'});