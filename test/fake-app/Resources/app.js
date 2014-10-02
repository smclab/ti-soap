var soap = require('soap');
var config = require('config');

soap.createClient('http://www.webservicex.net/CurrencyConvertor.asmx?WSDL', function (err, client) {
  if (err) throw err;

  Ti.API.error("Methods:");
  Ti.API.error(Object.keys(client));

  Ti.API.error(client.ConversionRate);

  client.ConversionRate({
    FromCurrency: 'USD',
    ToCurrency: 'CNY'
  }, function (err, results) {
    if (err) throw err;
    Ti.API.error(results);
  });
});
