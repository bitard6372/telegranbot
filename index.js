const TelegramBot = require('node-telegram-bot-api');
const token = '5800363756:AAHvW9fwLckW72Cz6H4d0VLgaORzhNuym4s'

const bot = new TelegramBot('5800363756:AAHvW9fwLckW72Cz6H4d0VLgaORzhNuym4s', {polling: true});

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, "Даша, ты мое солнышко! Скучаю по тебе");
});