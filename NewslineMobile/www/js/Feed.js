var search = function(){
	//$('#search-button-holder').click(function(){
	
	//google.load("feeds", "1");

	function OnLoad() {
	  // Query for president feeds on cnn.com
	 // var query = 'site:cnn.com president';
	  /*
		 $('#search-button-holder').colorbox({inline:true, width:"100%",height:"100%",fixed:true,href:"#inline_content",onComplete:function(){
			 var query = document.getElementById('search-text-input').value;  
			  google.feeds.findFeeds(query, findDone);
		        
		    }});*/

		    $('#search-button-holder').click(function(){
            			 var query = document.getElementById('search-text-input').value;
            			  google.feeds.findFeeds(query, findDone);

            		    });
	  
	}

	
	
	function findDone(result) {
	  // Make sure we didn't get an error.
	  if (!result.error) {
		  /**/
	    // Get content div
	    var content = document.getElementById('itemlist');
	    var html = '';
        html+='<ul>';
	    // Loop through the results and print out the title of the feed and link to
	    // the url.
	    for (var i = 0; i < result.entries.length; i++) {
	      var entry = result.entries[i];
	      html += '<li><a href="' + entry.url + '">' + entry.title + '</a>';
	    	html+= "<div class=\"rss-button cboxElement\">";
	    	//<i class="fa fa-plus"></i>
	    	html+="<i class=\"fa fa-plus\">"+"</i>";
	    	//html+="<img src=\"fonts/addbutton.png\">";
	    	html+="</div>";
	    	html+="</li>";
	    	  /*<div class="add-button cboxElement">
						<img src="fonts/button_plus_blue.png">
					</div>
					
				html = "<div style=\"margin-bottom:8px;\" class=\"Feed\">";
                html += "<h3>" + title + "</h3>";
                html += "<em>" + pubDate + "</em>";
                html += "<p>" + description + "</p>";
                //html += "<a href=\"" + link + "\" target=\"_blank\">Read More</a>";
                html += "<a class='iframe cboxElement' href=\"" + link + "\">Read More</a>";
                html += "</div>";	*/
	    }
        html+='</ul>';
	    content.innerHTML = html;
	    
	    $('.rss-button').click(function(){
	    	
	    	var $sub =$(this).prev();
	    	var text=$sub.text();
	    	var subattr = $sub.attr("href");
	    	$('#subcription').text(text);
	    	
	    	$('#sublink').text(subattr);
	    	if(typeof(Storage) !== "undefined") {
	    		if (localStorage.getItem('names') === null) {
	    			var names =[];
	    			//set initial names value
	    			localStorage["names"] = JSON.stringify(names);
	    			
	    			
				}
	    		var querynames=JSON.parse(localStorage["names"]);
	    		if (querynames !== null) {
	    			var folder_content = document.getElementById('folders');
	    			var folderhtml = '';
	    			folderhtml+='<ul>';
	    			for (var i = 0; i < querynames.length; i++) {
		    			//var tempquery = localStorage.getItem("name"[i]);
		    			folderhtml += '<li><p>' + querynames[i] + '</p></li><br>';
		    		}
	    			folderhtml+='</ul>';
	    			folder_content.innerHTML = folderhtml;
				}
	    	}
	    	
	    	$('.newfolder').colorbox({inline:true, width:"50%",height:"70%",fixed:true,href:"#addfoldercontainer",onComplete:function(){
	    		
	    		
	    		$('.enterfoldername').colorbox({inline:true, width:"50%",height:"80%",fixed:true,href:"#addrssoptions",onComplete:function(){
	    			//converting the search parameter to uppercase and setting the foldername to variable
	    			var folderquery = document.getElementById('add-folder-text').value.toUpperCase(); 
	    			var rsslink = document.getElementById('sublink').innerText;
	    			 var folder_content = document.getElementById('folders');
	    			    var folderhtml = '';
	    			    var names =[];
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
						
	    		}});    		
	    		
	    			    		
	    	}});
	    });
	    
	    return true;
		
	  };
	}
	
	google.setOnLoadCallback(OnLoad);
	// onload get all the feed entries to set to menulist
	
	  
	  
	  
	
};

$(document).ready(search);