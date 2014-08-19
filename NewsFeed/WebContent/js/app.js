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
    
    
 
  
  
    
    $("#rss-styled").rss("http://www.recruiter.com/feed/career.xml", {
        limit: 5,
        layoutTemplate: '<dl class="dl-horizontal">{entries}</dl>',
        entryTemplate: '<dt><a href="{url}">{title}</a></dt><dd>{shortBodyPlain}[{author}@{date}]</dd>'
    }).show();
    
    /*
    
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
    //below code for RSS feed using yahoo api
    //default always shows the CNN Top stories
    $('#rss-styled1').empty();
    rssReader('http://rss.cnn.com/rss/cnn_topstories.rss');
    
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

                var html = "<div style=\"margin-bottom:8px;\" class=\"Feed\">";
                html += "<h3>" + title + "</h3>";
                html += "<em>" + pubDate + "</em>";
                html += "<p>" + description + "</p>";
                //html += "<a href=\"" + link + "\" target=\"_blank\">Read More</a>";
                html += "<a class='iframe cboxElement' href=\"" + link + "\">Read More</a>";
                html += "</div>";
                
                $('#rss-styled1').append(html);
                $(".iframe").colorbox({iframe:true, width:"80%", height:"80%",maxWidth:"true",maxHeight:"true"});
            });
        });
    	
    }
    

    
};

$(document).ready(main);