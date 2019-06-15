let weather =
	'{"query":{"count":1,"created":"2018-03-28T00:57:28Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Sydney, NSW, AU","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","description":"Yahoo! Weather for Sydney, NSW, AU","language":"en-us","lastBuildDate":"Wed, 28 Mar 2018 11:57 AM AEDT","ttl":"60","location":{"city":"Sydney","country":"Australia","region":" NSW"},"wind":{"chill":"77","direction":"0","speed":"11"},"atmosphere":{"humidity":"56","pressure":"1013.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"7:5 am","sunset":"6:56 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Sydney, NSW, AU at 11:00 AM AEDT","lat":"-33.856281","long":"151.020966","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","pubDate":"Wed, 28 Mar 2018 11:00 AM AEDT","condition":{"code":"32","date":"Wed, 28 Mar 2018 11:00 AM AEDT","temp":"77","text":"Sunny"},"forecast":[{"code":"32","date":"28 Mar 2018","day":"Wed","high":"83","low":"57","text":"Sunny"},{"code":"32","date":"29 Mar 2018","day":"Thu","high":"85","low":"61","text":"Sunny"},{"code":"30","date":"30 Mar 2018","day":"Fri","high":"85","low":"64","text":"Partly Cloudy"},{"code":"30","date":"31 Mar 2018","day":"Sat","high":"75","low":"66","text":"Partly Cloudy"},{"code":"30","date":"01 Apr 2018","day":"Sun","high":"90","low":"62","text":"Partly Cloudy"},{"code":"30","date":"02 Apr 2018","day":"Mon","high":"83","low":"66","text":"Partly Cloudy"},{"code":"30","date":"03 Apr 2018","day":"Tue","high":"75","low":"65","text":"Partly Cloudy"},{"code":"30","date":"04 Apr 2018","day":"Wed","high":"74","low":"63","text":"Partly Cloudy"},{"code":"30","date":"05 Apr 2018","day":"Thu","high":"81","low":"61","text":"Partly Cloudy"},{"code":"34","date":"06 Apr 2018","day":"Fri","high":"77","low":"62","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false"}}}}}}'

// change JSON object to javascrip string object
var weatherJSON = JSON.parse(weather)
// console.log(weatherJSON)
let weather_location = weatherJSON.query.results.channel.location
// console.log(weather_location)
let forecast = weatherJSON.query.results.channel.item.forecast // forecast results array
// console.log(forecast)

// Logging Sunrise and Sunset
let sunrise = weatherJSON.query.results.channel.astronomy.sunrise
let sunset = weatherJSON.query.results.channel.astronomy.sunset

console.log(`The sun rises on ${weather_location.city} at ${sunrise}.`)
console.log(`The sun sets on ${weather_location.city} at ${sunset}.`)

// for managing displaying the result 
const weatherList = document.querySelector(".weatherList") // in list
weatherList.setAttribute("class", "list-group")

const weatherTable = document.querySelector(".weatherTable-body") // in table

// Display weekly weather

// version 1 - unsuccessful
// const weekWeather = forecast => {
// 	for (var i = 0; i < forecast.length; i++) {
// 		let highTemp = forecast[i].high
// 		let lowTemp = forecast[i].low
// 		let date = forecast[i].date
// 		let day = forecast[i].day
// 		console.log("hey")
// 		console.table(day, date, lowTemp, highTemp)
// 	}
// }

// Fahrenheit to Celsius function
function fahrenheit_to_celsius(fahrenheit) {
	let celsius = (fahrenheit - 32) * (5 / 9)
	return celsius
}

// version 2
// Display temperature on Console and on DOM
function weeklyWeather(forecast) {
	for (var i = 0; i < forecast.length; i++) {
		let highTemp = forecast[i].high
		let lowTemp = forecast[i].low
		let date = forecast[i].date
		let day = forecast[i].day

		// convert temperature to celsius
		let highTemp_celsius = Math.floor(fahrenheit_to_celsius(highTemp))
		let lowTemp_celsius = Math.floor(fahrenheit_to_celsius(lowTemp))

		// display the weather summary for each day on the console
		console.log(
			`On ${day}, ${date}, the temperature in ${weather_location.city}, ${
				weather_location.country
			} ranged from ${highTemp_celsius} to ${lowTemp_celsius}.`
		)

		// display the average temperature for each day on the console
		let average_celsius = (highTemp_celsius + lowTemp_celsius) / 2
		console.log(`Average temperature is ${Math.floor(average_celsius)}`)
		console.log("")

		// display each result on page as a li
		let paragraph = document.createElement("li")
		paragraph.setAttribute("class", "list-group-item")
		paragraph.innerText = "The temperature ranged from " + highTemp_celsius + " to " + lowTemp_celsius
		weatherList.appendChild(paragraph)
	}

	function generateTable(forecast) {
		let table = document.createElement("table")
		let tableBody = document.createElement("tbody")

		for (let i = 0; i < forecast.length; i++) {
			// creates a row for each element in forecast

		}
	}
}
console.log(forecast)
weeklyWeather(forecast)
generateTable(forecast)