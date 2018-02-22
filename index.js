const { Account } = require('@wireapp/core');
const express = require('express');
const app = express();
const config = require('./config/config');
const Weather = require('./fetchWeather.js');

const account = new Account();

//Info to show the user
let info = "Welcome to your Weather Bot ☔️ \n Usage Info: \n/ => info \n/weather {city} => temperature of the city";


account.on(Account.INCOMING.TEXT_MESSAGE, ({ conversation, content }) => {

  if (content === '/') {
    account.service.conversation.sendTextMessage(conversation, info);
  } else if (content.includes('/weather ')) {  // checking if the input have /weather with one space 
    let city = content.slice(8, content.length); // taking the value of the city
    Weather.fetchWeather(conversation, city, account);
  } else {
    account.service.conversation.sendTextMessage(conversation, "Sorry but i don't understand what you said, try with '/' for information");
  }
});

account.listen({
  email: config.EMAIL,
  password: config.PASSWORD,
  persist: false,
});


