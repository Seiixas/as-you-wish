import { Message } from "discord.js";
import { createLog } from "../../../../config/log";
import { StopServerUseCase } from "./StopServerUseCase";

class StopServerController {
  constructor(
    private readonly stopServerUseCase: StopServerUseCase
  ) {}

  async handle(message: Message): Promise<Message> {
    message.channel.send({
      content: '🚦 Stopping server...'
    });

    await this.stopServerUseCase.execute();

    createLog({
      author: message.author.username,
      message: 'Stopped the server'
    });

    return message.channel.send({
      content: '📉 OpenRA Server is down!'
    });
  }
}

export { StopServerController };