import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@shop-microservice/context/dto';


@Injectable()
export class AuthService {
  create(createAuth: CreateUserDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
