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
	    	//<a href="search.html"><i class="fa fa-plus"></i></a>
	    	html+= "<a href=\"addToLibraryOptions.html\">";
	    	html+="<i class=\"fa fa-plus\">"+"</i>";
	    	//html+="<img src=\"fonts/addbutton.png\">";
	    	html+="</a>";
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
	    	localStorage["subscriptionvalue"] = JSON.stringify(text);
	    	$('#sublink').text(subattr);
	    	localStorage["subattr"] = JSON.stringify(subattr);
	    	
	    });
	    
	    return true;
		
	  };
	}
	
	google.setOnLoadCallback(OnLoad);
	// onload get all the feed entries to set to menulist
	
	  
	  
	  
	
};

$(document).ready(search);