import { Message } from "discord.js";
import { createLog } from "../../../../config/log";
import { GetStatusServerUseCase } from "./GetStatusServerUseCase";

class GetStatusServerController {
  constructor(
    private readonly getStatusServerUseCase: GetStatusServerUseCase
  ) {}

  async handle(message: Message): Promise<Message> {
    message.channel.send({
      content: '🕐 Looking for actual status...'
    })

    const { stdout } = await this.getStatusServerUseCase.execute();

    createLog({
      author: message.author.username,
      message: 'Requested server status'
    });

    return message.channel.send({
      content: stdout
    })
  }
}

export { GetStatusServerController };