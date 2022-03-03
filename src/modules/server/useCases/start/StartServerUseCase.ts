import { SSHExecCommandResponse } from "node-ssh";
import { getSsh } from "../../../../config/ssh";

class StartServerUseCase {
  async execute(): Promise<SSHExecCommandResponse> {
    const connection = await getSsh();

    const response = await connection
      .execCommand('sudo systemctl start openra-server');

    connection.dispose();
    
    return response;
  }
}

export { StartServerUseCase };