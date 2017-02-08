// ホームURL
// var lbi_home = "http://localhost:8080/lakeelbi"; // LocalPC
var lbi_home = "http://172.16.11.206:8080/lakeelbi"; // 西山PC
// var lbi_home = "http://192.168.11.12:8080/lakeelbi"; // ラムラ様環境
// var lbi_home = "http://172.16.11.146:8080/lakeelbi"; // LAI共有サーバ
// リポジトリURL
var lbi_repository = "/flow.html?_flowId=searchFlow";
// SPC出力ページURL
var spc = "/flow.html?_flowId=dashboardRuntimeFlow&dashboardResource=%2Fpublic%2Febara%2Fdashboard%2FSPC";

/*! メインを記述します */
jQuery(document).ready(function(){
	// ボタンの遷移先を記述します
	$('#location0').attr("onclick", "location.href='" + lbi_home + lbi_repository + "'");
	$('#location1').attr("onclick", "location.href='" + lbi_home + spc + "'");

	// ボタンのマウスイベントを記述します
	var duration = 300;

	$('#buttons1 button')
	.on('mouseover', function() {
		$(this).stop(true).animate({
			backgroundColor: '#1362b1',
			color: '#fff'
		}, duration);
	})
	.on('mouseout', function(){
		$(this).stop(true).animate({
			backgroundColor: '#fff',
			color: '#b3d4fc'
		}, duration);
	});
});
