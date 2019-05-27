var ListCountupcoming=999;var TitleCount=90;var ImageSize=200;
function bmoviesr(json){for(var i=0;i<ListCountupcoming;i++)
{var listing=ListImage=ListUrl=ListTitle=ListImage=ListContent=ListConten=ListAuthor=ListTag=ListDate=ListUpdate=ListComments=thumbUrl=TotalPosts=sk=AuthorPic=ListMonth=Y=D=M=m=YY=DD=MM=mm=TT="";if(json.feed.entry[i].category!=null)
{for(var k=0;k<json.feed.entry[i].category.length;k++){ListTag+="<a href='/search/label/"+json.feed.entry[i].category[k].term+"'>"+json.feed.entry[i].category[k].term+"</a>";if(k<json.feed.entry[i].category.length-1)
{ListTag+=" "}}}
for(var j=0;j<json.feed.entry[i].link.length;j++){if(json.feed.entry[i].link[j].rel=='alternate'){break}}
ListUrl="'"+json.feed.entry[i].link[j].href+"'";var postTitle=json.feed.entry[i].title.$t;TotalPosts=json.feed.openSearch$totalResults.$t;if(json.feed.entry[i].title!=null)
{ListTitles=json.feed.entry[i].title.$t;ListTitle=ListTitles.substring(0,ListTitles.indexOf('-'))}
if(json.feed.entry[i].thr$total)
{ListComments="<a href='"+json.feed.entry[i].link[j].href+"#comment-form'>"+json.feed.entry[i].thr$total.$t+"</a>"}
ListAuthor=json.feed.entry[i].author[0].name.$t.split(" ");ListAuthor=ListAuthor.slice(0,1).join(" ");AuthorPic=json.feed.entry[i].author[0].gd$image.src;ListMonth=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];ListDate=json.feed.entry[i].published.$t.substring(0,10);Y=ListDate.substring(0,4);m=ListDate.substring(5,7);D=ListDate.substring(8,10);M=ListMonth[parseInt(m-1)];ListUpdate=json.feed.entry[i].updated.$t.substring(0,16);YY=ListUpdate.substring(0,4);mm=ListUpdate.substring(5,7);DD=ListUpdate.substring(8,10);TT=ListUpdate.substring(11,16);MM=ListMonth[parseInt(mm-1)];if(json.feed.entry[i].media$thumbnail!=null)
{thumbUrl=json.feed.entry[i].media$thumbnail.url;sk=thumbUrl.replace("/s72-c/","/s"+ImageSize+"/");ListImage="'"+sk.replace("?imgmax=800","")+"'"}
else if(json.feed.entry[i].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)!=null)
{var youtube_id=json.feed.entry[i].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();if(youtube_id.length==11){var ListImage="'//img.youtube.com/vi/"+youtube_id+"/0.jpg'"}}
else if(json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)!=null)
{ListImage=json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]}
else{ListImage="'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'"}
if(json.feed.entry[i].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/)!=null)
{rk=json.feed.entry[i].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/)}
var pk=""+rk+"";var text=pk.replace(/<\/?(span|div|img|p...)\b[^<>]*>/g,"");var postdate=new Date(text);var now=new Date();var postm=postdate.getMonth()+1;var posty=postdate.getFullYear();var nowm=now.getMonth()+1;var nowy=now.getFullYear();if(nowm==11){currentdte=new Date(now.getFullYear()+1,0,1);nextyear=currentdte.getFullYear();nextmonth=currentdte.getMonth()+1}else{currentdte=new Date(now.getFullYear(),now.getMonth()+1,1);nextyear=currentdte.getFullYear();nextmonth=currentdte.getMonth()+1}
var posttime=postdate.getTime();var current=now.getTime();var month=new Array();month[0]="Jan";month[1]="Feb";month[2]="Mar";month[3]="Apr";month[4]="May";month[5]="Jun";month[6]="Jul";month[7]="Aug";month[8]="Sep";month[9]="Oct";month[10]="Nov";month[11]="Dec";var n=month[postdate.getMonth()];d=postdate.getDate();if(postm==nowm&&posty==nowy&&posttime<current){<!-- if(postm==nextmonth&&posty==nextyear){-->var days="<li class='large-4 medium-4 small-6 columns upcominghide'><figure ><a href="+ListUrl+" title='"+ListTitle+"' class='image'><img width='165' height='212' src='https://1.bp.blogspot.com/-UmT6HctTuSw/WzKAal2u49I/AAAAAAAAAAM/sS13Wn9nHpU784JnZ0qjdJrJvBCFD5k7gCLcBGAs/s1600/loader-wht-bg.jpg' data-lazy-type='image' data-lazy-src="+ListImage+" class='lazy lazy-hidden image  wp-post-image'  src="+ListImage+" class='image wp-post-image' title='"+ListTitle+"'  /></a></figure><div class='movie-meta'><div class='release-date'>"+makeMeTwoDigits(d)+" "+n+" "+posty+"</div><div class='movie-meta pointer clearfix'><h4 class='clear-both name'><a href="+ListUrl+" title='"+ListTitle+"'>"+ListTitle+"</a></div></div></li>"
document.write(days)}}}
function AcctressPic(b){document.write("<ul class='movie-this-month no-bullet'>");for(var a=0;6>a;a++){d=ListUrl=ListTitle=d=ListContent=ListConten=ListAuthor=ListTag=ListDate=ListUpdate=ListComments=thumbUrl=TotalPosts=sk=AuthorPic=ListMonth=Y=D=M=m=YY=DD=MM=mm=TT="";if(null!=b.feed.entry[a].category)for(var c=0;c<b.feed.entry[a].category.length;c++)ListTag+="<a href='/search/label/"+b.feed.entry[a].category[c].term+"'>"+b.feed.entry[a].category[c].term+"</a>",c<b.feed.entry[a].category.length-1&&
(ListTag+=" ");for(c=0;c<b.feed.entry[a].link.length&&"alternate"!=b.feed.entry[a].link[c].rel;c++);ListUrl="'"+b.feed.entry[a].link[c].href+"'";TotalPosts=b.feed.openSearch$totalResults.$t;null!=b.feed.entry[a].title&&(ListTitles=b.feed.entry[a].title.$t,ListTitle=ListTitles.substring(0,ListTitles.indexOf("-")));b.feed.entry[a].thr$total&&(ListComments="<a href='"+b.feed.entry[a].link[c].href+"#comment-form'>"+b.feed.entry[a].thr$total.$t+"</a>");ListAuthor=b.feed.entry[a].author[0].name.$t.split(" ");
ListAuthor=ListAuthor.slice(0,1).join(" ");AuthorPic=b.feed.entry[a].author[0].gd$image.src;ListMonth="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");ListDate=b.feed.entry[a].published.$t.substring(0,10);Y=ListDate.substring(0,4);m=ListDate.substring(5,7);D=ListDate.substring(8,10);M=ListMonth[parseInt(m-1)];ListUpdate=b.feed.entry[a].updated.$t.substring(0,16);YY=ListUpdate.substring(0,4);mm=ListUpdate.substring(5,7);DD=ListUpdate.substring(8,10);TT=ListUpdate.substring(11,16);MM=ListMonth[parseInt(mm-
1)];if(null!=b.feed.entry[a].media$thumbnail)thumbUrl=b.feed.entry[a].media$thumbnail.url,sk=thumbUrl.replace("/s72-c/","/s165/"),d="'"+sk.replace("?imgmax=800","")+"'";else if(null!=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)){if(c=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(),11==c.length)var d="'//img.youtube.com/vi/"+c+"/0.jpg'"}else d=null!=b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)?b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]:
"'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'";document.write("<li ><figure class='bh-thumb' itemprop='image' itemtype='https://schema.org/ImageObject'><a href="+ListUrl+" title='"+ListTitles+"'><img class='lazy lazy-hidden image  wp-post-image' data-lazy-src="+d+" data-lazy-srcset="+d+" data-lazy-type='image' height='212' itemprop='image url' role='img' sizes='(max-width: 165px) 100vw, 165px' src='https://1.bp.blogspot.com/-UmT6HctTuSw/WzKAal2u49I/AAAAAAAAAAM/sS13Wn9nHpU784JnZ0qjdJrJvBCFD5k7gCLcBGAs/s1600/loader-wht-bg.jpg' title="+
ListTitles+" width='165'></img></a></figure></li>")}document.write("</ul>")};
var ListCount=99,TitleCount=20,ImageSize=200;

