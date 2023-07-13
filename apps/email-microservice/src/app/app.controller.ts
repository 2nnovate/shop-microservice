import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@shop-microservice/context/dto';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    console.log('[email service] event handler, payload: ', data);
    
    this.appService.sendEmail(data.email, '회원가입해주셔서 감사합니다. 접속 링크를 클릭해주세요.');
  }
}
