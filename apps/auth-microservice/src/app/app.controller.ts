import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@shop-microservice/context/dto';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    console.log('[auth service] event handler, payload: ', data);
    
    this.appService.createUser(data);
  }
}