function makeMeTwoDigits(n){return (n < 10 ? "0" : "") + n;}
var ImageSizeC = "322-h322-p-k-no";
function mg(b){for(var a=0;a<ListCount2;a++){e=ListUrl=ListTitle=e=ListContent=ListConten=ListAuthor=ListTag=ListDate=ListUpdate=ListComments=thumbUrl=TotalPosts=sk=AuthorPic=ListMonth=Y=D=M=m=YY=DD=MM=mm=TT="";if(null!=b.feed.entry[a].category)for(var c=0;c<b.feed.entry[a].category.length;c++)ListTag+="<a href='/search/label/"+b.feed.entry[a].category[c].term+"'>"+b.feed.entry[a].category[c].term+"</a>",c<b.feed.entry[a].category.length-1&&(ListTag+=" ");for(var d=0;d<b.feed.entry[a].link.length&&
"alternate"!=b.feed.entry[a].link[d].rel;d++);ListUrl="'"+b.feed.entry[a].link[d].href+"'";c=b.feed.entry[a].title.$t;TotalPosts=b.feed.openSearch$totalResults.$t;null!=b.feed.entry[a].title&&(ListTitles=b.feed.entry[a].title.$t,ListTitle=ListTitles.substring(0,ListTitles.indexOf("-")));b.feed.entry[a].thr$total&&(ListComments="<a href='"+b.feed.entry[a].link[d].href+"#comment-form'>"+b.feed.entry[a].thr$total.$t+"</a>");ListAuthor=b.feed.entry[a].author[0].name.$t.split(" ");ListAuthor=ListAuthor.slice(0,
1).join(" ");AuthorPic=b.feed.entry[a].author[0].gd$image.src;ListMonth="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");ListDate=b.feed.entry[a].published.$t.substring(0,10);Y=ListDate.substring(0,4);m=ListDate.substring(5,7);D=ListDate.substring(8,10);M=ListMonth[parseInt(m-1)];ListUpdate=b.feed.entry[a].updated.$t.substring(0,16);YY=ListUpdate.substring(0,4);mm=ListUpdate.substring(5,7);DD=ListUpdate.substring(8,10);TT=ListUpdate.substring(11,16);MM=ListMonth[parseInt(mm-1)];if(null!=
b.feed.entry[a].media$thumbnail)thumbUrl=b.feed.entry[a].media$thumbnail.url,sk=thumbUrl.replace("/s72-c/","/w"+ImageSizeC+"/"),e="'"+sk.replace("?imgmax=800","")+"'";else if(null!=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)){if(d=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(),11==d.length)var e="'//img.youtube.com/vi/"+d+"/0.jpg'"}else e=null!=b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)?b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]:
"'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'";0==a&&(d="<li role='listitem' class='bh-box large'><figure><a href="+ListUrl+" title='"+c+"'><img width='322' height='322'  src="+e+" class='attachment-bh_322_322 size-bh_322_322'></img> <figcaption class='hide' itemprop='caption description'>"+c+"</a></figcaption></a></figure><div class='gallery-title bh-hover-meta'><h4 class='entry-title name' itemprop='headline'><a href="+ListUrl+" title='"+c+"'>"+c+" </a></h4></div></li>",
document.write(d));0<a&&a<ListCount2&&(d="<li role='listitem' class='bh-box small'><figure><a href="+ListUrl+" title='"+c+"'><img width='165' height='165' src="+e+" class='attachment-bh_165_165 size-bh_165_165'></img> <figcaption class='hide' itemprop='caption description'>"+c+"</a></figcaption></a></figure><div class='gallery-title bh-hover-meta'><h4 class='entry-title name' itemprop='headline'><a href="+ListUrl+" title='"+c+"'>"+c+" </a></h4></div></li>",document.write(d))}};

var boxofficenewscount = 5;
function boxoffice(json)
{ 
document.write('<ul class="hot-list no-bullet" id="bh-news-menu">');
for (var i = 0; i < boxofficenewscount ; i++)
{  
var listing= movieImage = movieUrl = movieTitle = movieImage = ListContent = ListConten = ListAuthor = ListTag = ListDate = ListUpdate = ListComments = thumbUrl = TotalPosts = sk = AuthorPic= ListMonth = Y = D = M = m = YY = DD = MM = mm = TT =  ""; 
if (json.feed.entry[i].published.$t !=null)
{
entryPublished=json.feed.entry[i].published.$t;
}
if (json.feed.entry[i].updated.$t !=null)
{
entryUpdated=json.feed.entry[i].updated.$t;
}
if (json.feed.entry[i].category != null) 
{ 
for (var k = 1; k < 2; k++) { 
ListTag += "<a href='/search/label/"+json.feed.entry[i].category[k].term+"'>"+json.feed.entry[i].category[k].term+"</a>"; 
if(k < json.feed.entry[i].category.length-1) 
{ ListTag += " ";} 
} 
} 
for (var j = 0; j < json.feed.entry[i].link.length; j++) { 
      if (json.feed.entry[i].link[j].rel == 'alternate') { 
        break; 
      } 
    } 
movieUrl= "'" + json.feed.entry[i].link[j].href + "'"; 
var postTitle = json.feed.entry[i].title.$t;
TotalPosts = json.feed.openSearch$totalResults.$t; 
if (json.feed.entry[i].title!= null) 
{ 
movieTitles= json.feed.entry[i].title.$t; 
movieTitle= movieTitles.substring(0, movieTitles.indexOf('-'));
}
var boxofficenews= "<li class='news'> <a href="+movieUrl+" tabindex='-1' title='"+movieTitles+"'><span itemprop='name'>"+movieTitles+"</span></a></li>";
document.write(boxofficenews);
}
document.write("</ul>");
} 

var MoviesCommingSoon = 999; 
var TitleCount = 90; 
var ImageSize = 200; 
function moviescomingprint(json) { 
for (var i = 0; i < MoviesCommingSoon; i++) 
{  
var listing= ListImage = ListUrl = ListTitle = ListImage = ListContent = ListConten = ListAuthor = ListTag = ListDate = ListUpdate = ListComments = thumbUrl = TotalPosts = sk = AuthorPic= ListMonth = Y = D = M = m = YY = DD = MM = mm = TT =  ""; 
if (json.feed.entry[i].category != null) 
{ 
for (var k = 0; k < json.feed.entry[i].category.length; k++) { 
ListTag += "<a href='/search/label/"+json.feed.entry[i].category[k].term+"'>"+json.feed.entry[i].category[k].term+"</a>"; 
if(k < json.feed.entry[i].category.length-1) 
{ ListTag += " ";} 
} 
} 
  for (var j = 0; j < json.feed.entry[i].link.length; j++) { 
        if (json.feed.entry[i].link[j].rel == 'alternate') { 
          break; 
        } 
      } 
movieLink= "'" + json.feed.entry[i].link[j].href + "'"; 
var postTitle = json.feed.entry[i].title.$t;

TotalPosts = json.feed.openSearch$totalResults.$t; 
if (json.feed.entry[i].title!= null) 
{ 
ListTitles= json.feed.entry[i].title.$t; 
ListTitle= ListTitles.substring(0, ListTitles.indexOf('-'));
}
if (json.feed.entry[i].media$thumbnail!=null) 
{ 
thumbUrl = json.feed.entry[i].media$thumbnail.url; 
sk= thumbUrl.replace("/s72-c/","/s"+ImageSize+"/"); 
ListImage= "'" + sk.replace("?imgmax=800","") + "'"; 
}
// YouTube scan 
else if (json.feed.entry[i].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/) != null) 
{ 
    var youtube_id = json.feed.entry[i].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(); 
    
    if (youtube_id.length == 11) { 
        var ListImage = "'//img.youtube.com/vi/"+youtube_id+"/0.jpg'"; 
        } 
} 
else if (json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/) != null) 
{ 
// Support For 3rd Party Images 
ListImage =  json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]; 
} 
else 
{ 
ListImage= "'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'"; 
} 



