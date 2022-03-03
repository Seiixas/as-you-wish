import { SSHExecCommandResponse } from "node-ssh";
import { getSsh } from "../../../../config/ssh";

class GetStatusServerUseCase {
  async execute(): Promise<SSHExecCommandResponse> {
    const connection = await getSsh();

    const response = await connection
      .execCommand('sudo systemctl status openra-server');

    connection.dispose();
    
    return response;
  }
}

export { GetStatusServerUseCase };