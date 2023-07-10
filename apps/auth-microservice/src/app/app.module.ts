import { Module } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsersRepository],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
