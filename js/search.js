$(document).ready(function(){
	var url="https://spreadsheets.google.com/feeds/list/1I2UEVDgoqUdLBVNCQUMcpq_k1oamSyzkkK7auiz1w2U/1/public/values?alt=json-in-script&callback=?";
	var search_location;
							
	$("button").click(function(){
		search_location=$("#search_location").val();
		}),
		$.getJSON(url+"&q"+search_location, function(json){
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
			html += area + " " + location + " " + station + " " + comment + " " + temperature  + " " + rain+ " " +aqi+" "+ pm2+ " " + aqiaffect+ " "+ pm2affect+"<br/>";
			}
		$("#info").html(html);
	});
}
