import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@shop-microservice/context/dto'

import { UsersRepository } from '../users/users.repository';

@Injectable()
export class AppService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(data: CreateUserDto): void {
    this.usersRepository.save(data);
  }
}
