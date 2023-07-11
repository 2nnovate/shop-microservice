import { Controller, Post, Body, ValidationPipe, Inject } from '@nestjs/common';
import { CreateUserDto } from '@shop-microservice/context/dto';
import { ClientKafka } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka
  ) {}

  @Post('/sign-up')
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    console.log('[API gateway] request body: ', createUserDto);
    
    this.authClient.emit('create_user', JSON.stringify(createUserDto));
  }
}
