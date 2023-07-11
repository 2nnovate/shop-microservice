import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@shop-microservice/context/dto'
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class AppService {
  constructor(private usersRepository: UsersRepository) {}

  createUser(data: CreateUserDto): void {
    console.log('[auth service] AppService.createUser', data);
    
    this.usersRepository.save(data);
  }
}
