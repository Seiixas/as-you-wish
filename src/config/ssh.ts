import 'dotenv/config';

import { NodeSSH } from "node-ssh";
import path from 'path';

export async function getSsh() {
  const ssh = new NodeSSH();

  const connection = await ssh.connect({
    host: process.env.SERVER_HOST,
    username: process.env.SERVER_NAME,
    privateKey: path.resolve(__dirname, '..', '..', 'key.pem')
  })

  return connection;
}