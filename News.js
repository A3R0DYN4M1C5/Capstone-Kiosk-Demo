
var NewsData = new XMLHttpRequest();
NewsData.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        var lines = this.responseText.split("\n");
        var strOut = "<h1> News </h1>";
        strOut += "<ul>";
        for(i=1; i<lines.length-1; i++){
            var field = lines[i].split(",");
            strOut += "<li><a href='" + field[1];
            strOut += "...' target='_blank'>" + field[0];
            strOut += "</a></li>";            
        }
        strOut += "</ul>";
        document.getElementById("output").innerHTML = strOut;
    }
};
    NewsData.open("GET","News.csv", true);
    NewsData.send();
 