if (json.feed.entry[i].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/) != null) 
{ 
timeinsidepost =  json.feed.entry[i].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/); 
	
}

var addtime= (""+timeinsidepost+" 18:00:00");
var text = addtime.replace(/<\/?(span|div|img|p...)\b[^<>]*>/g, "");
var postdate = new Date(text);
var now = new Date();
var postm = postdate.getMonth()+1;
var posty = postdate.getFullYear();
var nowm = now.getMonth()+1;
var nowy = now.getFullYear();
var nd = now.getDate();


if (nowm == 11) {
    currentdte = new Date(now.getFullYear() + 1, 0, 1);
	nextyear = currentdte.getFullYear();
	nextmonth = currentdte.getMonth()+1;
	
} else {
    currentdte = new Date(now.getFullYear(), now.getMonth() + 1, 1);
	nextyear = currentdte.getFullYear();
	nextmonth = currentdte.getMonth()+1;
	
}

var posttime = postdate.getTime();
var current = now.getTime();
var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var n = month[postdate.getMonth()];
	var d = postdate.getDate();
 

if (postm == nowm && posty == nowy && posttime > current || postm == nextmonth && posty == nextyear ){
var days = "<div class ='hideme large-3 medium-6 small-12 columns bh-release-date-wrap'><figure><a href="+ movieLink+" title='"+ListTitles+"'> <img width='165' height='12' src='https://1.bp.blogspot.com/-UmT6HctTuSw/WzKAal2u49I/AAAAAAAAAAM/sS13Wn9nHpU784JnZ0qjdJrJvBCFD5k7gCLcBGAs/s1600/loader-wht-bg.jpg' data-lazy-type='image' data-lazy-src="+ListImage+" class='lazy lazy-hidden image  wp-post-image' src="+ListImage+"  class='image wp-post-image' title='"+ListTitles+"'/></a></figure> <div class='bh-home-coverage--content clearfix'><h4 class='entry-title name'><a href=" 
+movieLink+" title='"+ListTitles+"' target='_blank'>"+ListTitle+"</a></h4><div class='bh-home-coverage--meta'><time itemprop='datePublished' class='published date updated'><span class='date'>"+makeMeTwoDigits(d)+"</span>     <span class='month'>"+n+"</span>    <span class='year'>"+posty+"</span></time></div></div></div>";	
document.write(days);
}
}
} 

var ListCountupcoming = 9; 
var TitleCount = 90; 
var ImageSizeA = "255-h191-s"; 

function bollywoodmovies2(json) { 
document.write('<div class="bh-cm-boxes row bh-box-articles bh-l-3 clearfix">');

for (var i = 0; i < ListCountupcoming; i++) 
{  

var listing= movieImage = movieUrl = movieTitle = movieImage = ListContent = ListConten = ListAuthor = ListTag = ListDate = ListUpdate = ListComments = thumbUrl = TotalPosts = sk = AuthorPic= ListMonth = Y = D = M = m = YY = DD = MM = mm = TT =  ""; 

if (json.feed.entry[i].category != null) 
{ 
for (var k = 0; k < json.feed.entry[i].category.length; k++) { 
ListTag += "<a href='/search/label/"+json.feed.entry[i].category[k].term+"'>"+json.feed.entry[i].category[k].term+"</a>"; 
if(k < json.feed.entry[i].category.length-1) 
{ ListTag += " ";} 
} 
} 

for (var j = 0; j < json.feed.entry[i].link.length; j++) { 
      if (json.feed.entry[i].link[j].rel == 'alternate') { 
        break; 
      } 
    } 
movieUrl= "'" + json.feed.entry[i].link[j].href + "'"; 
var postTitle = json.feed.entry[i].title.$t;

TotalPosts = json.feed.openSearch$totalResults.$t; 
if (json.feed.entry[i].title!= null) 
{ 
movieTitles= json.feed.entry[i].title.$t; 
movieTitle= movieTitles.substring(0, movieTitles.indexOf('-'));
}

if (json.feed.entry[i].thr$total) 
{ 
ListComments= "<a href='"+json.feed.entry[i].link[j].href+"#comment-form'>"+json.feed.entry[i].thr$total.$t+"</a>"; 
} 
ListAuthor= json.feed.entry[i].author[0].name.$t.split(" "); 
ListAuthor=ListAuthor.slice(0, 1).join(" "); 
AuthorPic = json.feed.entry[i].author[0].gd$image.src; 

ListMonth= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
ListDate= json.feed.entry[i].published.$t.substring(0,10); 
updatepost= json.feed.entry[i].published.$t;
                         Y = ListDate.substring(0, 4); 
                        m = ListDate.substring(5, 7); 
                         D = ListDate.substring(8, 10); 
                         M = ListMonth[parseInt(m - 1)];                       
ListUpdate= json.feed.entry[i].updated.$t.substring(0, 16); 
modifydate= json.feed.entry[i].updated.$t;
                         YY = ListUpdate.substring(0, 4); 
                        mm = ListUpdate.substring(5, 7); 
                         DD = ListUpdate.substring(8, 10); 
                         TT = ListUpdate.substring(11, 16); 
                         MM = ListMonth[parseInt(mm - 1)];   
ListConten = json.feed.entry[i].content.$t; 
ListContent= ListConten.replace(/(<([^>]+)>)/ig,"").substr(0, 110)+'...';

if (json.feed.entry[i].media$thumbnail!=null) 
{ 
thumbUrl = json.feed.entry[i].media$thumbnail.url; 
movieImage= thumbUrl.replace("/s72-c/","/w"+ImageSizeA+"/"); 

}

var moviesarticals = "<article itemscope itemtype='https://schema.org/Article' class='bh-cm-box large-4 medium-4 small-4 column bh-box-article hentry'><div class='bh-box-article-top'><figure itemprop='image' itemtype='https://schema.org/ImageObject' class='bh-thumb'><a href="+movieUrl+" title='"+movieTitles+"'><img src='https://3.bp.blogspot.com/-nFqnJG59ez4/Ww6pTTI2qeI/AAAAAAAAAoA/QqqyDqIoIAI1oGU5VpUUygUD6c73-nKfQCLcBGAs/s1600/1x1.trans.gif' data-lazy-src='"+movieImage+"' width='255' height='191' class='image  wp-post-image' alt='"+movieTitles+"' itemprop='image url' role='img' title='"+movieTitles+"' srcset='"+movieImage+" 255w, "+movieImage+" 196w, "+movieImage+" 346w, "+movieImage+" 480w' sizes='(max-width: 255px) 100vw, 255px'/></a></figure><h3 itemprop='headline' class='entry-title name'> <a data-pjax rel='bookmark' href="+movieUrl+" title='"+movieTitles+"'> <span itemprop='name'>"+movieTitles+"</span> </a></h3><time class='time updated published' datetime='"+updatepost+"'>"+D+" "+M+" "+Y+"</time><div class='hide vcard' itemprop='author' itemscope itemtype='https://schema.org/Person'> <span data-pjax itemprop='name' rel='author' class='fn'>Filmsbit News Network</span></div><meta data-pjax itemprop='datePublished' content='"+updatepost+"' /><meta itemprop='dateModified' content='"+modifydate+"'/><meta data-pjax itemscope itemprop='mainEntityOfPage' itemType='https://schema.org/WebPage' itemid="+movieUrl+" /><div class='hide' itemprop='publisher' itemscope itemtype='https://schema.org/Organization'><div itemprop='logo' itemscope itemtype='https://schema.org/ImageObject'><meta itemprop='url' content='https://3.bp.blogspot.com/-_v7GLFU0eEw/W9dJr9--yqI/AAAAAAAABUE/FDMaRuotAR0QbvlU1ZRYkCZVo5XJLFo-gCLcBGAs/s1600/filmsbit_logo.png' /><meta itemprop='width' content='210' /><meta itemprop='height' content='58' /></div><meta itemprop='name' content='Filmsbit' /></div><div class='bh-box-content entry-summary description' itemprop='description'><p>"+ListContent+"</p></div></div><footer class='entry-meta box-entry-meta'><ul class='box-entry-content no-bullet'><li itemprop='interactionStatistic' itemscope itemtype='https://schema.org/InteractionCounter'><link itemprop='interactionType' href='https://schema.org/WatchAction' /> <span class='icon-bh-view' itemprop='userInteractionCount'>10</span></li><li itemprop='interactionStatistic' itemscope itemtype='https://schema.org/InteractionCounter'><meta itemprop='interactionType' content='https://schema.org/CommentAction' /><meta itemprop='userInteractionCount' content='10' /> </li><li></li></ul></footer></article>";
document.write(moviesarticals);
} 
document.write("</div>");
} 
function AcctressPic(json) {
document.write ("<ul class='movie-this-month no-bullet'>")
var ListImagePost = 6; 
var ImageSize2 = 165;
for (var i = 0; i < ListImagePost; i++) 
{  

var listing= ListImage = ListUrl = ListTitle = ListImage = ListContent = ListConten = ListAuthor = ListTag = ListDate = ListUpdate = ListComments = thumbUrl = TotalPosts = sk = AuthorPic= ListMonth = Y = D = M = m = YY = DD = MM = mm = TT =  ""; 

if (json.feed.entry[i].category != null) 
{ 
for (var k = 0; k < json.feed.entry[i].category.length; k++) { 
ListTag += "<a href='/search/label/"+json.feed.entry[i].category[k].term+"'>"+json.feed.entry[i].category[k].term+"</a>"; 
if(k < json.feed.entry[i].category.length-1) 
{ ListTag += " ";} 
} 
} 

for (var j = 0; j < json.feed.entry[i].link.length; j++) { 
      if (json.feed.entry[i].link[j].rel == 'alternate') { 
        break; 
      } 
    } 
ListUrl= "'" + json.feed.entry[i].link[j].href + "'"; 
var postTitle = json.feed.entry[i].title.$t;
 
TotalPosts = json.feed.openSearch$totalResults.$t; 
if (json.feed.entry[i].title!= null) 
{ 
ListTitles= json.feed.entry[i].title.$t; 
ListTitle= ListTitles.substring(0, ListTitles.indexOf('-'));
}

if (json.feed.entry[i].thr$total) 
{ 
ListComments= "<a href='"+json.feed.entry[i].link[j].href+"#comment-form'>"+json.feed.entry[i].thr$total.$t+"</a>"; 
} 
ListAuthor= json.feed.entry[i].author[0].name.$t.split(" "); 
ListAuthor=ListAuthor.slice(0, 1).join(" "); 
AuthorPic = json.feed.entry[i].author[0].gd$image.src; 

ListMonth= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
ListDate= json.feed.entry[i].published.$t.substring(0,10); 
                         Y = ListDate.substring(0, 4); 
                        m = ListDate.substring(5, 7); 
                         D = ListDate.substring(8, 10); 
                         M = ListMonth[parseInt(m - 1)];                       
ListUpdate= json.feed.entry[i].updated.$t.substring(0, 16); 
                         YY = ListUpdate.substring(0, 4); 
                        mm = ListUpdate.substring(5, 7); 
                         DD = ListUpdate.substring(8, 10); 
                         TT = ListUpdate.substring(11, 16); 
                         MM = ListMonth[parseInt(mm - 1)];   

if (json.feed.entry[i].media$thumbnail!=null) 
{ 
thumbUrl = json.feed.entry[i].media$thumbnail.url; 
sk= thumbUrl.replace("/s72-c/","/s"+ImageSize2+"/"); 
ListImage= "'" + sk.replace("?imgmax=800","") + "'"; 
}

else if (json.feed.entry[i].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/) != null) 
{ 
    var youtube_id = json.feed.entry[i].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(); 
    
    if (youtube_id.length == 11) { 
        var ListImage = "'//img.youtube.com/vi/"+youtube_id+"/0.jpg'"; 
        } 
} 
else if (json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/) != null) 
{ 
// Support For 3rd Party Images 
ListImage =  json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]; 
} 
else 
{ 
ListImage= "'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'"; 
} 

