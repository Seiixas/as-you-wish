import { SSHExecCommandResponse } from "node-ssh";
import { getSsh } from "../../../../config/ssh";

class RestartServerUseCase {
  async execute(): Promise<SSHExecCommandResponse> {
    const connection = await getSsh();

    const response = await connection
      .execCommand('sudo systemctl restart openra-server');

    connection.dispose();

    return response;
  }
}

export { RestartServerUseCase };