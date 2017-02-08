jQuery(function($){
	$.datepicker.regional['ja'] = {
		closeText: '閉じる',
		prevText: '&#x3C;前',
		nextText: '次&#x3E;',
		currentText: '今日',
		monthNames: ['1月','2月','3月','4月','5月','6月',
		'7月','8月','9月','10月','11月','12月'],
		monthNamesShort: ['1月','2月','3月','4月','5月','6月',
		'7月','8月','9月','10月','11月','12月'],
		dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
		dayNamesShort: ['日','月','火','水','木','金','土'],
		dayNamesMin: ['日','月','火','水','木','金','土'],
		weekHeader: '週',
		dateFormat: 'yy/mm/dd',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '年'};
	$.datepicker.setDefaults($.datepicker.regional['ja']);
});
// 20150722 ADD-S H.Seki
function convert_wareki(y){
	var tmp;
	if (y > 1988) {      //平成
		tmp = y - 1988;
		tmp = 'H' + tmp;
		return tmp;
	}else if (y > 1925) {//昭和
		tmp = y - 1925;
		tmp = 'S' + tmp;
		return tmp;
	}else if (y > 1911) {//大正
		tmp = y - 1911;
		tmp = 'T' + tmp;
		return tmp;
	}else if (y > 1867) {//明治
		tmp = y - 1867;
		tmp = 'M' + tmp;
		return tmp;
	}else{               //該当なし
		return '';
	}
};
//20150722 ADD-E H.Seki

//20161106 ADD-E N.Nishiyama
// $(function() {
// // 毎年書き換える部分 ココカラ
//   /* javascriptのDate関数に与える月は、0〜11であることに注意 */
//   // var minD = new Date(2000,0,1);   //カレンダーでピックアップできる最前の日
//   // var maxD = new Date(2020,11,31); //カレンダーでピックアップできる最後の日
//
//   /*
//    * 祝日・非営業日の定義
//    * （土・日は自動計算）
//    * "yyyyMMdd":{type:?, title:"休日の名前"} を要素とするオブジェクト
//    * type は任意の意味を持たせることが可能
//    * （type:0は国民の祝日、type:1は企業独自の非営業日としている）
//    */
//   var holidays = {
//     "20161111":{type:1, title:"創立記念日"},
//     "20161103":{type:0, title:"文化の日"},
//   };
// // 毎年書き換える部分 ココマデ
//
//   // この例では、"datepicker"というclassを持つテキストフィールドにdatepickerを挿入する
//   $(".datepicker").datepicker({
//     // 選択後にテキストフィールドに入力される日付のフォーマット。
//     dateFormat: "yy/mm/dd",
//     // minDate: minD,
//     // maxDate: maxD,
//     beforeShowDay: function(day) {
//       var result;
//       var holiday = holidays[$.format.date(day, "yyyyMMdd")]
//       // 祝日・非営業日定義に存在するか？
//       if (holiday) {
//         result =  [true, "date-holiday"+holiday.type, holiday.title];
//       } else {
//         switch (day.getDay()) {
//           case 0: // 日曜日か？
//             result = [true, "date-sunday"];
//             break;
//           case 6: // 土曜日か？
//             result = [true, "date-saturday"];
//             break;
//           default:
//             result = [true, ""];
//             break;
//         }
//       }
//       return result;
//     }
//   });
// });
//20161106 ADD-E N.Nishiyama
