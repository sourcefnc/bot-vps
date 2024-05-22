const { Telegraf } = require('telegraf');
const express = require('express');

const bot = new Telegraf('6990992486:AAG_VZFPz8etrN1Cq67TxPdy_uJoHMQCTI4');
const app = express();

bot.start((ctx) => {
  const userId = ctx.from.id;
  const webAppUrl = `https://sourcefnc.github.io/web-app/#/ivm?userId=${userId}`;

  ctx.reply('Click the button to open the web app', {
    reply_markup: {
      inline_keyboard: [[{ text: 'Open WebApp', url: webAppUrl }]]
    }
  });
});

bot.launch();

// Optional: Express server for webhook
const PORT = process.env.PORT || 3000;
app.use(bot.webhookCallback('/secret-path'));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

bot.telegram.setWebhook(`https://171.244.62.193/secret-path`);
