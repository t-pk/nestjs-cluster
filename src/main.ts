import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Cluster } from './cluster';
import * as os from 'os';
const cpus = os.cpus().length;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// use 4 workers
Cluster.register(cpus, bootstrap);
