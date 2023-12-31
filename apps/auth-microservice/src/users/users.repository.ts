import { Injectable } from "@nestjs/common";
import { User } from '@shop-microservice/context/entitis';

@Injectable()
export class UsersRepository {
    private readonly users: User[] = [];

    save(user: User) {
        console.log('[auth service] UserRepository.save', user);
        
        this.users.push({ ...user, id: this.users.length + 1 });
    }
}