import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [
            process.env.SERVICE_MODE === 'production' ? 'email-service.shop-microservice.local:9092' : 'host.docker.internal:9092'
          ],
        },
        consumer: {
          groupId: 'email-consumer',
        },
        subscribe: {
          fromBeginning: true,
        },
      },
    },
  );

  await app.listen();
}

bootstrap();
