var search = function(){
	//$('#search-button-holder').click(function(){
	
	//google.load("feeds", "1");

	function OnLoad() {
	  // Query for president feeds on cnn.com
	 // var query = 'site:cnn.com president';
	  
		 $('#search-button-holder').colorbox({inline:true, width:"50%",height:"80%",fixed:true,href:"#inline_content",onComplete:function(){
			 var query = document.getElementById('search-text-input').value;  
			  google.feeds.findFeeds(query, findDone);
		        
		    }});
	  
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
	    	html+="<img src=\"fonts/addbutton.png\">";
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
	    
	    $('.rss-button').colorbox({inline:true, width:"50%",height:"80%",fixed:true,href:"#addrssoptions",onComplete:function(){
	    	
	    	var $sub =$(this).prev();
	    	var text=$sub.text();
	    	var subattr = $sub.attr("href");
	    	$('#subcription').text(text);
	    	
	    	$('#sublink').text(subattr);
	    	text='';
	    	subattr='';
	    	if(typeof(Storage) !== "undefined") {
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
	    			var folderquery = document.getElementById('add-folder-text').value; 
	    			 var folder_content = document.getElementById('folders');
	    			    var folderhtml = '';
	    			    var names =[];
	    			    var i;
	    			    
	    			    
	    		        
	    			if(typeof(Storage) !== "undefined") {
    		    	    // Code for localStorage.
    		    		    
	    				//initials the i counter to 0
    				    i= localStorage.getItem('i');
    				    if (parseInt(i)>= 0) {
    				    	//names[i]=folderquery;
    				    	names=JSON.parse(localStorage["names"]);
    				    	names.push(folderquery);
    		    			i= (parseInt(i)+1).toString();
    		    			localStorage.setItem('i', i);
						}
    				    else{
    				    	localStorage.setItem('i', '0');
    				    	names.push(folderquery);
    				    }
	    				    localStorage["names"] = JSON.stringify(names);
    		    			var storedNames = JSON.parse(localStorage["names"]);
    		    		
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
	    		}});    		
	    		
	    			    		
	    	}});
	    }});
	    
	    return true;
		
	  };
	}
	
	
	
	  //*[@id="itemlist"]/ul/li[1]/a .rss-button
	/*
	$('.rss-button').click(function(){
		var link=  $(this).prev().attr("href");
		var linkname= $(this).prev().text();
		
		//links where the links have to added(here it is menu)
		// var content = document.getElementById('menu');
		//colorbox will open samesize another pane where we can have the option to add the links to a new or existing folder
		$(this).colorbox({inline:true, width:"50%",height:"80%",fixed:true,href:"#addrssoptions"});
		 var content = document.getElementById('newfolder');
		 var html = '';
	        html+='<ul>';
	        html += '<li><a href="' + link + ' " id=\"folder\">' + "Add To New Folder" + '</a>'+'</li>';
	        html+='</ul>';
	});*/

	google.setOnLoadCallback(OnLoad);
///html/body/div[1]/ul	});  //*[@id="itemlist"]/ul/li[1]/a
	
	  
	
};

$(document).ready(search);