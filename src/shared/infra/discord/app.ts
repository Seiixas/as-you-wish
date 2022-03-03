import DiscordJS, { Intents } from 'discord.js';
import { RestartServerUseCase } from '../../../modules/server/useCases/restart/RestartServerUseCase';
import { StartServerUseCase } from '../../../modules/server/useCases/start/StartServerUseCase';
import { StopServerUseCase } from '../../../modules/server/useCases/stop/StopServerUseCase';

const app = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

app.on('ready', () => {
  console.log('OpenRA is now running!');
});

app.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === 'DM') return;

  if (message.content === 'ra#start') {
    const startServerUseCase = new StartServerUseCase();

    message.channel.send({
      content: '🕐 Starting server...'
    })

    await startServerUseCase.execute();

    message.channel.send({
      content: '🚀 OpenRA Server is now running!'
    })
  }

  if (message.content === 'ra#stop') {
    const stopServerUseCase = new StopServerUseCase();

    message.channel.send({
      content: '🚦 Stopping server...'
    })

    await stopServerUseCase.execute();

    message.channel.send({
      content: '📉 OpenRA Server is down!'
    })
  }

  if (message.content === 'ra#restart') {
    const restartServerUseCase = new RestartServerUseCase();

    message.channel.send({
      content: '🔃 Restarting server...'
    })

    await restartServerUseCase.execute();

    message.channel.send({
      content: '🚀 OpenRA Server is now running!'
    })
  }

});

export { app };