var main = function(){
	var x = '0';
	//icon-menu to animate the menu
    $('.icon-menu').click(function(){
    	
    if (x == '0') {
    	 $('.menu').animate({
    		    left:'0px'
    		    },200);
    		    
    		    $('body').animate({
    		    left:'285px'
    		    },200);
    		    x= '1';
    }
    		    else {
    	  $('.menu').animate({
    		    left:'-285px'
    		    },200);
    		    
    		    $('body').animate({
    		    left:'0px'
    		    },200);
    		    x= '0';
	}
    
    });
    
    $('.icon-close').click(function(){
    $('.menu').animate({
    left:'-285px'
    },200);
    
    $('body').animate({
    left:'0px'
    },200);
    x= '0';
    });
    
   
    //add button to populate the panel .panel has options to search new topics and add them to feed.
    /*
    $('.add-button').colorbox({inline:true, width:"95%",height:"90%",fixed:true,href:"#inline_content"});*/
    
    /*
    
    $("#rss-styled").rss("http://www.recruiter.com/feed/career.xml", {
        limit: 5,
        layoutTemplate: '<dl class="dl-horizontal">{entries}</dl>',
        entryTemplate: '<dt><a href="{url}">{title}</a></dt><dd>{shortBodyPlain}[{author}@{date}]</dd>'
    }).show();
    
   
    
    $("#rss-styled1").rss("http://www.recruiter.com/feed/career.xml", {
        limit: 5,
        layoutTemplate: '<dl class="dl-horizontal">{entries}</dl>',
        entryTemplate: '<dt><a href="{url}">{title}</a></dt><dd>{shortBodyPlain}[{author}@{date}]</dd>'
    }).show();
    */
    /*
    $('#titulares').append("<li>" + titulo + "</li>");
    $("#rssURL").val("http://feeds.encosia.com/Encosia");
    loadData();
});
        
function loadData()
{           
    $("#feedContainer").empty();
    
    $.get("FeedServer.ashx?url=" + $("#rssURL").val(), function(data) {                         
        
        $(data).find('item').each(function() {
            var $item = $(this);
            var title = $item.find('title').text();
            var link = $item.find('link').text();
            var description = $item.find('description').text();
            var pubDate = $item.find('pubDate').text();

            var html = "<div style=\"margin-bottom:8px;\">";
            html += "<h3>" + title + "</h3>";
            html += "<em>" + pubDate + "</em>";
            html += "<p>" + description + "</p>";
            html += "<a href=\"" + link + "\" target=\"_blank\">Read More</a>";
            html += "</div>";

            $('#feedContainer').append(html);
        });
    });
    */
    //below code for RSS feed using yahoo api http://feeds.feedburner.com/NdtvNews-TopStories
    //default always shows the CNN Top stories
    
    
    $('#rss-styled1').empty();
    //rssReader('http://rss.cnn.com/rss/cnn_topstories.rss');
    rssReader('http://feeds.feedburner.com/NdtvNews-TopStories');
    
    if (typeof (Storage) !== "undefined") {

		if (localStorage.getItem('names') !== null) {
			var menunames = JSON.parse(localStorage["names"]);
			var html = '';
			for (var i = 0; i < menunames.length; i++) {
    			//var tempquery = localStorage.getItem("name"[i]);
				html += '<li><a class=\"menulink\">' + menunames[i] + '</a></li>';
    		}
			
			$("#menulist").append(html);
		}
	}
	
	  $('.menulink').click(function(){
			var ref=$(this).text();
			//value = value.replace(/(^\")|("$)/gi, "");
			//rssurl=rssurl.replace(/(^\")|("$)/gi, "");
			var rssurl= [];
			rssurl=	localStorage.getItem(ref);
			rssurl=JSON.parse(rssurl);
			$('#rss-styled1').empty();
			for (var i = 0; i < rssurl.length; i++) {
			 rssReader(rssurl[i]);
			}
			/*function load script from other source
			 $.getScript("../js/app.js", function(ref){

				 rssReader(localStorage.getItem(ref));
				   // Here you can use anything you defined in the loaded script
				});*/
			
		});
    
    $("#myid li").click(function() {
        var index = $(this).index();
        var text = $(this).text();
        var value = $(this).attr('data-value');
        $(this).addClass(".active");
        
       // alert("Index is: " + index + " , text is " + text + " and value is " + value);
        $('#rss-styled1').empty();
        if (text =="CNN Edition") {
        	rssReader('http://rss.cnn.com/rss/edition.rss');
		} else if (text =="World") {
			rssReader('http://rss.cnn.com/rss/cnn_world.rss');
		}
		else if (text =="U.S.") {
			rssReader('http://rss.cnn.com/rss/cnn_us.rss');
		}
		else if (text =="Business (CNNMoney.com)") {
			rssReader('http://rss.cnn.com/rss/money_latest.rss	');
		}
		else if (text =="Politics") {
			rssReader('http://rss.cnn.com/rss/cnn_allpolitics.rss');
		}
		else if (text =="Crime") {
			rssReader('http://rss.cnn.com/rss/cnn_crime.rss');
		}
		
		else{
			rssReader('http://rss.cnn.com/rss/cnn_crime.rss');
		}
        
        
        
    });
    
    
    
    function rssReader(element){
    	
        var site = element;
        var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + site + '"') + '&format=xml';
        $.get(yql).done(function (rss) {
            $(rss).find("item").each(function () {
                var title = $(this).find('title').text();
                var url = $(this).find('link').text();
                
                var $item = $(this);
                var title = $item.find('title').text();
                var link = $item.find('link').text();
                var description = $item.find('description').text();
                var pubDate = $item.find('pubDate').text();
// include for loop here to limit the feed entries
                //var html = "<div style=\"margin-bottom:18px;\" class=\"Feed\">";
                var html = "<div class=\"Feed\">";
                html += "<div class=\"Feedcontent\">";
                html += "<h3>" + title + "</h3>";
                html += "<em>" + pubDate + "</em>";
                html += "<p>" + description + "</p>";
                //html += "<a href=\"" + link + "\" target=\"_blank\">Read More</a>";
                html += "<a class='iframe cboxElement' href=\"" + link + "\">Read More</a>";
                html += "</div>";
                html += "</div>";
                
                $('#rss-styled1').append(html);
                $(".iframe").colorbox({iframe:true, width:"95%", height:"95%",maxWidth:"true",maxHeight:"true",fixed:true});
            });
        });
    	
    }
    
    
    
};

$(document).ready(main);

 