var acctresspic = "<li ><figure class='bh-thumb' itemprop='image' itemtype='https://schema.org/ImageObject'><a href="+ ListUrl+" title='"+ListTitles+"'><img class='lazy lazy-hidden image  wp-post-image' data-lazy-src="+ListImage+" data-lazy-srcset="+ListImage+" data-lazy-type='image' height='212' itemprop='image url' role='img' sizes='(max-width: 165px) 100vw, 165px' src='https://1.bp.blogspot.com/-UmT6HctTuSw/WzKAal2u49I/AAAAAAAAAAM/sS13Wn9nHpU784JnZ0qjdJrJvBCFD5k7gCLcBGAs/s1600/loader-wht-bg.jpg' title="+ListTitles+" width='165'></img></a></figure></li>";
document.write(acctresspic)
}
document.write ("</ul>") 
} 

var ListCount = 999; 
var TitleCount = 20; 
var ImageSize = 200; 


function moviethismonth(json) { 
document.write ("<ul class='movie-this-month no-bullet'>")
for (var i = 0; i < ListCount; i++) 
{  

var listing= ListImage = ListUrl = ListTitle = ListImage = ListContent = ListConten = ListAuthor = ListTag = ListDate = ListUpdate = ListComments = thumbUrl = TotalPosts = sk = AuthorPic= ListMonth = Y = D = M = m = YY = DD = MM = mm = TT =  ""; 



for (var j = 0; j < json.feed.entry[i].link.length; j++) { 
      if (json.feed.entry[i].link[j].rel == 'alternate') { 
        break; 
      } 
    } 
ListUrl= "'" + json.feed.entry[i].link[j].href + "'"; 
var postTitle = json.feed.entry[i].title.$t;

TotalPosts = json.feed.openSearch$totalResults.$t; 
if (json.feed.entry[i].title!= null) 
{ 
ListTitles= json.feed.entry[i].title.$t; 
ListTitle= ListTitles.substring(0, ListTitles.indexOf('-'));
}


if (json.feed.entry[i].media$thumbnail!=null ) 
{ 
thumbUrl = json.feed.entry[i].media$thumbnail.url; 
sk= thumbUrl.replace("/s72-c/","/s"+ImageSize+"/"); 
ListImage= "'" + sk.replace("?imgmax=800","") + "'"; 
}

else if (json.feed.entry[i].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/) != null) 
{ 
    var youtube_id = json.feed.entry[i].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(); 
    
    if (youtube_id.length == 11) { 
        var ListImage = "'//img.youtube.com/vi/"+youtube_id+"/hqdefault.jpg'"; 
        } 
} 
else if (json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/) != null) 
{ 

ListImage =  json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]; 
} 
else 
{ 
ListImage= "'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'"; 
} 



if (json.feed.entry[i].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/) != null) 
{ 
rk =  json.feed.entry[i].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/); 

}

var pk= ""+rk+" 18:00:00";
var text = pk.replace(/<\/?(span|div|img|p...)\b[^<>]*>/g, "");
var postdate = new Date(text);
var now = new Date();
var postm = postdate.getMonth()+1;
var nowm = now.getMonth()+1;
var posty = postdate.getFullYear();
var nowy = now.getFullYear();
var posttime = postdate.getTime();
var current = now.getTime();
var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var n = month[postdate.getMonth()];
	d = postdate.getDate();
var moviethismonth = "<li ><figure class='bh-thumb' itemprop='image' itemtype='https://schema.org/ImageObject'><a href="+ ListUrl+" title='"+ListTitles+"'><img class='lazy lazy-hidden image  wp-post-image' data-lazy-src="+ListImage+" data-lazy-srcset="+ListImage+" data-lazy-type='image' height='212' itemprop='image url' role='img' sizes='(max-width: 165px) 100vw, 165px' src='https://1.bp.blogspot.com/-UmT6HctTuSw/WzKAal2u49I/AAAAAAAAAAM/sS13Wn9nHpU784JnZ0qjdJrJvBCFD5k7gCLcBGAs/s1600/loader-wht-bg.jpg' title="+ListTitles+" width='165'></img></a></figure></li>";	

