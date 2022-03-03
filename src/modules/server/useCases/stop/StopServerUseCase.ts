import { SSHExecCommandResponse } from "node-ssh";
import { getSsh } from "../../../../config/ssh";

class StopServerUseCase {
  async execute(): Promise<SSHExecCommandResponse> {
    const connection = await getSsh();

    const response = await connection
      .execCommand('sudo systemctl stop openra-server');

    connection.dispose();

    return response;
  }
}

export { StopServerUseCase };