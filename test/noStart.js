const { lessLog, terminal, duaGram, Helper } = require("..");
let options = require('./config');
let result = {};

const bot = new duaGram(options);

bot.hear(/ping/i, (ctx) => lessLog(ctx));
bot.cmd('ping', (ctx) => lessLog(ctx));

bot.hear('hi', (ctx) => {
    return bot.sendMessage(ctx, 'Hi too..', { replyToMsgId: ctx.id });
})

result.scanners = bot.scanners;
result.version = bot.version;



terminal.debug('Result noStartBot');
console.log(result);