if (postm == nowm && posty == nowy ) {
document.write(moviethismonth);
}
}
document.write("</ul>")
} 

var upcoount=999,TitleCount=90,ImageAspet=200;
function mthismage(b){for(var a=0;a<upcoount;a++){var e=ListUrl=ListTitle=e=ListContent=ListConten=ListAuthor=ListTag=ListDate=ListUpdate=ListComments=thumbUrl=TotalPosts=sk=AuthorPic=ListMonth=Y=D=M=m=YY=DD=MM=mm=TT="";if(null!=b.feed.entry[a].category)for(var c=0;c<b.feed.entry[a].category.length;c++)ListTag+="<a href='/search/label/"+b.feed.entry[a].category[c].term+"'>"+b.feed.entry[a].category[c].term+"</a>",c<b.feed.entry[a].category.length-1&&(ListTag+=" ");for(c=0;c<b.feed.entry[a].link.length&&
"alternate"!=b.feed.entry[a].link[c].rel;c++);ListUrl="'"+b.feed.entry[a].link[c].href+"'";TotalPosts=b.feed.openSearch$totalResults.$t;null!=b.feed.entry[a].title&&(ListTitles=b.feed.entry[a].title.$t,ListTitle=ListTitles.substring(0,ListTitles.indexOf("-")));b.feed.entry[a].thr$total&&(ListComments="<a href='"+b.feed.entry[a].link[c].href+"#comment-form'>"+b.feed.entry[a].thr$total.$t+"</a>");ListAuthor=b.feed.entry[a].author[0].name.$t.split(" ");ListAuthor=ListAuthor.slice(0,1).join(" ");AuthorPic=
b.feed.entry[a].author[0].gd$image.src;ListMonth="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");ListDate=b.feed.entry[a].published.$t.substring(0,10);Y=ListDate.substring(0,4);m=ListDate.substring(5,7);D=ListDate.substring(8,10);M=ListMonth[parseInt(m-1)];ListUpdate=b.feed.entry[a].updated.$t.substring(0,16);YY=ListUpdate.substring(0,4);mm=ListUpdate.substring(5,7);DD=ListUpdate.substring(8,10);TT=ListUpdate.substring(11,16);MM=ListMonth[parseInt(mm-1)];null!=b.feed.entry[a].media$thumbnail?
(thumbUrl=b.feed.entry[a].media$thumbnail.url,sk=thumbUrl.replace("/s72-c/","/s"+ImageAspet+"/"),e="'"+sk.replace("?imgmax=800","")+"'"):null!=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)?(c=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(),11==c.length&&(e="'//img.youtube.com/vi/"+c+"/0.jpg'")):e=null!=b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)?b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]:"'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'";
null!=b.feed.entry[a].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/)&&(rk=b.feed.entry[a].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/));c=(""+rk).replace(/<\/?(span|div|img|p...)\b[^<>]*>/g,"");c=new Date(c);var f=new Date,h=c.getMonth()+1,g=c.getFullYear(),k=f.getMonth()+1;f.getFullYear();currentdte=11==k?new Date(f.getFullYear()+1,0,1):new Date(f.getFullYear(),f.getMonth()+1,1);nextyear=currentdte.getFullYear();nextmonth=currentdte.getMonth()+1;c.getTime();
f.getTime();f="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[c.getMonth()];d=c.getDate();h==nextmonth&&g==nextyear&&(e=days="<div class='bh-movie-box large-2 medium-3 small-6 columns hentry upcominghidepage'><figure ><a href="+ListUrl+" title='"+ListTitle+"' class='image'><img width='165' height='212' src='https://1.bp.blogspot.com/-UmT6HctTuSw/WzKAal2u49I/AAAAAAAAAAM/sS13Wn9nHpU784JnZ0qjdJrJvBCFD5k7gCLcBGAs/s1600/loader-wht-bg.jpg' data-lazy-type='image' data-lazy-src="+e+" class='lazy lazy-hidden image  wp-post-image'  src="+
e+" class='image wp-post-image' title='"+ListTitle+"'  /></a></figure><div class='movie-meta'><div class='release-date'>"+makeMeTwoDigits(d)+" "+f+" "+g+"</div><div class='movie-meta pointer clearfix'><h4 class='clear-both name'><a href="+ListUrl+" title='"+ListTitle+"'>"+ListTitle+"</a></div></div></div>",document.write(e))}};
function movievideos(b){document.write("<div class='bh-video-trailer-boxes clearfix'>");for(var a=0;a<ListCountmvideo;a++){var c=ListUrl=ListContent=ListConten=ListAuthor=ListTag=ListDate=ListUpdate=ListComments=thumbUrl=TotalPosts=sk=AuthorPic=ListMonth=Y=D=M=m=YY=DD=MM=mm=TT="";if(null!=b.feed.entry[a].category)for(var d=0;d<b.feed.entry[a].category.length;d++)ListTag+="<a href='/search/label/"+b.feed.entry[a].category[d].term+"'>"+b.feed.entry[a].category[d].term+"</a>",d<b.feed.entry[a].category.length-
1&&(ListTag+=" ");for(var e=0;e<b.feed.entry[a].link.length&&"alternate"!=b.feed.entry[a].link[e].rel;e++);ListUrl="'"+b.feed.entry[a].link[e].href+"'";d=b.feed.entry[a].title.$t;TotalPosts=b.feed.openSearch$totalResults.$t;b.feed.entry[a].thr$total&&(ListComments="<a href='"+b.feed.entry[a].link[e].href+"#comment-form'>"+b.feed.entry[a].thr$total.$t+"</a>");ListAuthor=b.feed.entry[a].author[0].name.$t.split(" ");ListAuthor=ListAuthor.slice(0,1).join(" ");AuthorPic=b.feed.entry[a].author[0].gd$image.src;
ListMonth="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");ListDate=b.feed.entry[a].published.$t.substring(0,10);Y=ListDate.substring(0,4);m=ListDate.substring(5,7);D=ListDate.substring(8,10);M=ListMonth[parseInt(m-1)];ListUpdate=b.feed.entry[a].updated.$t.substring(0,16);YY=ListUpdate.substring(0,4);mm=ListUpdate.substring(5,7);DD=ListUpdate.substring(8,10);TT=ListUpdate.substring(11,16);MM=ListMonth[parseInt(mm-1)];null!=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)?
(e=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(),11==e.length&&(c="'//img.youtube.com/vi/"+e+"/hqdefault.jpg'")):null!=b.feed.entry[a].media$thumbnail?(thumbUrl=b.feed.entry[a].media$thumbnail.url,sk=thumbUrl.replace("/s72-c/","/s"+MImageSize+"/"),c="'"+sk.replace("?imgmax=800","")+"'"):c=null!=b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)?b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]:"'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'";
0==a&&(document.write("<div class='bh-box bh-large-box'>"),document.write("<figure itemprop='image' itemscope itemtype='https://schema.org/ImageObject'><a data-pjax role='link' href="+ListUrl+" title="+d+"><img src='https://3.bp.blogspot.com/-nFqnJG59ez4/Ww6pTTI2qeI/AAAAAAAAAoA/QqqyDqIoIAI1oGU5VpUUygUD6c73-nKfQCLcBGAs/s1600/1x1.trans.gif' data-lazy-src="+c+" width='716' height='405' class='image  wp-post-image' itemprop='image url' role='img' title="+d+" srcset="+c+" sizes='(max-width: 716px) 100vw, 716px' ></img><meta itemprop='width' content='716' /><meta itemprop='height' content='405' /> </a><a class='black-play small' href="+
ListUrl+" title='Play'></a></figure><div class='bh-hover-meta clearfix'><h3 itemprop='headline' class='bh-title name'> <a itemprop='url' data-pjax rel='bookmark' href="+ListUrl+"><span itemprop='name'>"+d+"</span></a></h3><div class='bh-hover-meta-footer bh-fb-round'></div></div>"),document.write("</div>"));0<a&&a<ListCountmvideo&&(c="<div class='bh-box'><figure itemprop='image' itemscope ='itemscope' itemtype='https://schema.org/ImageObject'><a data-pjax role='link' href="+ListUrl+" title="+d+"><img src='https://3.bp.blogspot.com/-nFqnJG59ez4/Ww6pTTI2qeI/AAAAAAAAAoA/QqqyDqIoIAI1oGU5VpUUygUD6c73-nKfQCLcBGAs/s1600/1x1.trans.gif' data-lazy-src="+
c+" width='255' height='191' class='image  wp-post-image' itemprop='image url' role='img' title="+d+" srcset="+c+" 255w, "+c+" 196w, "+c+" 346w, "+c+" 480w' sizes='(max-width: 255px) 100vw, 255px><noscript><img src='https://3.bp.blogspot.com/-nFqnJG59ez4/Ww6pTTI2qeI/AAAAAAAAAoA/QqqyDqIoIAI1oGU5VpUUygUD6c73-nKfQCLcBGAs/s1600/1x1.trans.gif' data-lazy-src="+c+" width='255' height='191' class='image  wp-post-image' itemprop='image url' role='img' title="+d+" srcset='"+c+" 255w, "+c+" 196w, "+c+" 346w, "+
c+" 480w' sizes='(max-width: 255px) 100vw, 255px' /></noscript><meta itemprop='url' content="+c+" /><meta itemprop='width' content='250' /><meta itemprop='height' content='191' /> </a><a class='black-play small' href="+ListUrl+" title='Play'></a></figure><div class='bh-hover-meta clearfix'><h3 itemprop='headline' class='bh-title name'> <a itemprop='url' data-pjax rel='bookmark' href="+ListUrl+"><span itemprop='name'>"+d+"</span></a></h3><div class='bh-hover-meta-footer bh-fb-round'></div></div></div>",
document.write(c))}document.write("</div>")};
var ListCountupcoming=5,TitleCount=90,ImageSize=200;
function bollywoodmovies(b){document.write('<div class="bh-in-theatres-slider">');document.write('<div class="row">');for(var a=0;a<ListCountupcoming;a++){f=movieUrl=movieTitle=f=ListContent=ListConten=ListAuthor=ListTag=ListDate=ListUpdate=ListComments=thumbUrl=TotalPosts=sk=AuthorPic=ListMonth=Y=D=M=m=YY=DD=MM=mm=TT="";if(null!=b.feed.entry[a].category)for(var c=0;c<b.feed.entry[a].category.length;c++)ListTag+="<a href='/search/label/"+b.feed.entry[a].category[c].term+"'>"+b.feed.entry[a].category[c].term+
"</a>",c<b.feed.entry[a].category.length-1&&(ListTag+=" ");for(c=0;c<b.feed.entry[a].link.length&&"alternate"!=b.feed.entry[a].link[c].rel;c++);movieUrl="'"+b.feed.entry[a].link[c].href+"'";TotalPosts=b.feed.openSearch$totalResults.$t;null!=b.feed.entry[a].title&&(movieTitles=b.feed.entry[a].title.$t,movieTitle=movieTitles.substring(0,movieTitles.indexOf("-")));b.feed.entry[a].thr$total&&(ListComments="<a href='"+b.feed.entry[a].link[c].href+"#comment-form'>"+b.feed.entry[a].thr$total.$t+"</a>");
ListAuthor=b.feed.entry[a].author[0].name.$t.split(" ");ListAuthor=ListAuthor.slice(0,1).join(" ");AuthorPic=b.feed.entry[a].author[0].gd$image.src;ListMonth="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");ListDate=b.feed.entry[a].published.$t.substring(0,10);Y=ListDate.substring(0,4);m=ListDate.substring(5,7);D=ListDate.substring(8,10);M=ListMonth[parseInt(m-1)];ListUpdate=b.feed.entry[a].updated.$t.substring(0,16);YY=ListUpdate.substring(0,4);mm=ListUpdate.substring(5,7);DD=ListUpdate.substring(8,
10);TT=ListUpdate.substring(11,16);MM=ListMonth[parseInt(mm-1)];if(null!=b.feed.entry[a].media$thumbnail)thumbUrl=b.feed.entry[a].media$thumbnail.url,sk=thumbUrl.replace("/s72-c/","/s"+ImageSize+"/"),f="'"+sk.replace("?imgmax=800","")+"'";else if(null!=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)){if(c=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(),11==c.length)var f="'//img.youtube.com/vi/"+c+"/0.jpg'"}else f=null!=b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)?
b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]:"'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'";null!=b.feed.entry[a].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/)&&(rk=b.feed.entry[a].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/));c=(""+rk).replace(/<\/?(span|div|img|p...)\b[^<>]*>/g,"");c=new Date(c);var e=new Date,h=c.getMonth()+1,k=c.getFullYear(),g=e.getMonth()+1,l=e.getFullYear();currentdte=
11==g?new Date(e.getFullYear()+1,0,1):new Date(e.getFullYear(),e.getMonth()+1,1);nextyear=currentdte.getFullYear();nextmonth=currentdte.getMonth()+1;var n=c.getTime();e=e.getTime();c.getMonth();d=c.getDate();h<=g&&k<=l&&n<e&&document.write("<div class='bh-movie-box hentry large-3 medium-3 small-3 columns'><figure itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject' class='bh-thumb'><a href="+movieUrl+" title='"+movieTitle+"' class='image'><img width='165' height='212' src='https://1.bp.blogspot.com/-UmT6HctTuSw/WzKAal2u49I/AAAAAAAAAAM/sS13Wn9nHpU784JnZ0qjdJrJvBCFD5k7gCLcBGAs/s1600/loader-wht-bg.jpg' data-lazy-type='image' data-lazy-src="+
f+" class='lazy lazy-hidden image  wp-post-image'  src="+f+" class='image wp-post-image' title='"+movieTitle+"'></img></a></figure><div class='movie-meta clearfix pointer'><h3 itemprop='name' class='entry-title name'> <a itemprop='url' data-pjax href="+movieUrl+" title='"+movieTitle+"'>"+movieTitle+"</a></h3> </div></div>")}document.write("</div>");document.write("</div>")};
var ListCountupcoming=999;
function Firstlook(b){document.write('<div class="slick-slider bh-first-look-slider">');for(var a=0;a<ListCountupcoming;a++){e=movieUrl=movieTitle=e=ListContent=ListConten=ListAuthor=ListTag=ListDate=ListUpdate=ListComments=thumbUrl=TotalPosts=sk=AuthorPic=ListMonth=Y=D=M=m=YY=DD=MM=mm=TT="";if(null!=b.feed.entry[a].category)for(var c=0;c<b.feed.entry[a].category.length;c++)ListTag+="<a href='/search/label/"+b.feed.entry[a].category[c].term+"'>"+b.feed.entry[a].category[c].term+"</a>",c<b.feed.entry[a].category.length-
1&&(ListTag+=" ");for(c=0;c<b.feed.entry[a].link.length&&"alternate"!=b.feed.entry[a].link[c].rel;c++);movieUrl="'"+b.feed.entry[a].link[c].href+"'";TotalPosts=b.feed.openSearch$totalResults.$t;null!=b.feed.entry[a].title&&(movieTitles=b.feed.entry[a].title.$t,movieTitle=movieTitles.substring(0,movieTitles.indexOf("-")));b.feed.entry[a].thr$total&&(ListComments="<a href='"+b.feed.entry[a].link[c].href+"#comment-form'>"+b.feed.entry[a].thr$total.$t+"</a>");ListAuthor=b.feed.entry[a].author[0].name.$t.split(" ");
ListAuthor=ListAuthor.slice(0,1).join(" ");AuthorPic=b.feed.entry[a].author[0].gd$image.src;ListMonth="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");ListDate=b.feed.entry[a].published.$t.substring(0,10);Y=ListDate.substring(0,4);m=ListDate.substring(5,7);D=ListDate.substring(8,10);M=ListMonth[parseInt(m-1)];ListUpdate=b.feed.entry[a].updated.$t.substring(0,16);YY=ListUpdate.substring(0,4);mm=ListUpdate.substring(5,7);DD=ListUpdate.substring(8,10);TT=ListUpdate.substring(11,16);MM=ListMonth[parseInt(mm-
1)];if(null!=b.feed.entry[a].media$thumbnail)thumbUrl=b.feed.entry[a].media$thumbnail.url,sk=thumbUrl.replace("/s72-c/","/s"+ImageSize+"/"),e="'"+sk.replace("?imgmax=800","")+"'";else if(null!=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)){if(c=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(),11==c.length)var e="'//img.youtube.com/vi/"+c+"/0.jpg'"}else e=null!=b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)?b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]:
"'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'";null!=b.feed.entry[a].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/)&&(rk=b.feed.entry[a].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/));c=(""+rk).replace(/<\/?(span|div|img|p...)\b[^<>]*>/g,"");c=new Date(c);var d=new Date;c.getMonth();c.getFullYear();var f=d.getMonth()+1;d.getFullYear();currentdte=11==f?new Date(d.getFullYear()+1,0,1):new Date(d.getFullYear(),d.getMonth()+
1,1);nextyear=currentdte.getFullYear();nextmonth=currentdte.getMonth()+1;c.getTime();d.getTime();c.getMonth();document.write("<div class='single-slick-slide' itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'> <a data-pjax role='link' title='"+movieTitle+"' href="+movieUrl+"> <img width='352' height='458' src="+e+" class='attachment-bh_352_458 size-bh_352_458' alt='"+movieTitle+"' /><meta itemprop='url' content="+movieUrl+" /><meta itemprop='width' content='352' /><meta itemprop='height' content='458' /> </a></div>")}document.write("</div>")};
var ListFirstlookF=6;
function firstlookinfocus(b){document.write("<ul class='video-listing-slider clear-both no-bullet'>");for(var a=0;a<ListFirstlookF;a++){d=movieUrl=movieTitle=d=ListContent=ListConten=ListAuthor=ListTag=ListDate=ListUpdate=ListComments=thumbUrl=TotalPosts=sk=AuthorPic=ListMonth=Y=D=M=m=YY=DD=MM=mm=TT="";if(null!=b.feed.entry[a].category)for(var c=0;c<b.feed.entry[a].category.length;c++)ListTag+="<a href='/search/label/"+b.feed.entry[a].category[c].term+"'>"+b.feed.entry[a].category[c].term+"</a>",c<
b.feed.entry[a].category.length-1&&(ListTag+=" ");for(c=0;c<b.feed.entry[a].link.length&&"alternate"!=b.feed.entry[a].link[c].rel;c++);movieUrl="'"+b.feed.entry[a].link[c].href+"'";TotalPosts=b.feed.openSearch$totalResults.$t;null!=b.feed.entry[a].title&&(movieTitles=b.feed.entry[a].title.$t,movieTitle=movieTitles.substring(0,movieTitles.indexOf("-")));b.feed.entry[a].thr$total&&(ListComments="<a href='"+b.feed.entry[a].link[c].href+"#comment-form'>"+b.feed.entry[a].thr$total.$t+"</a>");if(null!=
b.feed.entry[a].media$thumbnail)thumbUrl=b.feed.entry[a].media$thumbnail.url,d=thumbUrl.replace("/s72-c/","/w"+ImagewSize+"/"),movieImage1=thumbUrl.replace("/s72-c/","/w"+ImageSizeF1+"/"),movieImage2=thumbUrl.replace("/s72-c/","/w"+ImageSizeF2+"/"),movieImage3=thumbUrl.replace("/s72-c/","/w"+ImageSizeF3+"/");else if(null!=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)){if(c=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(),11==c.length)var d=
"'//img.youtube.com/vi/"+c+"/0.jpg'"}else d=null!=b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)?b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]:"'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'";null!=b.feed.entry[a].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/)&&(rk=b.feed.entry[a].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/));document.write("<li class='bh-vl-slide'><div class='video-block'><figure itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'><a data-pjax href="+
movieUrl+"><img width='346' height='260' src='https://3.bp.blogspot.com/-nFqnJG59ez4/Ww6pTTI2qeI/AAAAAAAAAoA/QqqyDqIoIAI1oGU5VpUUygUD6c73-nKfQCLcBGAs/s1600/1x1.trans.gif' class='image  wp-post-image' alt="+movieTitle+" data-lazy-src="+d+" itemprop='image url' role='img' title='"+movieTitle+"' srcset='"+d+" 346w,"+movieImage1+" 196w, "+movieImage2+" 225w, "+movieImage3+" 480w' ></img><meta itemprop='url' content="+d+" /><meta itemprop='width' content='346' /><meta itemprop='height' content='260' /></a></figure><div class='video-title'><h3 itemprop='headline' class='entry-title name'><a data-pjax href="+
movieUrl+" title='"+movieTitles+"'>"+movieTitles+"</a></h3></div></div></li>")}document.write("</ul>")};
var ListFirstlook=50;
function Firstlook2(b){for(var a=0;a<ListFirstlook;a++){d=movieUrl=movieTitle=d=ListContent=ListConten=ListAuthor=ListTag=ListDate=ListUpdate=ListComments=thumbUrl=TotalPosts=sk=AuthorPic=ListMonth=Y=D=M=m=YY=DD=MM=mm=TT="";if(null!=b.feed.entry[a].category)for(var c=0;c<b.feed.entry[a].category.length;c++)ListTag+="<a href='/search/label/"+b.feed.entry[a].category[c].term+"'>"+b.feed.entry[a].category[c].term+"</a>",c<b.feed.entry[a].category.length-1&&(ListTag+=" ");for(c=0;c<b.feed.entry[a].link.length&&
"alternate"!=b.feed.entry[a].link[c].rel;c++);movieUrl="'"+b.feed.entry[a].link[c].href+"'";TotalPosts=b.feed.openSearch$totalResults.$t;null!=b.feed.entry[a].title&&(movieTitles=b.feed.entry[a].title.$t,movieTitle=movieTitles.substring(0,movieTitles.indexOf("-")));b.feed.entry[a].thr$total&&(ListComments="<a href='"+b.feed.entry[a].link[c].href+"#comment-form'>"+b.feed.entry[a].thr$total.$t+"</a>");if(null!=b.feed.entry[a].media$thumbnail)thumbUrl=b.feed.entry[a].media$thumbnail.url,sk=thumbUrl.replace("/s72-c/",
"/s"+ImageSize+"/"),d="'"+sk.replace("?imgmax=800","")+"'";else if(null!=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)){if(c=b.feed.entry[a].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(),11==c.length)var d="'//img.youtube.com/vi/"+c+"/0.jpg'"}else d=null!=b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)?b.feed.entry[a].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]:"'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'";
null!=b.feed.entry[a].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/)&&(rk=b.feed.entry[a].content.$t.match(/<span[^>]+class="matchthis"[^>]*>[^>]*<\/span>/));document.write("<div class='photo-block grid-sizer photo-listing-grid-item'><figure itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'> <a data-pjax href="+movieUrl+"><img width='255' height='340' src="+d+" class='attachment-bh_255_auto size-bh_255_auto srcset='"+d+" 255w, "+d+" 225w, "+d+" 149w, "+
d+" 322w, "+d+" 585w' sizes='(max-width: 255px) 100vw, 255px'></img><meta itemprop='url' content="+d+" /><meta itemprop='width' content='255' /><meta itemprop='height' content='340' /></a> </figure><h3 itemprop='headline' class='entry-title name'><a data-pjax href="+movieUrl+" title='"+movieTitles+"'>"+movieTitles+"</a></h3></div>")}};

