function ShowValue() {
	var v = document.getElementById("search_location").value;
	if (v == "大安") {
		v = "大安森林公園";
	}
	alert(v);
	$.getJSON("https://spreadsheets.google.com/feeds/list/1I2UEVDgoqUdLBVNCQUMcpq_k1oamSyzkkK7auiz1w2U/1/public/values?alt=json-in-script&callback=?&q=" + document.getElementById("search_location").value, function(json) {
		console.log("https://spreadsheets.google.com/feeds/list/1I2UEVDgoqUdLBVNCQUMcpq_k1oamSyzkkK7auiz1w2U/1/public/values?alt=json-in-script&callback=?&q=" + v);
		var e = json.feed.entry,
			l = e.length,
			html = "",
			entry, i, area, location, station, comment, temperature, rain, AQI, PM2, AQI_affect, PM2_5_affect
		for (i = 0; i < l; i++) {
			entry = e[i];
			area = entry.gsx$area.$t;
			location = entry.gsx$location.$t;
			station = entry.gsx$station.$t;
			comment = entry.gsx$comment.$t;
			temperature = entry.gsx$temperature.$t;
			rain = entry.gsx$rain.$t;
			aqi = entry.gsx$aqi.$t;
			pm2 = entry.gsx$pm2.$t;
			aqiaffect = entry.gsx$aqiaffect.$t;
			pm2affect = entry.gsx$pm2affect.$t;
			// html += area + " " + location + " " + station + " " + comment + " " + temperature  + " " + rain+ " " +aqi+" "+ pm2+ " " + aqiaffect+ " "+ pm2affect+"<br/>";
			html += "<br/>" + "目前溫度: " + temperature + "<br/>" + "降雨機率: " + rain + "%" + "<br/>" + "AQI空氣汙染指標: " + aqi + aqiaffect + "<br/>" + "PM2.5: " + pm2 + pm2affect + "<br/><br/>跑友這麼說...<br/>" + comment + "let's run";
		}
		$("#test").html(html);
	});
}
