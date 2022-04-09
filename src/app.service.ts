import { Injectable } from '@nestjs/common';
import cluster from 'cluster';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! '+ cluster.worker.process.pid;
  }
}
