var class_loc1=$("#sem option:selected").text()
	    	var clArray = class_loc1.split(" - ");
	    	var item1, items1 = [];
	    	for (var i = 0; i < clArray.length; i++) {
				    item1 = {};
				    item1.sem = clArray[i];
				    item1.div = clArray[i+1];
				    items1.push(item1);
				    i = i + 1;
				}
				console.log(item1.sem);
	    		console.log(item1.div)
	    		sessionStorage.setItem(item1.sem);
	    		sessionStorage.setItem(item1.div);