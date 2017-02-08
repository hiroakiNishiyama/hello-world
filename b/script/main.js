/*! LBI定数を記述します */
// ホームURL
// var lbi_home = "http://localhost:8080/lakeelbi"; // localhost
// var lbi_home = "http://172.16.11.206:8080/lakeelbi"; // 西山PC
// var lbi_home = "http://172.16.11.146:8080/lakeelbi"; // LAI共有サーバ
	var lbi_home = "http://172.16.11.19:8080/lakeelbi"; // 本田さんサーバ

// SPCレポートURL
var SPC_report = "&ParentFolderUri=%2Fpublic%2Febara%2Freport%2Frra01%2F02&reportUnit=%2Fpublic%2Febara%2Freport%2FSPC_report";
// SPC_PDF_URL_ORIGINAL
var spc_pdf_url_org  = lbi_home + "/rest_v2/reports/public/ebara/report/SPC_report.pdf?j_username=superuser&j_password=superuser";
// SPC_PDF_URL
var spc_pdf_url  = "";

// 入力コントロールURL
var param_kokyaku_name = "&kokyaku_name=";
var param_pro_cd = "&pro_cd=";


/*! メインを記述します */
jQuery(document).ready(function(){

	// tabindex=1の要素にfocusをあてる
	$("[tabindex = '1']").focus();

	// 微生物カルテPDF出力ボタンを取得
	getSpcBtn = $("#getSpcBtn");
	// 顧客名入力フォームを取得
	crientName = $("#crientName");
	// 製品コード入力フォームを取得
	productCode = $("#productCode");

});

$(function(){
	var list = $("input");
	for(var i=0; i<list.length; i++){

		list[i].onkeyup = function(){
			var check = checkForm();
			if(check==0){
				console.log("check OK.");
				getSpcBtn.animate(
				{
					'color': '#FFFFFF',
  					'backgroundColor': '#e10000'
				}, 50);
				$("#getSpcBtn").prop('disabled', false);
			}else{
				console.log("check not OK.");
				$("#getSpcBtn").animate(
				{
					'color': '#F2F2F2',
					'backgroundColor': '#D8D8D8'
				}, 50);
				$("#getSpcBtn").prop('disabled', true);
			}
		};

		if(list[i].type == 'text'){
			list[i].onkeypress = function (event){
				if (event.keyCode == 13) {
					getSpcBtn.click();
				};
			};
		}
	}
});

function getSpcPdf(){
	var check = checkForm();
	if(check==0){
		spc_pdf_url = spc_pdf_url_org + param_kokyaku_name + encodeURIComponent($('#crientName').val()) + param_pro_cd + encodeURIComponent($('#productCode').val());
		console.info("SPCのPDFをダウンロードするURL : " + spc_pdf_url);
		console.info("選択された製品 : " + $('#productCode').val());
		// window.location.href = spc_pdf_url;
	}else if(check==1){
		alert("項目が未入力です");
	}else if(check==2){
		alert("顧客名が未入力です");
	}else if(check==3){
		alert("製品コードが未入力です");
	}
}

function checkForm(){
	if($('#crientName').val() == "" && $('#productCode').val() == ""){
		return 1;
	}else if($('#crientName').val() == ""){
		return 2;
	}else if($('#productCode').val() == ""){
		return 3;
	}else{
		return 0;
	}
}
