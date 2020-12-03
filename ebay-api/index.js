$("#submit-to-ebay").click(function(){
	var q = $("#query").val();
	$("#ajaxLoad").html('<b>Loading</b><marquee direction="right">...............</marquee>');

	$.ajax({
		type: "POST",
		url: 'http://open.api.ebay.com/shopping?callname=FindItemsAdvanced',
		dataType: "jsonp",
		jsonp: "callbackname",
		crossDomain: true,
		data: {
			'appid': /* register for an account: https://developer.ebay.com/docs#Brs, and youll find this in your application keys section  */,
			'version': '771',
			'siteid': '0',
			'requestencoding': 'JSON',
			'responseencoding': 'JSON',
			'QueryKeywords': q,
			'MaxEntries': '3',
			'PriceMin' : { 'Value' : '250.0', 'CurrencyID' : 'USD'},
			'PriceMax' : { 'Value' : '300.0', 'CurrencyID' : 'USD'},
			'callback' : true
		},
		success: function(object) {
			console.log(object);

			var items = object.SearchResult[0].ItemArray.Item;
			var itemIds = items.map((item) => {
				return item.ItemID;
			});

			itemIds.forEach((itemId) => {
					var ebayApiUrl = "http://open.api.ebay.com/shopping?callname=GetSingleItem"
				 $.ajax({
					 type: 'POST',
					 url: ebayApiUrl,
					 dataType: "jsonp",
			 		 jsonp: "callbackname",
			 		 crossDomain: true,
			 		 data: {
			 			'appid': /* register for an account: https://developer.ebay.com/docs#Brs, and youll find this in your application keys section  */,
			 			'siteid': '0',
						'version': '967',
						'ItemID': itemId,
			 			'requestencoding': 'JSON',
			 			'responseencoding': 'JSON',
			 			'callback' : true
			 		 },
					 statusCode: {
							 200: function() {
									 console.log("success");
							 }
					 },
					 success: function(imageRes){
						 console.log(imageRes)
					 }
				})
			});

			$("#ajaxLoad").html('');
			$("#ebay-response").val(JSON.stringify(object,null,4));
		},
		error: function(object,x,errorThrown) {
			console.log(errorThrown);
			$("#ajaxLoad").html('');
			alert("call failure");
			$("#ebay-response").val(JSON.stringify(errorThrown,null,4));
		}
	});

});
