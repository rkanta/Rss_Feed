var main = function(){
	
	$('.enterfoldername').click(function(){
			//converting the search parameter to uppercase and setting the foldername to variable
			var folderquery = document.getElementById('add-folder-text').value.toUpperCase(); 
			var text=JSON.parse(localStorage["subscriptionvalue"]);
			
			var rsslink = JSON.parse(localStorage["subattr"]);
			/*
			 var folder_content = document.getElementById('folders');
			    var folderhtml = '';
			    var names =[];
			    */
			    var rsslinkPool =[];
			    
			    var i ='';
			    
			    
		        
			if(typeof(Storage) !== "undefined") {
	    	    // Code for localStorage.
	    		    
				//initials the i counter to 0 [i is used as index to retrieve names from array]
			    i= localStorage.getItem('i');
			    if (parseInt(i)>= 0) {
			    	//names[i]=folderquery;
			    	names=JSON.parse(localStorage["names"]);
			    	//dont add the search if it already exists   jquery.inArray returns -1 if the present query is not found in storage array
			    	if(jQuery.inArray(folderquery, names) == -1){
			    		names.push(folderquery);
			    		var tempquery = [];
				    	tempquery.push(rsslink);
				    	localStorage[folderquery]=JSON.stringify(tempquery);
			    		i= (parseInt(i)+1).toString();
			    		localStorage.setItem('i', i);
			    	}
			    	else{
			    	//don't add the same rss link to the names array if already exist to avoid duplication	
			    		
			    			//here tempquery is used to get the rsslinks of previously stored values for same folder name(folderquery)
			    			var tempquery = [];
			    			tempquery=JSON.parse(localStorage[folderquery]);
			    			if (jQuery.inArray(rsslink, tempquery) == -1) {
			    				tempquery.push(rsslink);
				    			localStorage[folderquery]=JSON.stringify(tempquery);
								/*
								 * var rssurl=localStorage.getItem(ref);
	rssurl=rssurl.replace(/(^\")|("$)/gi, "");*/
							}
			    			
				    	
			    	}
			    	
	    			
				}
			    else{
			    	localStorage.setItem('i', '0');
			    	var names = [];
			    	names.push(folderquery);
			    	var tempquery = [];
			    	tempquery.push(rsslink);
			    	localStorage[folderquery]=JSON.stringify(tempquery);
			    	//rsslinkPool.push(rsslink);
			    }
			    //set localstorage value for names
				    localStorage["names"] = JSON.stringify(names);
	    			var storedNames = JSON.parse(localStorage["names"]);
	    		//set localstorage value for name value with rss links
	    		//	localStorage[folderquery]=JSON.stringify(rsslink);
	    		
	    	} else {
	    	    // Sorry! No Web Storage support..
	    		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	    	}
			
			/*
			folderhtml+='<ul>';
			for (var i = 0; i < storedNames.length; i++) {
    			//var tempquery = localStorage.getItem("name"[i]);
    			folderhtml += '<li><p>' + storedNames[i] + '</p></li><br>';
    		}
			 
		        
		    	//folderhtml+= "<div class=\"rss-button cboxElement\">";
		    	//folderhtml+="<img src=\"fonts/addbutton.png\">";
		    	//folderhtml+="</div>";
		    	
		    	//folderhtml+='</ul>';
		    	folder_content.innerHTML = folderhtml;
		    	
		    	//$('#folders').append(folderhtml);
		    	
		    	var html = '';
				html += '<li><a href=\"#\">'+ folderquery+ '</a></li>';
				
				//dont add query to menulist if it is already exist in the menu list
				
				if(jQuery.inArray(folderquery, names) == -1){
					$("#menulist").append(html);
					}
					
					*/
				
		});    		
		
			    		
	
	
};


$(document).ready(main);