function update(json) { for (var i = 0; i < json.feed.entry.length; i++) { var date = json.feed.updated.$t; }
var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var month2 = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];
var day = date.split("-")[2].substring(0, 2);
var m = date.split("-")[1];
var year = date.split("-")[0];
for (var u2 = 0; u2 < month.length; u2++) {
if (parseInt(m) == month[u2]) {
m = month2[u2];
break;
}
}
date = day + ' ' + m + ' ' + year;
var time = "Last Updated " +date+ ""; document.write(time); } 

var newscount = 8;
var ImagewSize = "346-h260-p-nu"; 
var ImageSizeF1 = "196-h147-p-nu";
var ImageSizeF2 = "255-h191-p-nu";
var ImageSizeF3 = "480-h360-p-nu";
var ImageSizeF4 = "716-h537-p-nu";

function movienews(json)
{ 
document.write('<div class="bh-top-slider">');
for (var i = 0; i < newscount ; i++)
{  

var listing= movieImage = movieUrl = movieTitle = movieImage = ListContent = ListConten = ListAuthor = ListTag = ListDate = ListUpdate = ListComments = thumbUrl = TotalPosts = sk = AuthorPic= ListMonth = Y = D = M = m = YY = DD = MM = mm = TT =  ""; 

if (json.feed.entry[i].published.$t !=null)
{
entryPublished=json.feed.entry[i].published.$t;
/*var DURATION_IN_SECONDS = {
  epochs: ['year', 'month', 'day', 'hour', 'minute'],
  year: 31536000,
  mon<!-- th: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60
};

function getDuration(seconds) {
  var epoch, interval;

  for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i++) {
    epoch = DURATION_IN_SECONDS.epochs[i];
    interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
    if (interval >= 1) {
      return {
        interval: interval,
        epoch: epoch
      };
    }
  }

};

function timeSince(date) {
  var seconds = Math.floor((new Date() - new Date(date)) / 1000);
  var duration = getDuration(seconds);
  var suffix = (duration.interval > 1 || duration.interval === 0) ? 's' : '';
  return duration.interval + ' ' + duration.epoch + suffix;
};

var showtime= timeSince(entryPublished);*/ 
}

if (json.feed.entry[i].updated.$t !=null)
{
entryUpdated=json.feed.entry[i].updated.$t;
}


for (var j = 0; j < json.feed.entry[i].link.length; j++) { 
      if (json.feed.entry[i].link[j].rel == 'alternate') { 
        break; 
      } 
    } 
movieUrl= "'" + json.feed.entry[i].link[j].href + "'"; 
var postTitle = json.feed.entry[i].title.$t;

TotalPosts = json.feed.openSearch$totalResults.$t; 
if (json.feed.entry[i].title!= null) 
{ 
movieTitles= json.feed.entry[i].title.$t; 
movieTitle= movieTitles.substring(0, movieTitles.indexOf('-'));
}

if (json.feed.entry[i].media$thumbnail!=null) 
{ 
thumbUrl = json.feed.entry[i].media$thumbnail.url; 
movieImage= thumbUrl.replace("/s72-c/","/w"+ImagewSize+"/"); 
movieImage1= thumbUrl.replace("/s72-c/","/w"+ImageSizeF1+"/"); 
movieImage2= thumbUrl.replace("/s72-c/","/w"+ImageSizeF2+"/");
movieImage3= thumbUrl.replace("/s72-c/","/w"+ImageSizeF3+"/");
movieImage4= thumbUrl.replace("/s72-c/","/w"+ImageSizeF4+"/");

}

else 
{ 
movieImage= "'https://4.bp.blogspot.com/-HALLtgFeep0/VfryhQ0C5oI/AAAAAAAAPcY/77mSGND4q84/s200/Icon.png'"; 
} 

 for (var z = 0; z < json.feed.entry[i].category.length; z++) { 
      if (json.feed.entry[i].category[z].term == "Bollywood Hungama") {
var Desk = "Bollywood Hungama";
var Dprint = "<div class='bh-cat bg-blue'><a href='/search/label/News'>"+Desk+"</a></div>"
var Dlogo = "bh_desk";
} 

}

 for (var z = 0; z < json.feed.entry[i].category.length; z++) { 
      if (json.feed.entry[i].category[z].term == "Youtube") {
var Desk = "Youtube";
var Dprint = "<div class='bh-cat bg-yellow'><a href='/search/lable/News'>"+Desk+"</a></div>"
var Dlogo = "yt_desk";
} 

}

 for (var z = 0; z < json.feed.entry[i].category.length; z++) { 
      if (json.feed.entry[i].category[z].term == "News Desk") {
var Desk = "Filmsbit News Desk";
var Dprint = "<div class='bh-cat bg-yellow'><a href='/search/lable/News'>"+Desk+"</a></div>"
var Dlogo = "fb_desk";
} 

}

 for (var z = 0; z < json.feed.entry[i].category.length; z++) { 
      if (json.feed.entry[i].category[z].term == "Times Now News") {
var Desk = "Times Now News";
var Dprint = "<div class='bh-cat bg-yellow'><a href='/search/lable/News'>"+Desk+"</a></div>"
var Dlogo = "tn_desk";
} 

}
for (var z = 0; z < json.feed.entry[i].category.length; z++) { 
      if (json.feed.entry[i].category[z].term == "TOI") {
var Desk = "Times of India";
var Dprint = "<div class='bh-cat bg-yellow'><a href='/search/lable/News'>"+Desk+"</a></div>"
var Dlogo = "toi_desk";
} 

}

for (var z = 0; z < json.feed.entry[i].category.length; z++) { 
      if (json.feed.entry[i].category[z].term == "Deadline") {
var Desk = "Deadline";
var Dprint = "<div class='bh-cat bg-yellow'><a href='/search/lable/News'>"+Desk+"</a></div>"
var Dlogo = "Deadline_desk";
} 

}


var printsong= "<div class='large-4 medium-6 small-12 columns hentry '><div class='grid-container clearfix adBlockbhnew' itemtype='https://schema.org/Article'><div class='bh-grid-post-container'><div class='bh-grid-post-content'><figure itemprop='image' itemtype='https://schema.org/ImageObject'> <a href="+movieUrl+" title='"+movieTitles+"'> <img class='image  wp-post-image' data-lazy-src="+movieImage+" height='40px' role='img' sizes='(max-width: 240px) 100vw, 240px' src='https://3.bp.blogspot.com/-nFqnJG59ez4/Ww6pTTI2qeI/AAAAAAAAAoA/QqqyDqIoIAI1oGU5VpUUygUD6c73-nKfQCLcBGAs/s1600/1x1.trans.gif' srcset='"+movieImage+" 346w, "+movieImage1+" 196w, "+movieImage2+" 255w, "+movieImage3+" 480w, "+movieImage4+" 716w' title='"+movieTitles+"' width='346'/><meta content=' itemprop='url'/><meta content='346' itemprop='width'/><meta content='260' itemprop='height'/> </a></figure><div class='bh-content'>"+Dprint+"<div class='bh-title'><h2 class='entry-title name' itemprop='headline'> <a href="+movieUrl+" itemprop='url' title='"+movieTitles+"'> <span itemprop='name'>"+movieTitles+"</span> </a></h2> <span class='icon-rss "+Dlogo+"'/></div><div class='hide vcard' itemprop='author' itemtype='https://schema.org/Person'> <span class='fn' itemprop='name' rel='author'>Filmsbit News Network</span></div><meta content='"+entryPublished+"' itemprop='datePublished'/><meta content='"+entryUpdated+"' itemprop='dateModified'/><meta itemType='https://schema.org/WebPage' itemid='"+movieTitles+"' itemprop='mainEntityOfPage'/><div class='hide' itemprop='publisher' itemtype='https://schema.org/Organization'><div itemprop='logo' itemtype='https://schema.org/ImageObject'><meta content='https://3.bp.blogspot.com/-_v7GLFU0eEw/W9dJr9--yqI/AAAAAAAABUE/FDMaRuotAR0QbvlU1ZRYkCZVo5XJLFo-gCLcBGAs/s1600/filmsbit_logo.png' itemprop='url'/><meta content='210' itemprop='width'/><meta content='58' itemprop='height'/></div><meta content='Filmsbit' itemprop='name'/></div></div></div></div></div></div>";
document.write(printsong);
}

}
