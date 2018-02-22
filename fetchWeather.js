const info = require('./showWeather.js');
const fetch = require('node-fetch');
const config = require('./config/config');

//Open weather settings
let API_KEY = config.APIKEY;

module.exports = {
    fetchWeather: function (conversation, country, account) {  // fetching the weather passing the wanted city

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                let weatherInfo = Object.assign({}, data);
                info.showWeather(conversation, weatherInfo, account);
            })
            .catch(error => {
                account.service.conversation.sendTextMessage(conversation, "Sorry but the country is wrong");
            })
    }
}

