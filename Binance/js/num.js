var adaUrl = "wss://stream2.binance.com:9443/ws/adabtc@aggTrade.b10",
	babUrl = "wss://stream2.binance.com:9443/ws/bnbbtc@aggTrade.b10",
	adaConnection = new WebSocket(adaUrl),
	bnbConnection = new WebSocket(babUrl),
	ADA = document.getElementById('ada'),
	BNB = document.getElementById('bnb'),
	NUM = document.getElementById('num');
	n = 2.19,
	number = {ada: 1, bnb: 1};

addSocket('ada');
addSocket('bnb');

function addSocket(coin) {
	window[coin + 'Connection'].onopen = function() {
		console.log(coin + 'open');
	}

	window[coin + 'Connection'].onmessage = function(result) {
		number[coin] = Number(JSON.parse(result.data).p);
		chrome.browserAction.setBadgeText({
			text: String(Math.ceil(n * number.bnb / number.ada))
		});
		NUM.innerHTML = 'NUM: ' + Math.ceil(2.19 * number.bnb / number.ada);
	}
	
	window[coin + 'Connection'].onerror = function() {
		console.log(coin + 'error');
	}
}