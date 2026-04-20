const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const BOT_TOKEN = "8559939276:AAGystwCez5v2-F5BLumbbVScl6hnyCqPfE"
const bot = new Telegraf(BOT_TOKEN)

let tmr = null;

bot.start((ctx) => {
    ctx.reply('Timer! Usage: /tmr mm');
})

bot.on('text', async (ctx) => {
    const userText = ctx.message.text;
    const chatId = ctx.chat.id;

    if (userText.includes("/tmr ")) {
        const number = userText.replace("/tmr ", "");
        if (!isNaN(parseInt(number))) {
            ctx.reply(`Set timer for ${number} minutes!`);
            setTimeout(() => {
                bot.telegram.sendMessage(chatId, `TIMER FOR ${number} MINUTES IS OUT!!!!!!!!!!!!!!!!!!!!!`);
            }, number * 60000 / 60) // seconds by now for testing
        }
        else {
            ctx.reply("Wrong number. Usage: /tmr mm");
        }
    }
    else {
        ctx.reply("Wrong command. Usage: /tmr mm");
    }
})

bot.launch({
    dropPendingUpdates: true
})

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
