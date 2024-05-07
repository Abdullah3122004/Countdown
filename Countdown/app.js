var days_html= document.getElementById("days")
var hours_html= document.getElementById("hours")
var mins_html= document.getElementById("mins")
var secs_html= document.getElementById("secs")

 
 
     var now = new Date();
     var BakraEid = new Date("6/17/2024");
     
     
     var diff = BakraEid.getTime() - now.getTime() ;
     

     setInterval(function () {
     var currentdate= new Date() 
     diff = diff-1000
     var days = diff / 1000 / 60 / 60 / 24;
     var hours = 24 - currentdate.getHours()
     var mins = 60 - currentdate.getMinutes()
      var secs = 60 - currentdate.getSeconds()
     
     days_html.innerText= Math.floor(days)
     hours_html.innerText= Math.floor(hours)
     mins_html.innerText= Math.floor(mins)
     secs_html.innerText= Math.floor(secs)

     
  }, 1000);