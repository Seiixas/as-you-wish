import { Message } from 'discord.js';
import { createLog } from '../../../../config/log';
import { StartServerUseCase } from './StartServerUseCase';

class StartServerController {
  constructor(
    private readonly startServerUseCase: StartServerUseCase
  ) {}

  async handle(message: Message): Promise<Message> {
    message.channel.send({
      content: '🕐 Starting server...'
    })

    await this.startServerUseCase.execute();

    createLog({
      author: message.author.username,
      message: 'Started the server'
    });

    return message.channel.send({
      content: '🚀 OpenRA Server is now running!'
    })
  }
}

export { StartServerController };