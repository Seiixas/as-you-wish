import { Message } from 'discord.js';
import { createLog } from '../../../../config/log';
import { RestartServerUseCase } from './RestartServerUseCase';

class RestartServerController {
  constructor(
    private readonly restartServerUseCase: RestartServerUseCase
  ) {}

  async handle(message: Message): Promise<Message> {
    message.channel.send({
      content: '🔃 Restarting server...'
    })

    await this.restartServerUseCase.execute();

    createLog({
      author: message.author.username,
      message: 'Restarted the server'
    });

    return message.channel.send({
      content: '🚀 OpenRA Server is now running!'
    })
  }
}

export { RestartServerController };