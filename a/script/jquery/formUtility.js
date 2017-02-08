;(function($) {

	var plugname = 'formUtility';

	var methods = {

		init : function(params){return this;},

		/**
		 * function numberFormat
		 *
		 */
		numberFormat : function(params){

			var elements = this;

			// カンマ区切りメソッド
			var addFigure = function(str) {
				var num = new String(str).replace(/,/g, "");
				while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
				return num;
			};

			elements.each(function() {

				// ロード時
				$(this).val(
					addFigure($(this).val())
				);
				// フォーカスアウト時
				$(this).blur( function () {
					$(this).val(addFigure($(this).val()));
				});
				// フォーカス時
				$(this).focus( function () {
					$(this).val($(this).val().split(",").join(""));
				});
			});

			return this;
		}

	};
	
	$.fn[plugname] = function(method) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.' + plugname );
			return this;
		}
	};
})(jQuery);