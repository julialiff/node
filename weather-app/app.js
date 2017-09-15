const yargs = require('yargs')

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
})
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  } else {
    var lat = results.lat
    var lng = results.lng

    weather.getWeather(lat, lng, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      } else {
        console.log(`A temperatura em ${argv.address} é de ${weatherResults.temperature}ºC e a sensação térmica é de ${weatherResults.apparentTemperature}ºC.`);
      }
    });

  }
});
//c464af8bd6ebef1264f4130048aecd2c
//https://api.darksky.net/forecast/c464af8bd6ebef1264f4130048aecd2c/-23.5287729,-46.5686827?units=si
