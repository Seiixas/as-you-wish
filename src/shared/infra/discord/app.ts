import DiscordJS, { Intents } from 'discord.js';
import { restartServerController } from '../../../modules/server/useCases/restart';
import { startServerController } from '../../../modules/server/useCases/start';
import { getStatusServerController } from '../../../modules/server/useCases/status';
import { stopServerController } from '../../../modules/server/useCases/stop';

const app = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

app.on('ready', (client) => {
  client.user.setPresence({
    activities: [{
      name: `A discórdia`,
      type: `WATCHING` 
    }] 
  });

  console.log('As You Wish BOT is now running!');
});

app.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === 'DM') return;

  if (message.content === 'ra#start') 
    await startServerController.handle(message);

  if (message.content === 'ra#status')
    await getStatusServerController.handle(message);

  if (message.content === 'ra#stop') 
    await stopServerController.handle(message);

  if (message.content === 'ra#restart')
    await restartServerController.handle(message);
});

export { app };