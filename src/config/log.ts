import fs from 'fs';

interface ILog {
  message: string;
  author?: string;
}

export function createLog({ author, message }: ILog): void {
  const date = new Date().toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });

  const hour = new Date().toLocaleTimeString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });

  const log = `[${date}-${hour}] ${author} | ${message}\n`;

  fs.appendFile('activities.log', log, function (err) {
    if (err) throw err;
  });
}