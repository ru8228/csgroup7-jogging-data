var data1223 = [0, 1, 10, 5, 7, 1, 0, 0, 0, 0]
var data1221 = [5, 3, 1, 0, 2, 3, 1, 1, 3, 0]
var arr1 = [ data1221, data1223]

window.onload = function () {
	CanvasJS.addColorSet("airColorSet",
							 [//colorSet Array
							 "#9CFF9C",
							 "#31FF00",
							 "#FFFF00",
							 "#FFCF00",
							 "#FF9A00",
							 "#FF6464",
							 "#FF0000",
							 "#990000",
							 "#CE30FF"
							 ]);
	var chart = new CanvasJS.Chart("pieChart-01", {
		title: {
			text: "12/21三重站PM2.5濃度"
		},
		animationEnabled: true,
		colorSet: "airColorSet",
		data: [
		{
			type: "doughnut",
			indexLabelFontFamily: "Garamond",
			indexLabelFontSize: 20,
			startAngle: 0,
			indexLabelFontColor: "dimgrey",
			indexLabelLineColor: "darkgrey",
			toolTipContent: "{y} %",

			dataPoints: [
			{ y: 51.04, indexLabel: "PM2.5 濃度:0-11 {y}%" },
			{ y: 40.83, indexLabel: "PM2.5 濃度:12-23 {y}%" },
			{ y: 3.20, indexLabel: "PM2.5 濃度:24-35 {y}%" },
			{ y: 1.11, indexLabel: "PM2.5 濃度:36-41 {y}%" },
			{ y: 2.29, indexLabel: "PM2.5 濃度:42-47 {y}%" },
			{ y: 1.53, indexLabel: "PM2.5 濃度:48-53 {y}%" }

			]
		}
		]
	});

	chart.render();
}
