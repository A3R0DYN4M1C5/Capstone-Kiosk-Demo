var weatherBalloon = function( cityID ) {
    var key = 'd3a920ea368b3e588313501472b1f820';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data); // Call drawWeather
	})
	.catch(function() {
		// catch any errors
	});
  }
  
function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	var description = d.weather[0].description;
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
	
	if( description.indexOf('rain') > 0 ) {
  	document.div.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.div.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.div.className = 'sunny';
  }
}


  window.onload = function() {
    weatherBalloon( 5128581 );
  }