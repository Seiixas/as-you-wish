import 'reflect-metadata';
import 'dotenv/config';

import { app } from './app';

app.login(process.env.DISCORD_TOKEN);