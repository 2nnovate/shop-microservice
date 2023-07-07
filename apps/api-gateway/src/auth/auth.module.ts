import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          // TODO: docker-compose로 카프카 컨테이너 띄운 뒤 작성하기
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
