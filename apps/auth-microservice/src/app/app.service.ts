import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@shop-microservice/context/dto'

@Injectable()
export class AppService {
  createUser(data: CreateUserDto): void {
    console.log('createUser, data: ', data);
    
  }
}
