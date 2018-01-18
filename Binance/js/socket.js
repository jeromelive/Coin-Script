var adaUrl = "wss://stream2.binance.com:9443/ws/adabtc@aggTrade.b10",
	babUrl = "wss://stream2.binance.com:9443/ws/bnbbtc@aggTrade.b10",
	adaConnection = new WebSocket(adaUrl),
	bnbConnection = new WebSocket(babUrl),
	ADA = document.getElementById('ada'),
	BNB = document.getElementById('bnb'),
	NUM = document.getElementById('num');
var number = {ada: 1, bnb: 1};
adaConnection.onopen = function() {
	console.log('adaopen');
}

adaConnection.onmessage = function(result) {
	number.ada = Number(JSON.parse(result.data).p);
	ADA.innerText = 'ADA: ' + number.ada;
	NUM.innerText = 'NUM: ' + Math.ceil(2.19 * number.bnb / number.ada);
}

adaConnection.onerror = function(error){
	console.log('adaerror');
};

bnbConnection.onopen = function() {
	console.log('bnbopen');
}

bnbConnection.onmessage = function(result) {
	number.bnb = Number(JSON.parse(result.data).p);
	BNB.innerText = 'BNB: ' + number.bnb;
	NUM.innerText = 'NUM: ' + Math.ceil(2.19 * number.bnb / number.ada);
}

bnbConnection.onerror = function() {
	console.log('banerror');
}