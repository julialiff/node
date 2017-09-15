const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/c464af8bd6ebef1264f4130048aecd2c/${lat},${lng}?units=si`,
    json:true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to forecast.io servers.');
    } else if(response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};


module.exports = {
  getWeather
};
