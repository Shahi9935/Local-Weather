if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {

  var coods=position.coords.latitude.toString()+","+position.coords.longitude.toString()+"?";
  var units;
  units="units=ca";
  var forcastApiUrl = "https://api.forecast.io/forecast/2f100951a504a2130471e10dff1123de/" + coods + units;
 $.ajax({
				url: forcastApiUrl,
				dataType: "jsonp",
				success: function(data) {
		$("#allover").html(data.currently.summary);
          $("#temp").html("Temp: "+data.currently.temperature+"°C");
          $("#wind").html("Wind Speed: "+data.currently.windSpeed+"kmph");
var z=data.currently.humidity*100;          $("#humidity").html("Humidity: " +z+"%");
          $("#daily-summary").html(data.hourly.summary);
          $("#weekly-summary").html(data.daily.summary);
          
          if(data.currently.hasOwnProperty("icon")) {
		var skycons = new Skycons({"color": "orange"});
		skycons.set("myicon", data.currently.icon);
		skycons.play();
	}
          
	$("#buttF").html("See in Fahrenheit");
				}
		});
   
   $("#buttF").on("click",function(){
     units="units-us";
     var forcastApiUrl = "https://api.forecast.io/forecast/2f100951a504a2130471e10dff1123de/" + coods + units;
     $.ajax({
				url: forcastApiUrl,
				dataType: "jsonp",
				success: function(data) {
		$("#allover").html(data.currently.summary);
          $("#temp").html("Temp: "+data.currently.temperature+"°F");
          $("#wind").html("Wind Speed: "+data.currently.windSpeed+"mph");
var z=data.currently.humidity*100;          $("#humidity").html("Humidity: " +z+"%");
          $("#daily-summary").html(data.hourly.summary);
          $("#weekly-summary").html(data.daily.summary);
	$("#buttC").html("See in Celsius");
				}
		});
     
   });

  
  
  $("#buttC").on("click",function(){
     units="units=ca";
     var forcastApiUrl = "https://api.forecast.io/forecast/2f100951a504a2130471e10dff1123de/" + coods + units;
     $.ajax({
				url: forcastApiUrl,
				dataType: "jsonp",
				success: function(data) {
		$("#allover").html(data.currently.summary);
          $("#temp").html("Temp: "+data.currently.temperature+"°C");
          $("#wind").html("Wind Speed: "+data.currently.windSpeed+"kmph");
var z=data.currently.humidity*100;          $("#humidity").html("Humidity: " +z+"%");
          $("#daily-summary").html(data.hourly.summary);
          $("#weekly-summary").html(data.daily.summary);
	}
		});
     
   });
           




});
}