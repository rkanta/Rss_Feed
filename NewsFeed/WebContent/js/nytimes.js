var main = function(){
    $('.icon-menu').click(function(){
    $('.menu').animate({
    left:'0px'
    },200);
    
    $('body').animate({
    left:'285px'
    },200);
    
    });
    
    $('.icon-close').click(function(){
    $('.menu').animate({
    left:'-285px'
    },200);
    
    $('body').animate({
    left:'0px'
    },200);
    
    });
    
    
 
  
  /*
    
    $("#rss-styled").rss("http://www.recruiter.com/feed/career.xml", {
        limit: 5,
        layoutTemplate: '<dl class="dl-horizontal">{entries}</dl>',
        entryTemplate: '<dt><a href="{url}">{title}</a></dt><dd>{shortBodyPlain}[{author}@{date}]</dd>'
    }).show();*/
    
    
    //below code for RSS feed using yahoo api
    //default always shows the CNN Top stories
    $('#rss-styled1').empty();
    rssReader('http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
    
    var apikey = "A0SXFX54S3K0OC9GNCXG";
    var baseUrl = "http://sandbox.feedly.com";
    //var baseUrl = "http://localhost:8080/feedly";
    //var URI = "/v3/search/feeds/";
    var URI = "/v3/search/feeds/";
    var query = "NDTV";
    var url = baseUrl + URI+ "?apikey="+apikey+"&query="+query+ "&callback=?";
    rssReader(url);
    
    $("#myid li").click(function() {
        var index = $(this).index();
        var text = $(this).text();
        var value = $(this).attr('data-value');
        $(this).addClass(".active");
        
       // alert("Index is: " + index + " , text is " + text + " and value is " + value);
        $('#rss-styled1').empty();
        if (text =="NYTimes HomePage(US)") {
        	rssReader('http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
		} else if (text =="World") {
			rssReader('http://rss.nytimes.com/services/xml/rss/nyt/World.xml');
		}
		else if (text =="U.S.") {
			rssReader('http://rss.nytimes.com/services/xml/rss/nyt/US.xml');
		}
		else if (text =="Business") {
			rssReader('http://rss.nytimes.com/services/xml/rss/nyt/Business.xml');
		}
		else if (text =="Politics") {
			rssReader('http://rss.nytimes.com/services/xml/rss/nyt/Politics.xml');
		}
		else if (text =="Technology") {
			rssReader('http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml');
		}
		else if (text =="NYTimes HomePage(INT)") {
			rssReader('http://rss.nytimes.com/services/xml/rss/nyt/InternationalHome.xml');
		}
		else if (text =="sports") {
			rssReader('http://rss.nytimes.com/services/xml/rss/nyt/Sports.xml');
		}
		
		else{
			rssReader('http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
		}
        
        
        
    });
    
    
    
    function rssReader(element){
    	
        var site = element;
        var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + site + '"') + '&format=xml';
       
        
           /* $.getJSON(site + "?callback=?", function(json) { http://api.themoviedb.org/2.1/Movie.search/en
                console.log(json);}); http://api.themoviedb.org/3/movie/popular/en/json/23afca60ebf72f8d88cdcae2c4f31866/
                /v3/search/feeds
                 * http://localhost:8080/feedly/v3/search/feeds/?apikey=A0SXFX54S3K0OC9GNCXG&query=ndtv
                 * http://sandbox.feedly.com/v3/search/feeds/?apikey=A0SXFX54S3K0OC9GNCXG&query=ndtv
                 * http://sandbox.feedly.com/v3/search/feeds/?apikey=A0SXFX54S3K0OC9GNCXG&query=NDTV?callback=jQuery111107604972799308598_1415403685859&_=1415403685860
            */
        /* working */
            $.getJSON(site, function(json) {

                //TMDb is nice enough to return a message if nothing was found, so we can base our if statement on this information
        	console.log(json);
                if (json != "Nothing found."){

                   //Display the poster and a message announcing the result
                    console.log(json);
                }});
               
          
       /* tried with proxy not working
        request = new XMLHttpRequest;
        request.open('GET', baseUrl + URI+ "&query="+query, true);
        request.send();
        */
        
     // service url  Ajax call with call back but throws unexpected token error======== working
   /*    var url = 'http://localhost:8080/feedly/v3/search/feeds/?apikey=A0SXFX54S3K0OC9GNCXG&query=NDTV&callback=?';
         
        $.ajax({
            url: url,
            jsonpCallback: 'processJSON',
            dataType: 'jsonp',
            success: function (result) {
                // process result
                $('#result').html(result.ip);
            },
            error: function (e) {
                 // log error in browser
                console.log(e.message);
            }
        }); */
        
        /* ajax call using php script to solve cross domain issue: not working
        var requestData = {
        	clientId: "sandbox",
        	apikey: "A0SXFX54S3K0OC9GNCXG",
        	query : "NDTV"
        };
        var request = $.ajax({
            url: "/php/proxy.php",
            data: {requrl: "http://sandbox.feedly.com" + $.param(requestData) },
            dataType: 'json'
        });
        request.done(function(msg) {
            callback(msg);
        });
          */
        
     // Ajax call to  receive rss feeds
        
      // var url = baseUrl + URI+ "?apikey="+apikey+"&query="+query+ "&callback=?";
            /*    
               $.ajax({
        	   type:"GET",
                   url: url,
                   jsonpCallback: 'processJSON',
                   dataType: 'jsonp',
                   success: function (result) {
                       // process result
                       console.log(result);
                    
                       $(result).find("result").each(function () {
                	   var title = $(this).find('title').text();
                           var url = $(this).find('link').text();
                       });
                   },
                   error: function (e) {
                        // log error in browser
                       console.log(e.message);
                   } 
                   });*/
               
        // using third party proxy YQL and works without any error
        $.get(yql).done(function (rss) {
            $(rss).find("item").each(function () {
                var title = $(this).find('title').text();
                var url = $(this).find('link').text();
                
                var $item = $(this);
                var title = $item.find('title').text();
                var link = $item.find('link').text();
                var description = $item.find('description').text();
                var pubDate = $item.find('pubDate').text();

                var html = "<div style=\"margin-bottom:8px;\" class=\"Feed\">";
                html += "<h3>" + title + "</h3>";
                html += "<em>" + pubDate + "</em>";
                html += "<p>" + description + "</p>";
                //<a target="_blank"><div style="margin-bottom:8px;">
                //<a href="http://www.w3schools.com" target="_blank">Visit W3Schools!</a></p>
                //html += "<a href=\"" + link + "\" target=\"_blank\">Read More</a>";
                html += "<a class='iframe cboxElement' href=\"" + link + "\">Read More</a>";
                html += "</div>";
                
                $('#rss-styled1').append(html);
                
                $(".iframe").colorbox({iframe:true, width:"80%", height:"80%",maxWidth:"true",maxHeight:"true"});
            });
        });
    	
    };
    
  
    
};

$(document).ready(main);