import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@shop-microservice/context/dto';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    // 연결된 이후에 핸들러가 동작!
    console.log('create user handler recieved event!', data);
    
    this.appService.createUser(data);
  }
}
